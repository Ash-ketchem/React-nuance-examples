import Name from "../SharedName1";
import Name2 from "../SharedName2";
import Name3 from "../SharedName3";

const SharedReactivity = () => {
  return (
    <div>
      <h3>
        <u>shared reactivity</u>
      </h3>
      <p>
        same state is shared between components 1 and 2 so the will update at
        same time
      </p>
      <p>component3 doesnt share the same state as other components</p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Name />
        <Name2 />
        <Name3 />
      </div>
    </div>
  );
};

export default SharedReactivity;
