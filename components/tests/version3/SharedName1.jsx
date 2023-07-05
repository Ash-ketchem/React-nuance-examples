"use client";

import userStore from "@/stores/userStore";

const Name = () => {
  console.log("name");
  const key = "name";

  const userName = userStore((state) => state.user.name, key);

  const setUserName = userStore((state) => state.setUserName);

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
      <h4>component 1</h4>
      <div>
        <h3>{userName}</h3>
        <button onClick={handleChange}>click me to change</button>
      </div>
    </div>
  );
};

export default Name;
