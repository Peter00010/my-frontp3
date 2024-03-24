/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

const About = () => {
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
      <h1 className="text-4xl font-extrabold mt-2 text-center underline" style={{color:"#3A55EB"}}>About us</h1>
      <p className="leading-10 text-xl text-center m-5 p-5" style={{color: "#FFFFFF"}} >Welcome to our quiz app! Our mission is to provide an engaging and educational platform where users can test their knowledge on a variety of topics. <br /> Whether you're a trivia enthusiast or just looking to challenge yourself, our app offers a wide range of quizzes to suit every interest.
Our team is passionate about creating fun and interactive quizzes that not only entertain but also inform. We strive to make learning enjoyable and accessible to everyone, regardless of age or background. With our user-friendly interface and diverse quiz categories, there's something for everyone to enjoy.
 <br />Join our community today and start exploring the world of trivia with us. Thank you for choosing our app, and we hope you have a fantastic quizzing experience!</p>
      </div>


      </div>
    </div>
  );
  }
  
  export default About;