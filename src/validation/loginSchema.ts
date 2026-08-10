import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const getLoginSchema = (t: (key: string) => string) => {
  return z.object({
    phone: z
      .string()
      .min(1, { message: t("phone_required_v") })
      .refine((val) => isValidPhoneNumber(val), {
        message: t("phone_v"),
      }),

    password: z
      .string()
      .min(1, { message: t("password_required_v") }),
  });
};

export type LoginSchemaType = z.infer<
  ReturnType<typeof getLoginSchema>
>;