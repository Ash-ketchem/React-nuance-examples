"use client";
import userStore from "@/stores/userStore";

const GroupName1 = ({ keySet, Key }) => {
  console.log(keySet, Key);
  const userName = userStore((state) => state.user.name, Key);
  const setUserName = userStore((state) => state.setUserName);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "0.5rem",
      }}
    >
      <h5>key = {Key}</h5>

      <div
        style={{
          display: "flex",
          gap: 8,
          justifyItems: "space-around",
          alignItems: "center",
        }}
      >
        <h4>{userName}</h4>
        <button
          onClick={() => {
            setUserName(userName === "ash" ? "sam" : "ash", keySet);
          }}
        >
          change name
        </button>
      </div>
    </div>
  );
};

export default GroupName1;
