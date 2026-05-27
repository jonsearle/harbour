export type Question = {
  id: string;
  title: string;
  options: { label: string; value: string }[];
};

const QUESTIONS_MAP: Record<string, Question[]> = {
  someone_died_recently: [
    {
      id: "q1-death-registered",
      title: "Has the death been registered?",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "I'm not sure", value: "unsure" },
      ],
    },
    {
      id: "q2-will",
      title: "Do you know if there's a will?",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "I'm not sure", value: "unsure" },
      ],
    },
  ],
  named_executor: [
    {
      id: "q1-probate-mentioned",
      title: "Has probate been mentioned yet?",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "I'm not sure", value: "unsure" },
      ],
    },
    {
      id: "q2-will",
      title: "Was there a will?",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "I'm not sure", value: "unsure" },
      ],
    },
  ],
  probate_required: [
    {
      id: "q1-will",
      title: "Was there a will?",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "I'm not sure", value: "unsure" },
      ],
    },
    {
      id: "q2-executor",
      title: "Are you the executor?",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "I'm not sure", value: "unsure" },
      ],
    },
  ],
  dealing_with_paperwork: [
    {
      id: "q1-document-type",
      title: "What type of documents are you managing?",
      options: [
        { label: "Will", value: "will" },
        { label: "Bank/financial accounts", value: "accounts" },
        { label: "Property documents", value: "property" },
        { label: "Not sure", value: "unsure" },
      ],
    },
    {
      id: "q2-probate-needed",
      title: "Do you know if probate is needed?",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "I'm not sure", value: "unsure" },
      ],
    },
  ],
  not_sure: [
    {
      id: "q1-recent-death",
      title: "Did someone recently pass away?",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
      ],
    },
    {
      id: "q2-probate-mentioned",
      title: "Has probate been mentioned?",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "I'm not sure", value: "unsure" },
      ],
    },
  ],
};

export function getQuestionsForOption(option: string): Question[] {
  return QUESTIONS_MAP[option] || [];
}

export function shouldAdvanceToRelief(
  answers: Record<string, string>,
  totalQuestions: number
): boolean {
  const answerValues = Object.values(answers);
  const unsureCount = answerValues.filter((a) => a === "unsure").length;

  // If 2+ answers are "unsure", ask one more question
  if (unsureCount >= 2) {
    return false;
  }

  // Otherwise, if we have answers to all questions, advance
  return answerValues.length >= totalQuestions;
}
