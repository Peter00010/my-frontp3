import { Link } from "react-router-dom";
import brain from "../assets/brain.svg";
import idea from "../assets/idea.svg";


const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ width: "300px", height: "100vh", backgroundColor: "#171717" }}
      >
        <div className="logo">
          <div className="pt-12 pl-8">
            <span className=" text-4xl font-bold mt-5" style={{ color: "#3A55EB", fontSize: "2rem" }} >QUIZZ</span>
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

      {/* Main content homepage */}

      {/* top */}

      <div style={{ flex: "1", backgroundColor: "#1F1F1F" }}>
      <div style={{ position: "absolute", top: 0, right: 0, padding: "20px" }}>
  <Link to="/login"><button className="px-8 py-2 rounded-md" style={{ backgroundColor: "#3A55EB", color: "#FFFFFF" }}>Sign in</button></Link>
</div>

            <div className="flex">
              <div style={{height: "300px", width:"750px", backgroundColor:"#171717"}} className="m-20 rounded-lg" >
              <h1 className="text-4xl font-extrabold mt-2 text-center" style={{color:"#3A55EB"}}>Think you know much?</h1>
              <p className="text-3xl text-center m-5 p-5" style={{color: "#FFFFFF"}} >QuizzWizz allows you to put your knowledge to the test in a fun way</p>
                 </div>
              <div style={{height: "300px", width:"450px", backgroundColor:"#171717"}} className="my-20 rounded-lg" >
              <img className="pt-5" style={{fill:"#3A55EB",height:"250px",paddingLeft:"100px"}} src={brain} alt="" />
                                 </div>
            </div>

{/* bottom */}
            <div className="flex">
            <div style={{height: "300px", width:"450px", backgroundColor:"#171717"}} className="ml-20 mb-5 rounded-lg" >
            <img className="pt-5" style={{fill:"#3A55EB",height:"250px",paddingLeft:"100px"}} src={idea} alt="" />
               </div>
              <div style={{height: "300px", width:"750px", backgroundColor:"#171717"}} className="ml-20 mb-5 rounded-lg" > 
              <h1 className="text-4xl font-extrabold mt-2 text-center" style={{color:"#3A55EB"}}>Ready to explore?</h1>
              <p className="text-3xl text-center m-5 p-5" style={{color: "#FFFFFF"}} >From a huge library of our fun questions, you will definitely learn something from each new test. Click on Take quiz to start right now.</p>
              </div>
            </div>
            <div className="pt-5" style={{paddingLeft:"500px"}} >
            <div className="flex justify-center">
            <Link to="/questions"><button className="rounded-md px-10 py-3 text-xl" style={{backgroundColor:"#3A55EB",color:"#FFFFFF"}}>
  Try it out

</button></Link>
</div>
</div>
      </div>
    </div>
  );
};

export default Home;
