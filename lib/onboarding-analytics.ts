type OnboardingEvent =
  | "onboarding_opened"
  | "onboarding_option_selected"
  | "onboarding_free_text_submitted"
  | "onboarding_question_answered"
  | "onboarding_relief_viewed"
  | "onboarding_signup_started"
  | "onboarding_signup_completed"
  | "onboarding_closed"
  | "onboarding_guest_continued";

export function trackOnboardingEvent(
  event: OnboardingEvent,
  payload: Record<string, any> = {}
) {
  const eventPayload = {
    event,
    ...payload,
  };

  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(eventPayload);
  }

  console.info("[Harbour Onboarding]", eventPayload);
}
