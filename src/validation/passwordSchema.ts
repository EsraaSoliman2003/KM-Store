import { z } from "zod";

export const getPasswordSchema = (
  t: (key: string) => string
) => {
  return z
    .object({
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

export type PasswordSchemaType = z.infer<
  ReturnType<typeof getPasswordSchema>
>;