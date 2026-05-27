# Harbour Onboarding Flow Design

**Date:** 2026-05-27  
**Status:** Approved  
**Purpose:** Define the modal-based onboarding/orientation experience that guides new users through initial situation assessment and account creation.

---

## Overview

The onboarding flow is a **fullscreen modal overlay** that opens when users click "Tell Harbour what's happening" on the homepage. It guides users through understanding their situation and deciding whether to create an account.

The experience is designed as a **fake door test** — a simple, testable flow that captures user intent and progression data without sophisticated personalization. Future iterations will use this data to refine the flow.

---

## Design Principles

- **Sequential, not overwhelming:** One screen at a time. Users see clear progress.
- **Closable at any point:** Close button (X) always visible. Users can exit freely; all exits are tracked.
- **Earned, not gated:** Account creation only offered when it adds clear value (after showing relief + next actions).
- **Trackable progression:** Every interaction logs an analytics event for funnel analysis.
- **Minimal, calm aesthetic:** Follows existing Harbour design system (serif headings, sage accents, soft shadows).

---

## Architecture

### Component Structure

```
<OnboardingModal />
├── <OnboardingStep1 /> — Starting options
├── <OnboardingStep2 /> — Adaptive questions
├── <OnboardingStep3 /> — Relief moment + next actions
├── <OnboardingStep4 /> — Account creation
└── [Modal chrome: close button, progress bar]
```

### State Management

React `useState` with minimal state:
- `currentStep`: 1–4
- `userAnswers`: Object tracking selections/responses
- `formData`: Email, password, name (for Step 4)
- `isLoading`: For async account creation

No complex context, no external state library needed for MVP.

### Modal Behavior

- Opens as fullscreen overlay when user clicks homepage CTA
- Close button (X) in top-right corner, visible at all times
- Clicking close closes modal, returns user to homepage
- All interactions (including close/exit) tracked to GA

---

## Screen-by-Screen Breakdown

### Screen 1: Opening Orientation

**Purpose:** Understand what brings the user here; reduce blank-page anxiety.

**Visual hierarchy:**
- Headline (serif, large): "Tell Harbour what's happening"
- Subheading (sans-serif, muted): "We'll help you understand what matters next and guide you through the process step by step."
- Six selectable option buttons (full-width, equal height):
  - "Someone died recently"
  - "I've been named executor"
  - "I think probate is required"
  - "I'm dealing with paperwork"
  - "I'm not sure what to do next"
  - "Or describe your situation in your own words"

**If user selects last option:** Textarea appears, user types free-form input, clicks "Continue" button.

**Interaction:** Click any option (or submit free text) → record selection → track `onboarding_option_selected` event → advance to Screen 2.

**Design notes:**
- Use existing button styles from the design system
- Options are large, easy to tap on mobile
- Spacing follows existing Harbour spacing scale
- Animated fade-up entrance (existing animation)

---

### Screen 2: Adaptive Questions

**Purpose:** Gather context to understand their situation and determine appropriate next steps.

**Logic:**
- Based on Screen 1 selection, ask 1–2 follow-up questions
- If user answers confidently (not "I'm not sure"), jump to Screen 3
- If user answers vaguely, ask 1 additional question for clarity
- For free-text responses, parse keywords and ask clarifying questions

**Example question paths:**
- "Someone died recently" → "Has the death been registered?" + "Do you know if there's a will?"
- "I've been named executor" → "Has probate been mentioned yet?" + "Was there a will?"
- Free text → Ask 1–2 clarifying questions based on keywords detected

**Visual hierarchy:**
- Question headline (serif, large)
- 3–4 option buttons (same style as Screen 1)
- Progress bar below question (shows "Question X of Y")

**Interaction:** Click answer → record response → track `onboarding_question_answered` event → if final question, advance to Screen 3; else show next question.

**Design notes:**
- Reuse existing question/option button styles from probate assessment component where possible
- Fade-up animation for new questions
- Back button NOT shown (conversational UX, not form UX)

---

### Screen 3: Relief Moment + Next Actions

