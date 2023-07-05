"use client";

import userStore from "@/stores/userStore";

const Name2 = () => {
  console.log("name2");
  const key = "name";

  const userName = userStore((state) => state.user.name, key);

  const setUserName = userStore((state) => state.setUserName);

  console.log(setUserName);

  const handleChange = () => {
    setUserName(userName === "ash" ? "ram" : "ash", key);
  };
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <h4>component 2</h4>
      <div>
        <h3>{userName}</h3>
        <button onClick={handleChange}>click me to change</button>
      </div>
    </div>
  );
};

export default Name2;
