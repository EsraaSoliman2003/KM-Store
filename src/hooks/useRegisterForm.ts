"use client";

import {
  useForm,
  SubmitHandler,
  UseFormReturn,
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

import {
  getRegisterSchema,
  RegisterSchemaType,
} from "@/validation/registerSchema";

import { setPhoneData } from "@/rtk/slices/phoneSlice";
import { registerUser } from "@/rtk/slices/authSlice";

interface UseRegisterFormReturn
  extends Pick<
    UseFormReturn<RegisterSchemaType>,
    | "register"
    | "handleSubmit"
    | "control"
    | "formState"
    | "setValue"
    | "trigger"
  > {
  onSubmit: SubmitHandler<RegisterSchemaType>;
  loading: boolean;
  t: (key: string) => string;
}

export const useRegisterForm =
  (): UseRegisterFormReturn => {
    const t = useTranslations();
    const router = useRouter();
    const dispatch = useAppDispatch();

    const loading = useAppSelector(
      (state) => state.auth.loading
    );

    const registerSchema = getRegisterSchema(t);

    const form = useForm<RegisterSchemaType>({
      resolver: zodResolver(registerSchema),
      mode: "onChange",

      defaultValues: {
        name: "",
        phone: "",
        password: "",
        password_confirmation: "",
      },
    });

    const onSubmit: SubmitHandler<
      RegisterSchemaType
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
          registerUser({
            name: data.name,
            country_code: countryCode,
            phone: phoneNumber,
            password: data.password,
            password_confirmation:
              data.password_confirmation,
          })
        );

        if (
          registerUser.rejected.match(
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
          t("AccountCreated")
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