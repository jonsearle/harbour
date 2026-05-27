import { render, screen, fireEvent } from "@testing-library/react";
import { OnboardingStep1 } from "./step1";

describe("OnboardingStep1", () => {
  const mockOnNext = jest.fn();
  const mockAnswers = {};

  beforeEach(() => {
    mockOnNext.mockClear();
    jest.clearAllMocks();
  });

  it("renders headline and subheading", () => {
    render(
      <OnboardingStep1
        onNext={mockOnNext}
        answers={mockAnswers}
        isLoading={false}
      />
    );

    expect(
      screen.getByText("Tell Harbour what's happening")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /We'll help you understand what matters next and guide you through the process step by step/
      )
    ).toBeInTheDocument();
  });

  it("renders all starting option buttons", () => {
    render(
      <OnboardingStep1
        onNext={mockOnNext}
        answers={mockAnswers}
        isLoading={false}
      />
    );

    expect(screen.getByText("Someone died recently")).toBeInTheDocument();
    expect(screen.getByText("I've been named executor")).toBeInTheDocument();
    expect(screen.getByText("I think probate is required")).toBeInTheDocument();
    expect(screen.getByText("I'm dealing with paperwork")).toBeInTheDocument();
    expect(
      screen.getByText("I'm not sure what to do next")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Or describe your situation in your own words")
    ).toBeInTheDocument();
  });

  it("calls onNext with selected option when button clicked", () => {
    render(
      <OnboardingStep1
        onNext={mockOnNext}
        answers={mockAnswers}
        isLoading={false}
      />
    );

    const button = screen.getByText("Someone died recently");
    fireEvent.click(button);

    expect(mockOnNext).toHaveBeenCalledWith({
      startingOption: "someone_died_recently",
    });
  });

  it("calls onNext with correct value for different options", () => {
    render(
      <OnboardingStep1
        onNext={mockOnNext}
        answers={mockAnswers}
        isLoading={false}
      />
    );

    const button = screen.getByText("I've been named executor");
    fireEvent.click(button);

    expect(mockOnNext).toHaveBeenCalledWith({
      startingOption: "named_executor",
    });
  });

  it("shows textarea when last option is clicked", () => {
    render(
      <OnboardingStep1
        onNext={mockOnNext}
        answers={mockAnswers}
        isLoading={false}
      />
    );

    const freeTextButton = screen.getByText(
      "Or describe your situation in your own words"
    );
    fireEvent.click(freeTextButton);

    expect(
      screen.getByPlaceholderText(/describe your situation/i)
    ).toBeInTheDocument();
  });

  it("shows textarea with 'Tell us more' heading when free text mode is active", () => {
    render(
      <OnboardingStep1
        onNext={mockOnNext}
        answers={mockAnswers}
        isLoading={false}
      />
    );

    const freeTextButton = screen.getByText(
      "Or describe your situation in your own words"
    );
    fireEvent.click(freeTextButton);

    expect(screen.getByText("Tell us more")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Describe your situation in your own words. This helps us understand/
      )
    ).toBeInTheDocument();
  });

  it("disables Continue button when textarea is empty", () => {
    render(
      <OnboardingStep1
        onNext={mockOnNext}
        answers={mockAnswers}
        isLoading={false}
      />
    );

    const freeTextButton = screen.getByText(
      "Or describe your situation in your own words"
    );
    fireEvent.click(freeTextButton);

    const continueButton = screen.getByRole("button", { name: /Continue/i });
    expect(continueButton).toBeDisabled();
  });

  it("enables Continue button when user types in textarea", () => {
    render(
      <OnboardingStep1
        onNext={mockOnNext}
        answers={mockAnswers}
        isLoading={false}
      />
    );

    const freeTextButton = screen.getByText(
      "Or describe your situation in your own words"
    );
    fireEvent.click(freeTextButton);

    const textarea = screen.getByPlaceholderText(/describe your situation/i);
    fireEvent.change(textarea, {
      target: { value: "I need help with probate" },
    });

    const continueButton = screen.getByRole("button", { name: /Continue/i });
    expect(continueButton).not.toBeDisabled();
  });

  it("calls onNext with free text input when Continue is clicked", () => {
    render(
      <OnboardingStep1
        onNext={mockOnNext}
        answers={mockAnswers}
        isLoading={false}
      />
    );

    const freeTextButton = screen.getByText(
      "Or describe your situation in your own words"
    );
    fireEvent.click(freeTextButton);

    const textarea = screen.getByPlaceholderText(/describe your situation/i);
    const testText = "My situation is complex";
    fireEvent.change(textarea, { target: { value: testText } });

    const continueButton = screen.getByRole("button", { name: /Continue/i });
    fireEvent.click(continueButton);

    expect(mockOnNext).toHaveBeenCalledWith({
      freeTextInput: testText,
    });
  });

  it("goes back to options when Back button is clicked in free text mode", () => {
    render(
      <OnboardingStep1
        onNext={mockOnNext}
        answers={mockAnswers}
        isLoading={false}
      />
    );

    const freeTextButton = screen.getByText(
      "Or describe your situation in your own words"
    );
    fireEvent.click(freeTextButton);

    expect(screen.getByText("Tell us more")).toBeInTheDocument();

    const backButton = screen.getByRole("button", { name: /Back/i });
    fireEvent.click(backButton);

    expect(screen.getByText("Tell Harbour what's happening")).toBeInTheDocument();
    expect(screen.queryByText("Tell us more")).not.toBeInTheDocument();
  });

  it("disables all buttons when isLoading is true", () => {
    render(
      <OnboardingStep1
        onNext={mockOnNext}
        answers={mockAnswers}
        isLoading={true}
      />
    );

    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  it("disables buttons in free text mode when isLoading is true", () => {
    render(
      <OnboardingStep1
        onNext={mockOnNext}
        answers={mockAnswers}
        isLoading={false}
      />
    );

    const freeTextButton = screen.getByText(
      "Or describe your situation in your own words"
    );
    fireEvent.click(freeTextButton);

    const { rerender } = render(
      <OnboardingStep1
        onNext={mockOnNext}
        answers={mockAnswers}
        isLoading={true}
      />
    );

    // After rerender with isLoading true, the component should show free text view
    // (since state is internal) - verify buttons are disabled
    const continueButton = screen.getByRole("button", { name: /Continue/i });
    const backButton = screen.getByRole("button", { name: /Back/i });

    expect(continueButton).toBeDisabled();
    expect(backButton).toBeDisabled();
  });
});
