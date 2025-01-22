import React, { useEffect, useState } from "react";
import { questions as allQuestions, Question } from "./questions"; // Assuming questions and Question are exported from "./questions"

const shuffleArray = (array: Question[]): Question[] => {
    return array.sort(() => Math.random() - 0.5);
};

const Practice: React.FC = () => {
    const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>(() =>
        shuffleArray([...allQuestions])
    );
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
    const [feedbackColor, setFeedbackColor] = useState<string>("");
    const [isPracticeComplete, setIsPracticeComplete] = useState(false);

    useEffect(() => {
        setShuffledQuestions(shuffleArray([...allQuestions]));
    }, []);

    const handleOptionChange = (index: number): void => {
        setSelectedOption(index);
        setFeedbackMessage(null); // Clear feedback when a new option is selected
    };

    const handleSubmit = (): void => {
        if (selectedOption === shuffledQuestions[currentQuestionIndex].correctOption) {
            setFeedbackMessage("Correct answer!");
            setFeedbackColor("#66bb6a"); // green
            setTimeout(() => {
                if (currentQuestionIndex < shuffledQuestions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setSelectedOption(null); // Reset selection for the next question
                    setFeedbackMessage(null); // Clear feedback for the next question
                } else {
                    setIsPracticeComplete(true); // Mark practice as complete
                }
            }, 1000); // Display feedback for 1 second
        } else {
            setFeedbackMessage("Incorrect answer. Please try again.");
            setFeedbackColor("#f44336"); // red
        }
    };

    const resetPractice = (): void => {
        setShuffledQuestions(shuffleArray([...allQuestions])); // Reshuffle questions
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setFeedbackMessage(null);
        setFeedbackColor("");
        setIsPracticeComplete(false);
    };

    return (
        <div style={{ fontFamily: "Arial" }}>
            <h2 style={{ color: "#2976AF" }}>Practice Mode</h2>
            {isPracticeComplete ? (
                <div>
                    <p style={{ color: "#388e3c", fontSize: "1.5rem" }}>
                        Congratulations! You have answered all the questions.
                    </p>
                    <button onClick={resetPractice}>Start Again</button>
                </div>
            ) : (
                <>
                    <h3>Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</h3>
                    <h4 style={{ textAlign: "left" }}>{shuffledQuestions[currentQuestionIndex].text}</h4>
                    <div style={{ marginBottom: "20px" }}>
                        {shuffledQuestions[currentQuestionIndex].options.map((option: string, index: number) => (
                            <div key={index}>
                                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", textAlign: "left" }}>
                                    <input
                                        type="radio"
                                        name="option"
                                        checked={selectedOption === index}
                                        onChange={() => handleOptionChange(index)}
                                    />
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>
                    {feedbackMessage && (
                        <p style={{ color: feedbackColor, fontWeight: "bold" }}>
                            {feedbackMessage}
                        </p>
                    )}
                    <button onClick={handleSubmit} disabled={selectedOption === null}>
                        Submit
                    </button>
                </>
            )}
        </div>
    );
};

export default Practice;
