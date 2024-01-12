import { useState, useEffect } from "react";

const Login = () => {
  const [input, setInput] = useState(null);
  const [password, setPassword] = useState(null);

  const [isInput, setIsInput] = useState(false);
  const [isPassword, setIsPassword] = useState(true);

  useEffect(() => {
    localStorage.setItem("input", JSON.stringify(input));
    localStorage.setItem("password", JSON.stringify(password));
  }, [input, password]);

  const login = () => {
    if (input.value !== null) {
      setIsInput(true);
      setIsPassword(true);
    }
  };

  return (
    <div className="containerLogin">
      <div className="divLogin">
        <div style={{ border: "2px solid black", padding: "100px" }}>
          {isInput && isPassword ? (
            <div>you have logged ✅</div>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h2>Contact</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="Enter Email">Enter Email</label>
                <input
                  type="text"
                  style={{ width: "200px", height: "30px" }}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />

                <label htmlFor="Enter Email">Enter Password</label>
                <input
                  type="password"
                  style={{ width: "200px", height: "30px" }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                <button onClick={login}>Login</button>
              </div>
            </>
          )}
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h2>Login</h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <label htmlFor="Enter Email">Enter Email</label>
            <input
              type="text"
              style={{ width: "200px", height: "30px" }}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />

            <label htmlFor="Enter Email">Enter Password</label>
            <input
              type="password"
              style={{ width: "200px", height: "30px" }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <button>Login</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Login;
