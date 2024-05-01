import * as z from "zod";

export const BackgroundFormSchema = z.object({
  color: z.string(),
  url: z.string().optional(),
});

export type BackgroundFormValues = z.infer<typeof BackgroundFormSchema>;

export const TopIconsFormSchema = z.object({
  shadow: z.boolean().default(false),
  style: z.string().optional(),
});

export type TopIconsFormValues = z.infer<typeof TopIconsFormSchema>;

export const ProfileFormSchema = z.object({
  title: z
    .string()
    .max(20, {
      message: "Title must be at most 20 characters.",
    })
    .optional(),
  bio: z
    .string()
    .max(160, {
      message: "Bio must be at most 160 characters.",
    })
    .optional(),
  image: z.string().optional(),
  occupation: z
    .string()
    .max(20, {
      message: "Occupation must be at most 20 characters.",
    })
    .optional(),
  location: z
    .string()
    .max(20, {
      message: "Location must be at most 20 characters.",
    })
    .optional(),
});

export type ProfileFormValues = z.infer<typeof ProfileFormSchema>;

export const ProfileOptionsFormSchema = z.object({
  titleColor: z.string(),
  titleFont: z.string(),
  invertTextColor: z.boolean().default(false),
  hideUsername: z.boolean().default(false),
});

export type ProfileOptionsFormValues = z.infer<typeof ProfileOptionsFormSchema>;

export const ButtonsFormSchema = z.object({
  shadowSolid: z.boolean(),
  shadowSpreadRadius: z.number(),
  shadowColor: z.string(),
  textColor: z.string(),
  textHidden: z.boolean(),
  borderColor: z.string(),
  borderRadius: z.number(),
  borderWidth: z.number(),
  backgroundColor: z.string(),
  backgroundOpacity: z.number(),
  backgroundBlur: z.number(),
  backgroundSocialColor: z.boolean(),
  iconHidden: z.boolean(),
  iconShadow: z.boolean(),
  iconSocialColor: z.boolean(),
});

export type ButtonsFormValues = z.infer<typeof ButtonsFormSchema>;

export const EffectsFormSchema = z.object({
  titleSparkles: z.boolean().default(false),
  titleTypewriter: z.boolean().default(false),
  bioTypewriter: z.boolean().default(false),
  weatherEffect: z.string().optional().optional(),
});

export type EffectsFormValues = z.infer<typeof EffectsFormSchema>;

export const UserFormSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: "Username must be at least 1 characters.",
    })
    .max(20, {
      message: "Username must be at most 20 characters.",
    }),
});

export type UserFormValues = z.infer<typeof UserFormSchema>;

export const LinkFormSchema = z.object({
  title: z.string().max(20, {
    message: "Title must be at most 20 characters.",
  }),
  url: z.string().url(),
  isTopIcon: z.boolean().default(false),
  iconId: z.number().optional(),
});

export type LinkFormValues = z.infer<typeof LinkFormSchema>;
