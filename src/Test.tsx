import React, { useEffect, useState } from "react";
import { questions } from "./questions";

const Test: React.FC = () => {
    const [shuffledQuestions, setShuffledQuestions] = useState(questions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [incorrectAnswers, setIncorrectAnswers] = useState<{
        question: string;
        options: string[];
        correctOption: number;
        selectedOption: number | null;
    }[]>([]);

    useEffect(() => {
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        setShuffledQuestions(shuffled);
    }, []);

    const handleOptionChange = (index: number) => {
        setSelectedOption(index);
    };

    const handleSubmit = () => {
        if (selectedOption === shuffledQuestions[currentQuestionIndex].correctOption) {
            setScore((prevScore) => prevScore + 1);
        } else {
            setIncorrectAnswers((prev) => [
                ...prev,
                {
                    question: shuffledQuestions[currentQuestionIndex].text,
                    options: shuffledQuestions[currentQuestionIndex].options,
                    correctOption: shuffledQuestions[currentQuestionIndex].correctOption,
                    selectedOption,
                },
            ]);
        }

        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedOption(null);
        } else {
            setIsSubmitted(true);
        }
    };

    const restartTest = () => {
        const reshuffled = [...questions].sort(() => Math.random() - 0.5);
        setShuffledQuestions(reshuffled);
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setScore(0);
        setIsSubmitted(false);
        setIncorrectAnswers([]);
    };

    const calculateScorePercentage = (): string => {
        const percentage = (score / shuffledQuestions.length) * 100;
        return percentage % 1 === 0 ? percentage.toFixed(0) : percentage.toFixed(2);
    };

    const renderOptions = (options: string[], correctOption: number, selectedOption: number | null) => (
        <ul>
            {options.map((option, i) => (
                <li
                    key={i}
                    style={{
                        color:
                            i === correctOption
                                ? "#66bb6a" // green
                                : i === selectedOption
                                ? "#f44336" // red
                                : "grey",
                    }}
                >
                    {option}
                </li>
            ))}
        </ul>
    );

    return (
        <div style={{ fontFamily: "Arial" }}>
            {!isSubmitted ? (
                <div>
                    <h2 style={{color: "#2976AF"}}>Test Mode</h2>
                    <h3>Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</h3>
                    <h4 style={{ textAlign: "left" as const }}>{shuffledQuestions[currentQuestionIndex].text}</h4>
                    <div style={{ marginBottom: "20px" }}>
                        {shuffledQuestions[currentQuestionIndex].options.map((option, index) => (
                            <label
                                key={index}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    textAlign: "left" as const,
                                }}
                            >
                                <input
                                    type="radio"
                                    name="option"
                                    checked={selectedOption === index}
                                    onChange={() => handleOptionChange(index)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                    <button onClick={handleSubmit} disabled={selectedOption === null}>
                        {currentQuestionIndex < shuffledQuestions.length - 1 ? "Next" : "Submit"}
                    </button>
                </div>
            ) : (
                <div>
                    <h2>Results</h2>
                    <p>You scored {score} out of {shuffledQuestions.length}.</p>
                    <p>Your score: {calculateScorePercentage()}%</p>
                    <p
                        style={{
                            color: score / shuffledQuestions.length >= 0.7 ? "#388e3c" : "#d32f2f",
                            fontSize: score / shuffledQuestions.length >= 0.7 ? "1.5em" : "1.3em",
                        }}
                    >
                        {score / shuffledQuestions.length >= 0.7
                            ? "Congratulations! You passed the test."
                            : "You failed the test. Please try again."}
                    </p>
                    {score / shuffledQuestions.length < 1 && (
                        <>
                            <h3>Review Your Incorrect Answers</h3>
                            <ul>
                                {incorrectAnswers.map((answer, index) => (
                                    <li key={index} style={{ marginBottom: "15px", gap: "0.5rem",
                                        textAlign: "left" as const, }}>
                                        <p><strong>Question:</strong> {answer.question}</p>
                                        {renderOptions(answer.options, answer.correctOption, answer.selectedOption)}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    <button onClick={restartTest}>Restart Test</button>
                </div>
            )}
        </div>
    );
};

export default Test;