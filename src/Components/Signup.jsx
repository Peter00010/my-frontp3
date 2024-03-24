            import { Link } from "react-router-dom";
            import { database } from "../../firebaseConfig";
            import { signOut, createUserWithEmailAndPassword } from "firebase/auth";
            import { useNavigate } from "react-router-dom";

            const Signup = () => {
            const history = useNavigate();

            const handleSubmit = (e) => {
                e.preventDefault();
                const email = e.target.email.value;
                const password = e.target.password.value;

                createUserWithEmailAndPassword(database, email, password).then((data) => {
                console.log(data, "authData");
                history("/");
                });
            };

            const handleClick = () => {
                signOut(database).then((val) => {
                console.log(val);
                history("/");
                });
            };

            return (
                <div style={{ display: "flex" }}>
                <div
                    style={{ width: "400px", height: "100vh", backgroundColor: "#171717" }}
                >
                    <div className="logo">
                    <div className="pt-12 pl-8">
                        <span style={{ color: "#3A55EB", fontSize: "2rem" }} className="text-4xl font-bold">QUIZZ</span>
                        <br />
                        <span style={{ color: "#FFFFFF", fontSize: "2rem" }}>WIZZ</span>
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
            <h1 className="text-4xl font-extrabold mt-2 text-center underline" style={{color:"#3A55EB"}}>Welcome</h1>
            <h2 className="text-2xl font-extrabold mt-2 text-center py-3" style={{color:"#FFFFFF"}}>Please sign up</h2>
            
            {/* form */}
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
                <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
                Sign Up
                </h1>

                <div className="relative flex items-center mt-8">
                <input
                    type="email"
                    name="email"
                    className=" block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-purple-400 dark:focus:border-purple-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                />
                </div>

                <div className="relative flex items-center mt-4">
                <input
                    type="password"
                    name="password"
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-purple-400 dark:focus:border-purple-300 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                />
                </div>

                <div className="mt-6">
                    
                <button className="w-full px-6 py-3 rounded-md "
                style={{backgroundColor:"#3A55EB",color:"#FFFFFF"}}
                >
                    Sign Up
                </button>

                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    or sign in with
                </p>

                <a
                    href="#"
                    className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                    <svg
                    className="w-6 h-6 mx-2 bg-transparent"
                    viewBox="0 0 40 40"
                    >
                    <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                    />
                    <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                    />
                    <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                    />
                    <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                    />
                    </svg>

                    <span className="mx-2 bg-transparent">Sign in with Google</span>
                </a>

                <div className="mt-6 text-center">
                    <Link
                    to="/login"
                    style={{color:"#3A55EB"}}
                    >
                    Already have an account? Log in
                    </Link>
                </div>
                <button
                    onClick={handleClick}
                    style={{backgroundColor:"#3A55EB",color:"#FFFFFF"}}
                    className="ml-28 mt-5 w-1/2 px-6 py-3 rounded-md"
                >
                    Log Out
                </button>
                </div>
            </form>
                </div>
            
                </div>
            
                </div>
            );
            };

            export default Signup;
