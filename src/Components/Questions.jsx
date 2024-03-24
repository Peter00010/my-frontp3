import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const Questions = () => {
    const [question, setQuestion] = useState(null);
    const [choices, setChoices] = useState([]);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchQuestion();
    }, []);

    const fetchQuestion = async () => {
        const response = await fetch("https://p-3-back-end-1.onrender.com/get-question/1");
        const newData = await response.json();
        setQuestion(newData.question);
        setChoices(newData.choices);
        setData(newData);
    };

    const handleChoiceClick = async (choice) => {
        if (answeredQuestions < 10) {
        await fetchQuestion();
        if (choice === data.answer) {
            setScore(score + 1);
        }
        setAnsweredQuestions(answeredQuestions + 1);
        }
        if (answeredQuestions === 9) {
        alert(`Your score: ${score}/10`);
        }
    };

    return (
        <div className="flex h-screen">
        <div
            style={{ backgroundColor: "#171717", color: "#FFFFFF" }}
            className="md:w-64  flex flex-col"
        >
            <div className="flex-grow">
            <div  className="flex items-center justify-center h-16 flex-col">
                <span className=" md:text-4xl font-bold mt-5">QUIZZ</span>
                <span style={{ color: "#3A55EB" }} className="text-4xl font-bold">
                WIZZ
                </span>
            </div>
            <ul className="sm:text-xs sm:px-2 sm:py-2 md:px-4 py-2 mt-20">
                <li
                style={{ color: "#FFFFFF" }}
                className="text-xl py-2 cursor-pointer hover:underline"
                onMouseEnter={(e) => (e.target.style.color = "#3A55EB")}
                onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                >
                    <Link to="/">HOME</Link>
                
                </li>
                <li
                style={{ color: "#FFFFFF" }}
                className="text-xl py-2 cursor-pointer hover:underline"
                onMouseEnter={(e) => (e.target.style.color = "#3A55EB")}
                onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                >
                <Link to="/questions">QUIZZ</Link>
                </li>
                <li
                style={{ color: "#FFFFFF" }}
                className="text-xl py-2 cursor-pointer hover:underline"
                onMouseEnter={(e) => (e.target.style.color = "#3A55EB")}
                onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                >
                    <Link to="/about">ABOUT US</Link>
                
                </li>
                <li
                style={{ color: "#FFFFFF" }}
                className="text-xl py-2 cursor-pointer hover:underline"
                onMouseEnter={(e) => (e.target.style.color = "#3A55EB")}
                onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                >
                <Link to="/help">HELP</Link>
                </li>
                <li
                style={{ color: "#FFFFFF" }}
                className="text-xl py-2 cursor-pointer hover:underline"
                onMouseEnter={(e) => (e.target.style.color = "#3A55EB")}
                onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                >
                <Link to="/profile">PROFILE</Link>
                </li>
            </ul>
            </div>
        </div>
        <div
            style={{ backgroundColor: "#1F1F1F", color: "#FFFFFF" }}
            className="flex-1  flex items-center justify-center"
        >
            <div
            style={{
                backgroundColor: "#171717",
                width: "600px",
                height: "600px"
            }}
            className="md:rounded-lg p-8"
            >
            <span
                style={{ color: "#3A55EB", fontSize: "10rem" }}
                className="md:font-bold  block mx-auto mb-8 ml-52"
            >
                ?
            </span>
            <div className="md:text-2xl text-center mb-8">{question}</div>
            <div className="flex flex-wrap">
                {choices.map((choice, index) => (
                <button
                    style={{ backgroundColor: "#3A55EB", color: "#FFFFFF" }}
                    key={index}
                    onClick={() => handleChoiceClick(choice)}
                    className="pl-5 space-x-6 font-bold text-xl py-2 px-4 rounded m-5 "
                >
                    {choice}
                </button>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
    };

export default Questions;
