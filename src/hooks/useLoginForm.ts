"use client";

import {
  SubmitHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { setCookie } from "cookies-next";

import {
  useAppDispatch,
  useAppSelector,
} from "@/rtk/hooks";

import { loginUser } from "@/rtk/slices/authSlice";

import {
  getLoginSchema,
  LoginSchemaType,
} from "@/validation/loginSchema";

import { setPhoneData } from "@/rtk/slices/phoneSlice";

interface UseLoginFormReturn
  extends Pick<
    UseFormReturn<LoginSchemaType>,
    | "register"
    | "handleSubmit"
    | "control"
    | "formState"
    | "setValue"
    | "trigger"
  > {
  onSubmit: SubmitHandler<LoginSchemaType>;
  loading: boolean;
  t: (key: string) => string;
}

export const useLoginForm =
  (): UseLoginFormReturn => {
    const t = useTranslations();
    const router = useRouter();
    const dispatch = useAppDispatch();

    const loading = useAppSelector(
      (state) => state.auth.loading
    );

    const loginSchema = getLoginSchema(t);

    const form = useForm<LoginSchemaType>({
      resolver: zodResolver(loginSchema),
      mode: "onChange",

      defaultValues: {
        phone: "",
        password: "",
      },
    });

    const onSubmit: SubmitHandler<
      LoginSchemaType
    > = async (data) => {
      const parsedPhone =
        parsePhoneNumberFromString(data.phone);

      if (!parsedPhone) {
        toast.error(t("InvalidPhone"));
        return;
      }

      const countryCode =
        `+${parsedPhone.countryCallingCode}`;

      const phoneNumber =
        parsedPhone.nationalNumber;

      dispatch(
        setPhoneData({
          phoneNumber,
          countryCode:
            parsedPhone.countryCallingCode,
        })
      );

      try {
        const resultAction = await dispatch(
          loginUser({
            country_code: countryCode,
            phone: phoneNumber,
            password: data.password,
          })
        );

        if (
          loginUser.rejected.match(
            resultAction
          )
        ) {
          return;
        }

        const { token } =
          resultAction.payload.data;

        setCookie("token", token, {
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        });

        toast.success(
          t("LoginSuccess")
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