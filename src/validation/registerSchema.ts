import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const getRegisterSchema = (
  t: (key: string) => string
) => {
  return z
    .object({
      name: z
        .string()
        .min(5, { message: t("full_name_v") }),

      phone: z
        .string()
        .min(1, { message: t("phone_required_v") })
        .refine((val) => isValidPhoneNumber(val), {
          message: t("phone_v"),
        }),

      password: z
        .string()
        .min(8, { message: t("password_v") })
        .regex(/[a-z]/, {
          message: t("password_lower_v"),
        })
        .regex(/[A-Z]/, {
          message: t("password_upper_v"),
        })
        .regex(/[^a-zA-Z0-9]/, {
          message: t("password_non_alnum_v"),
        }),

      password_confirmation: z
        .string()
        .min(1, {
          message: t("confirm_password_v"),
        }),
    })
    .refine(
      (data) => data.password === data.password_confirmation,
      {
        message: t("password_match_v"),
        path: ["password_confirmation"],
      }
    );
};

export type RegisterSchemaType = z.infer<
  ReturnType<typeof getRegisterSchema>
>;