**Purpose:** Provide immediate emotional relief and clarity on priorities.

**Visual hierarchy:**
1. **Icon + label** (top): Checkmark or calm icon, "Here's what matters now"
2. **Headline** (serif): Personalized relief message (2–3 sentences)
3. **Next actions** (checklist-style list): 2–3 prioritized items
4. **Account creation section** (below): Prompt + buttons

**Relief message examples:**
- "You probably don't need to worry about probate immediately. The most important thing right now is getting information organized and notifying key people."
- "Based on what you've shared, probate is likely needed. But you don't have to figure it all out today—let's break it down."

**Next actions (always same for MVP):**
- "Locate key documents (will, death certificate, bank statements)"
- "Notify banks and major organizations"
- "Gather information about assets and debts"

**Account creation prompt:**
```
Text: "Save your progress to track these steps and keep everything organized."
Buttons:
- Primary: "Create free account"
- Secondary: "Continue as guest"
```

**Interaction:**
- Click "Create free account" → advance to Screen 4
- Click "Continue as guest" → track `onboarding_closed` event → close modal, return to homepage

**Design notes:**
- Heading uses serif font, calm tone (not sales-y)
- Checklist items use existing accent color and icon style
- Account creation section is subtle, not aggressive
- Fade-up animation

---

### Screen 4: Account Creation

**Purpose:** Capture email and password, create account, onboard user to workspace.

**Visual hierarchy:**
1. **Headline** (serif): "Save your progress"
2. **Supporting text**: "Create a free Harbour account to save your progress, track your next steps, and organize all your documents in one place."
3. **Form fields**:
   - Email (required, type="email")
   - Password (required, type="password")
   - Name (optional, type="text")
4. **Buttons**:
   - Primary: "Create account"
   - Secondary: "Back"

**Form behavior:**
- Basic client-side validation (email format, password length ≥ 8)
- On submit, POST to `/api/auth/register` with email, password, name
- On success: "Account created! Redirecting to workspace..." → redirect to `/dashboard` or workspace entry point
- On error: Show error message, allow retry

**Interaction:**
- Fill form → click "Create account" → track `onboarding_signup_started` → on success, track `onboarding_signup_completed` → redirect
- Click "Back" → return to Screen 3

**Design notes:**
- Input styles from existing UI components (Input component)
- Loading state on button during submission
- Error messages use existing error styling

---

## Data Flow & Analytics

### Events Tracked

| Event | Triggered | Payload |
|-------|-----------|---------|
| `onboarding_opened` | Modal opens | source (should be "homepage_cta") |
| `onboarding_option_selected` | User selects Step 1 option | option_label, option_index |
| `onboarding_free_text_submitted` | Free text submitted | text_length |
| `onboarding_question_answered` | User answers a question | question_id, answer, question_index, total_questions |
| `onboarding_relief_viewed` | Screen 3 displays | situation_inferred (based on answers) |
| `onboarding_signup_started` | User clicks "Create free account" | — |
| `onboarding_signup_completed` | Account successfully created | email_domain |
| `onboarding_closed` | Modal closed by user | step_closed_from, time_spent_seconds |
| `onboarding_guest_continued` | User clicks "Continue as guest" | step_exited_from |

### Funnel Metric

Primary funnel to track:
```
Opened → Option selected → Questions answered → Relief viewed → Signup started → Signup completed
```

This shows:
- Overall entry rate (clicks on homepage CTA)
- Drop-off at each stage
- Conversion rate (relief viewed → signup)
- Top entry options (which starting option converts best)

---

## Component Integration

### Homepage Changes

Update `<GettingStartedButton />` to:
- Keep existing label: "Tell Harbour what's happening"
- On click: Open `<OnboardingModal />`
- (No navigation needed; modal opens in-place)

### New Components

- `<OnboardingModal />` — Container, step routing, close logic
- `<OnboardingStep1 />` — Options + free text input
- `<OnboardingStep2 />` — Question display + answer selection
- `<OnboardingStep3 />` — Relief message + next actions + account creation prompt
- `<OnboardingStep4 />` — Account creation form

