import * as z from "zod";

export const BackgroundFormSchema = z.object({
  color: z.string(),
  gradientStartColor: z.string().optional(),
  gradientEndColor: z.string().optional(),
  gradientAngle: z.number().optional(),
  url: z.string().optional(),
});

export type BackgroundFormValues = z.infer<typeof BackgroundFormSchema>;

export const TopIconsFormSchema = z.object({
  shadow: z.boolean().default(false).optional(),
  style: z.string().optional(),
  color: z.string().optional(),
  position: z.enum(["bottom", "top"], {
    required_error: "You need to select a position.",
  }),
  size: z.enum(["small", "medium", "large"], {
    required_error: "You need to select a size.",
  }),
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
  titleColor: z.string().optional(),
  titleFont: z.string().optional(),
  textColor: z.string().optional(),
  textFont: z.string().optional(),
  hideUsername: z.boolean().default(false).optional(),
});

export type TypographyFormValues = z.infer<typeof TypographyFormSchema>;

export const ButtonsFormSchema = z.object({
  shadowSolid: z.boolean(),
  shadowSpreadRadius: z.number(),
  shadowColor: z.string(),
  fontColor: z.string(),
  fontFamily: z.string(),
  fontShadow: z.boolean(),
  textHidden: z.boolean(),
  borderColor: z.string(),
  borderRadius: z.number(),
  borderWidth: z.number(),
  backgroundColor: z.string(),
  backgroundOpacity: z.number(),
  backgroundBlur: z.number(),
  backgroundSocialColor: z.boolean(),
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

const validateIconName = (name: string | undefined) => {
  if (!name) return true;
  const regex = /^(Fa|Lu|Hi)[A-Z].*$/;
  return regex.test(name);
};

export const WebsiteLinkFormSchema = z.object({
  archived: z.boolean().default(false).optional(),
  featured: z.boolean().default(false).optional(),
  title: z.string().min(1).max(50).optional(),
  url: z.string().url(),
  imageUrl: z.string().optional(),
  iconName: z.string().optional().refine(validateIconName, {
    message:
      "Icon name must start with 'Fa', 'Lu', or 'Hi' and the next letter must be uppercase.",
  }),
});

export type WebsiteLinkFormValues = z.infer<typeof WebsiteLinkFormSchema>;

export const PlatformLinkFormSchema = z.object({
  provider: z.string().optional(),
  username: z.string().min(1).max(20),
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
  videoId: z.string().optional(),
  enabled: z.boolean().default(true).optional(),
});

export type YoutubeFormValues = z.infer<typeof YoutubeFormSchema>;
