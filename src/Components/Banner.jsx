
const Banner = () => {
    return (
    <div style={{ display: 'flex' }}>
        <div style={{ width: '400px', height: '100vh', backgroundColor: '#171717' }}>
        <div className="logo">
            <div className="pt-12 pl-8">
            <span style={{ color: "#3A55EB", fontSize: "2rem" }}>QUIZZ</span>
            <br />
            <span style={{ color: "#FFFFFF", fontSize: "2rem" }}>WIZZ</span>
            {/* <div style={{ color: "white" }}>
                <img src="../assets/idea.svg" alt="" />
            </div> */}
            </div>
        </div>
        <section className="pt-40 pl-8" style={{ color: "#FFFFFF" }} >
            <ul className="cursor-pointer text-xl">
            <li className="py-3">HOME</li>
            <li className="py-3">ABOUT US</li>
            <li className="py-3">HELP</li>
            <li className="py-3">PROFILE</li>
            </ul>
        </section>
        </div>
        <div style={{ flex: '1', backgroundColor: '#1F1F1F' }}>
        </div>
    </div>
    );
};

export default Banner;

//this is a starting template I created for us. For frontend, all pages should have this theme
//this is our banner