All components follow existing design system (colors, typography, spacing, shadows).

---

## User Journeys

### Happy Path (Complete Flow)
```
Homepage CTA → Screen 1 (select option) → Screen 2 (answer questions) → Screen 3 (relief + actions) → Screen 4 (create account) → Workspace
```

### Exit at Account Prompt
```
Homepage CTA → Screen 1 → Screen 2 → Screen 3 → Click "Continue as guest" → Return to homepage
```

### Early Exit
```
Homepage CTA → Screen N → Click close (X) → Return to homepage
```

All exits tracked; funnel shows where users dropped.

---

## Success Criteria

### For Fake Door Test

1. **Traffic & funnel visibility:** Can track visitor entry, progression, and drop-off at each stage
2. **Top entry options:** Identify which starting option resonates most
3. **Conversion intent:** Measure how many users reach account creation step
4. **Sign-up completion:** Track account creation success rate
5. **Qualitative signals:** Any free-text responses that hint at common pain points

### Not in Scope (MVP)

- Sophisticated adaptive logic (rules-based, not AI-driven)
- Personalized next actions (same list for everyone in MVP)
- Account login/return user flow (assume fresh visit)
- Mobile responsiveness refinement (follows existing design, minimal tweaks)

---

## Technical Notes

### API Endpoints Needed

- `POST /api/auth/register` — Create account (email, password, name)
  - Returns: { success, userId, redirectUrl } or { error }

### Client-Side Validation

- Email: Valid format (regex or HTML5)
- Password: ≥ 8 characters
- Name: Optional, no validation

### Error Handling

- Network error on account creation: Retry button, user-friendly message
- Email already exists: Show message, allow user to go back and change email
- Any other error: Generic "Something went wrong" message with contact link

---

## Design System Integration

The onboarding modal uses existing Harbour design system:

- **Colors:** Primary (dark navy), Background (warm off-white), Accent (sage green), Muted (grays)
- **Typography:** Serif (headlines), sans-serif (body)
- **Spacing:** Tailwind scales (existing)
- **Shadows:** Soft shadow class (existing)
- **Animations:** Fade-up animation (existing, 780ms)
- **Components:** Button, Input, Textarea (existing UI components)

No new colors or typography introduced. Visual consistency with homepage.

---

## Timeline & Next Steps

1. **Implementation plan** (writing-plans skill)
2. **Component build** (OnboardingModal + steps)
3. **Analytics integration** (GA event tracking)
4. **QA & testing** (happy path, edge cases, mobile)
5. **Ship to production** → collect data → iterate

---

## Appendix: Question Branching Logic (MVP)

For the fake door test, question paths are simple:

**If option = "Someone died recently":**
- Q1: "Has the death been registered?" (yes/no/unsure)
- Q2: "Do you know if there's a will?" (yes/no/unsure)

**If option = "I've been named executor":**
- Q1: "Has probate been mentioned yet?" (yes/no/unsure)
- Q2: "Was there a will?" (yes/no/unsure)

**If option = "I think probate is required":**
- Q1: "Was there a will?" (yes/no/unsure)
- Q2: "Are you the executor?" (yes/no/unsure)

**If option = "I'm dealing with paperwork":**
- Q1: "What type of documents are you managing?" (will/accounts/property/unsure)
- Q2: "Do you know if probate is needed?" (yes/no/unsure)

**If option = "I'm not sure what to do next":**
- Q1: "Did someone recently pass away?" (yes/no)
- Q2: "Has probate been mentioned?" (yes/no/unsure)

**If free text input:**
- Parse for keywords (will, executor, probate, documents, died, etc.)
- Ask 1–2 clarifying questions based on detected keywords
- If no clear keywords, ask: "Is probate likely to be needed?" (yes/no/unsure)

**Progression rule:**
- If 2+ answers contain "unsure" → ask 1 more question
- Otherwise → advance to Screen 3

This is simple logic for MVP. Iterate based on actual user input data.
