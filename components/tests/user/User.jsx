"use client";

import Pet from "./Pet";
import UserData from "./UserData";
import Display from "./userAtomicState";

const User = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "2rem",
        }}
      >
        <h3>
          <u>User Example</u>
        </h3>
        <UserData />
        <Pet />
        <Display />
      </div>
    </div>
  );
};

export default User;
