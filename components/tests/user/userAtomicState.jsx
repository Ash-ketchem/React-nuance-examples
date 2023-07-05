import userStore from "@/stores/userStore";

const Display = ({ id }) => {
  const key = "random_key";
  const userName = userStore((state) => state.user.name, key);
  const setUserName = userStore((state) => state.setUserName);

  return (
    <div
      style={{
        padding: "0.5rem",
      }}
    >
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <p>user Name : {userName}</p>
        <input
          placeholder="enter new name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
        <p>this will cause an update on the top UserData component also</p>
      </div>
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <p>user Name : {userName}</p>
        <input
          placeholder="enter new name"
          onChange={(e) => {
            setUserName(e.target.value, key);
          }}
        ></input>
        <p>this won't cause an update on the top UserData component</p>
      </div>
    </div>
  );
};

export default Display;
