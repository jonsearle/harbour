import { getQuestionsForOption, shouldAdvanceToRelief } from "./onboarding-questions";

describe("onboarding-questions", () => {
  it("returns correct questions for 'someone_died_recently' option", () => {
    const questions = getQuestionsForOption("someone_died_recently");
    expect(questions).toHaveLength(2);
    expect(questions[0].title).toContain("Has the death been registered");
  });

  it("returns correct questions for 'named_executor' option", () => {
    const questions = getQuestionsForOption("named_executor");
    expect(questions).toHaveLength(2);
    expect(questions[0].title).toContain("Has probate been mentioned");
  });

  it("returns correct questions for 'probate_required' option", () => {
    const questions = getQuestionsForOption("probate_required");
    expect(questions).toHaveLength(2);
    expect(questions[0].title).toContain("Was there a will");
  });

  it("returns correct questions for 'dealing_with_paperwork' option", () => {
    const questions = getQuestionsForOption("dealing_with_paperwork");
    expect(questions).toHaveLength(2);
    expect(questions[0].title).toContain("What type of documents");
  });

  it("returns correct questions for 'not_sure' option", () => {
    const questions = getQuestionsForOption("not_sure");
    expect(questions).toHaveLength(2);
    expect(questions[0].title).toContain("Did someone recently pass away");
  });

  it("returns empty array for unknown option", () => {
    const questions = getQuestionsForOption("unknown_option");
    expect(questions).toHaveLength(0);
  });

  it("returns true when advancing to relief with 2 confident answers", () => {
    const answers = {
      "q1-death-registered": "yes",
      "q2-will": "no",
    };
    const shouldAdvance = shouldAdvanceToRelief(answers, 2);
    expect(shouldAdvance).toBe(true);
  });

  it("returns true when advancing with mixed confident and unsure answers", () => {
    const answers = {
      "q1-death-registered": "yes",
      "q2-will": "unsure",
    };
    const shouldAdvance = shouldAdvanceToRelief(answers, 2);
    expect(shouldAdvance).toBe(true);
  });

  it("returns false when advancing to relief with 2+ unsure answers", () => {
    const answers = {
      "q1-death-registered": "unsure",
      "q2-will": "unsure",
    };
    const shouldAdvance = shouldAdvanceToRelief(answers, 2);
    expect(shouldAdvance).toBe(false);
  });

  it("returns false when not all questions are answered", () => {
    const answers = {
      "q1-death-registered": "yes",
    };
    const shouldAdvance = shouldAdvanceToRelief(answers, 2);
    expect(shouldAdvance).toBe(false);
  });

  it("correctly identifies question structure", () => {
    const questions = getQuestionsForOption("someone_died_recently");
    const question = questions[0];

    expect(question).toHaveProperty("id");
    expect(question).toHaveProperty("title");
    expect(question).toHaveProperty("options");
    expect(Array.isArray(question.options)).toBe(true);
    expect(question.options.length).toBeGreaterThan(0);

    const option = question.options[0];
    expect(option).toHaveProperty("label");
    expect(option).toHaveProperty("value");
  });

  it("ensures all options have consistent structure", () => {
    const optionKeys = [
      "someone_died_recently",
      "named_executor",
      "probate_required",
      "dealing_with_paperwork",
      "not_sure",
    ];

    optionKeys.forEach((optionKey) => {
      const questions = getQuestionsForOption(optionKey);
      questions.forEach((question) => {
        expect(question.id).toBeDefined();
        expect(question.title).toBeDefined();
        expect(question.options).toBeDefined();
        expect(Array.isArray(question.options)).toBe(true);
        question.options.forEach((option) => {
          expect(option.label).toBeDefined();
          expect(option.value).toBeDefined();
        });
      });
    });
  });
});
