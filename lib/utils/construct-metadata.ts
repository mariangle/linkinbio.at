export async function constructMetadata(data: {
  title: string;
  description: string;
  image: string;
}) {
  return {
    title: data.title,
    description: data.description,
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.image,
          alt: `${data.title} Profile Picture`,
        },
      ],
    },

    robots: {
      index: false,
      follow: false,
      nocache: false,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
