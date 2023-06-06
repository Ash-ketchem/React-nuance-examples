import userStore from "@/stores/userStore";

const UserData = () => {
  const user = userStore((state) => state.user);
  const setUser = userStore((state) => state.setUser);

  return (
    <div
      style={{
        // border: "1px solid white",
        padding: "1rem",
      }}
    >
      <h3>user Details</h3>
      <p>
        name : {user.name}
        {" && "}
        <span>age : {user.age}</span>
      </p>

      <button
        onClick={() => {
          const newUser = {
            name: user.name === "ash" ? "ram" : "ash",
            age: user.name === "ash" ? user.age - 1 : user.age + 1,
          };
          setUser(newUser);
        }}
        style={{
          border: "1px solid white",
          padding: "0.5rem",
        }}
      >
        update User
      </button>
    </div>
  );
};

export default UserData;
