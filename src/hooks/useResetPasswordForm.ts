"use client";

import {
    SubmitHandler,
    UseFormReturn,
    useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import {
    useAppDispatch,
    useAppSelector,
} from "@/rtk/hooks";

import { resetPassword } from "@/rtk/slices/authSlice";
import { getResetPasswordSchema, ResetPasswordSchemaType } from "@/validation/resetPasswordSchema";

interface UseResetPasswordFormReturn
    extends Pick<
        UseFormReturn<ResetPasswordSchemaType>,
        | "register"
        | "handleSubmit"
        | "control"
        | "formState"
        | "setValue"
        | "trigger"
    > {
    onSubmit: SubmitHandler<ResetPasswordSchemaType>;
    loading: boolean;
    t: (key: string) => string;
}

export const useResetPasswordForm =
    (): UseResetPasswordFormReturn => {
        const t = useTranslations();
        const router = useRouter();
        const searchParams = useSearchParams();
        const dispatch = useAppDispatch();

        const loading = useAppSelector(
            (state) => state.auth.loading
        );

        const countryCode =
            searchParams.get("country_code") || "+20";

        const phone =
            searchParams.get("phone") || "";

        const code =
            searchParams.get("code") || "";

        const resetPasswordSchema =
            getResetPasswordSchema(t);

        const form =
            useForm<ResetPasswordSchemaType>({
                resolver: zodResolver(
                    resetPasswordSchema
                ),
                mode: "onChange",

                defaultValues: {
                    password: "",
                    password_confirmation: "",
                },
            });

        const onSubmit: SubmitHandler<
            ResetPasswordSchemaType
        > = async (data) => {
            try {
                const resultAction =
                    await dispatch(
                        resetPassword({
                            country_code: countryCode,
                            phone,
                            code,
                            password: data.password,
                            password_confirmation:
                                data.password_confirmation,
                        })
                    );

                if (
                    resetPassword.rejected.match(
                        resultAction
                    )
                ) {
                    return;
                }

                toast.success(
                    t("PasswordResetSuccessfully")
                );

                router.replace("/");
            } catch {
                toast.error(
                    t("UnexpectedError")
                );
            }
        };

        return {
            register: form.register,
            handleSubmit: form.handleSubmit,
            control: form.control,
            formState: form.formState,
            setValue: form.setValue,
            trigger: form.trigger,
            onSubmit,
            loading,
            t,
        };
    };