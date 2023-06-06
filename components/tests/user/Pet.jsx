import userStore from "@/stores/userStore";

const Pet = () => {
  const petName = userStore((state) => state.pet.name);
  const setPetName = userStore((state) => state.setPetName);
  return (
    <div
      style={{
        // border: "1px solid white",
        padding: "1rem",
      }}
    >
      <h3>pet details</h3>
      <p>pet Name : {petName}</p>
      <button
        onClick={() => {
          setPetName(petName === "tommy" ? "sonny" : "tommy");
        }}
        style={{
          border: "1px solid white",
          padding: "0.5rem",
        }}
      >
        update
      </button>
    </div>
  );
};

export default Pet;
