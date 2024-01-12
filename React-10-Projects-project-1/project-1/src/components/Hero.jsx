import "../App.css";
const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1 className="h1">CHETANKUMAR BANJARA</h1>
        <p>
          As a recent graduate with a strong foundation in web development and a
          passion for creating visually appealing and user-friendly interfaces,
          I am seeking a position as a Frontend Developer. Proficient in HTML,
          CSS, and JavaScript, I have hands-on experience with popular frontend
          frameworks such as React.js.
        </p>

        <div className="hero-btn">
          <button>Download CV</button>
          <button className="secondary-btn">Projects</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
              alt="amazon-logo"
            />
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="flipkart-logo"
            />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://img.freepik.com/free-vector/businessman-working-laptop-computer-office-3d-character-isolated-white-background_40876-3756.jpg?w=826&t=st=1704963960~exp=1704964560~hmac=a9e54cbc4a8f6e8e24ac72654d9ecf413c0d944c2ff506e88af8447036ca0b6c"
          alt="hero-image"
        />
      </div>
    </main>
  );
};

export default Hero;
