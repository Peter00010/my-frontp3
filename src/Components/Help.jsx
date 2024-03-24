/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Help = () => {
    return (
        <div style={{ display: "flex" }}>
          <div
            style={{ width: "400px", height: "100vh", backgroundColor: "#171717" }}
          >
            <div className="logo">
              <div className="pt-12 pl-8">
                <span className=" text-4xl font-bold mt-5"  style={{ color: "#3A55EB", fontSize: "2rem" }}>QUIZZ</span>
                <br />
                <span className=" text-4xl font-bold mt-5"  style={{ color: "#FFFFFF", fontSize: "2rem" }}>WIZZ</span>
              </div>
            </div>
            <section className="pt-4 pl-8" style={{ color: "#FFFFFF" }}>
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
                  <Link to="/questions">ABOUT US</Link>
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
            </section>
          </div>
          <div style={{ flex: "1", backgroundColor: "#1F1F1F" }} className="flex justify-center items-center">

<div style={{height: "80vh", width:"750px", backgroundColor:"#171717"}} className="m-20 rounded-lg " >
<h1 className="text-4xl font-extrabold mt-2 text-center underline" style={{color:"#3A55EB"}}>Help</h1>
<h2 className="text-2xl font-extrabold mt-2 text-center py-3" style={{color:"#FFFFFF"}}>How to play</h2>
<ol style={{color:"#FFFFFF"}} className="px-5 text-xl">
  <li><span className="font-bold">Start a Quiz:</span> Click on the "Try it now" button to begin a new quiz session.</li>
  <li><span className="font-bold">Answer Questions:</span> Each quiz consists of a maximum of 10 questions. For each question, select the correct answer from the multiple-choice options provided.</li>
  <li><span className="font-bold">View Results:</span> Your score will be displayed out of 10, indicating the number of questions you answered correctly.</li>
  <li><span className="font-bold">Retry:</span> If you'd like to try another quiz, simply click the "Start Quiz" button again to begin a new session.</li>
 </ol>

<h2 className="text-2xl font-extrabold mt-2 text-center py-3" style={{color:"#FFFFFF"}}>Quizz Rules</h2>
<ol style={{color:"#FFFFFF"}} className="px-5 text-xl">
  <li>You must answer all 10 questions to complete the quiz.</li>
  <li>Each question has 3 multiple-choice options, with only one correct answer.</li>
  <li>You can only attempt each question once per quiz session.</li>
</ol>

<h2 className="text-2xl font-extrabold mt-2 text-center py-5" style={{color:"#FFFFFF"}}>Good luck and haver fun quizzing!</h2>

<div className="flex justify-center">
<Link to="/questions"><button className="rounded-md px-10 py-3 text-xl" style={{backgroundColor:"#3A55EB",color:"#FFFFFF"}}>
  Try it out

</button></Link>
</div>

</div>


</div>
        </div>
      );
}

export default Help;