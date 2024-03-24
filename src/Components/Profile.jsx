import { Link } from "react-router-dom"

const Profile = () => {
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
<h1 className="text-4xl font-extrabold mt-2 text-center underline" style={{color:"#3A55EB"}}>User Profile</h1>
<h2 className="text-2xl font-extrabold mt-2 text-center py-3" style={{color:"#FFFFFF"}}>Welcome to your profile</h2>

      </div>

      </div>

    </div>
  );
}

export default Profile;