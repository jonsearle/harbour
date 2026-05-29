declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {},
) {
  const eventPayload = {
    event: eventName,
    ...params,
  };

  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", eventName, params);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(["event", eventName, params]);
    }
  }

  console.info("[Harbour analytics]", JSON.stringify(eventPayload));
}
