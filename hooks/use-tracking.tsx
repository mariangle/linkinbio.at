export function useTracking() {
  const trackClick = async (linkId: string, isPlatform: boolean) => {
    try {
      await fetch(
        `/api/analytics/clicks/${isPlatform ? "platform" : "website"}/${linkId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    } catch (e) {
      console.error(e);
    }
  };

  const trackView = async (userId: string) => {
    try {
      const res = await fetch(`/api/analytics/views/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    trackClick,
    trackView,
  };
}
