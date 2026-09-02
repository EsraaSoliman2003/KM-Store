import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const getEditProfileSchema = (
  t: (key: string) => string
) => {
  return z.object({
    name: z
      .string()
      .min(1, {
        message: t("nameRequired"),
      })
      .min(5, {
        message: t("full_name_v"),
      }),

    email: z
      .string()
      .email({
        message: t("email_v"),
      })
      .or(z.literal("")),

    phone: z
      .string()
      .min(1, {
        message: t("phone_required_v"),
      })
      .refine(
        (val) => isValidPhoneNumber(val),
        {
          message: t("phone_v"),
        }
      ),
  });
};

export type EditProfileSchemaType = z.infer<
  ReturnType<typeof getEditProfileSchema>
>;