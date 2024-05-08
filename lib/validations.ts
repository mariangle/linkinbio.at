import * as z from "zod";

export const BackgroundFormSchema = z.object({
  color: z.string(),
  gradientStartColor: z.string().optional(),
  gradientEndColor: z.string().optional(),
  gradientAngle: z.number(),
  url: z.string().optional(),
});

export type BackgroundFormValues = z.infer<typeof BackgroundFormSchema>;

export const TopIconsFormSchema = z.object({
  shadow: z.boolean().default(false),
  style: z.string().optional(),
  color: z.string().optional(),
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

export const TypographyFormSchema = z.object({
  titleColor: z.string(),
  titleFont: z.string(),
  textColor: z.string(),
  textFont: z.string(),
  hideUsername: z.boolean().default(false),
});

export type TypographyFormValues = z.infer<typeof TypographyFormSchema>;

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
  title: z.string().optional(),
  weather: z.string().optional(),
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

export const WebsiteLinkFormSchema = z.object({
  iconId: z.number().default(0),
  archived: z.boolean().default(false),
  title: z.string().min(1).max(20),
  url: z.string().url(),
});

export type WebsiteLinkFormValues = z.infer<typeof WebsiteLinkFormSchema>;

export const PlatformLinkFormSchema = z.object({
  provider: z.string().optional(),
  username: z.string().min(1).max(20),
  archived: z.boolean().default(false),
  title: z.string().optional(),
  isTopIcon: z.boolean().default(false),
});

export type PlatformLinkFormValues = z.infer<typeof PlatformLinkFormSchema>;

export const SpotifyFormSchema = z.object({
  contentId: z.string(),
  type: z.string(),
  enabled: z.boolean().default(true),
  darkBackground: z.boolean().default(true),
  compactLayout: z.boolean().default(true),
});

export type SpotifyFormValues = z.infer<typeof SpotifyFormSchema>;

export const SoundcloudFormSchema = z.object({
  trackId: z.string(),
  enabled: z.boolean().default(true),
});

export type SoundcloudFormValues = z.infer<typeof SoundcloudFormSchema>;

export const YoutubeFormSchema = z.object({
  videoId: z.string(),
  enabled: z.boolean().default(true),
});

export type YoutubeFormValues = z.infer<typeof YoutubeFormSchema>;
