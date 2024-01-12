import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState();

  console.log(value);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "2px solid red",
          width: "30%",
          height: "70%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "20%",
            marginTop: "-40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <input
            type="text"
            placeholder="Add to Do"
            style={{ width: "70%", height: "50px", fontSize: "20px" }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button onClick={() => {}} style={{ width: "30%", height: "50px" }}>
            Add
          </button>
        </div>
        <div
          style={{ border: "2px solid green", width: "70%", height: "50%" }}
        ></div>
      </div>
    </div>
  );
};
export default Home;
