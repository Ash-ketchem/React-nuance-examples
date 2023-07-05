"use client";

import GroupName from "../GroupName";

const GroupReactivity = () => {
  const groupKey = "user_name";
  const prefixes = ["01_", "02_"];
  const keySet = prefixes.map((prefix) => prefix + groupKey);

  return (
    <div>
      <h3>
        <u>GroupReactivity</u>
      </h3>
      <p>
        these 2 components doesnt share the same state but uses a group of keys
        to call state updates on both components when state in any one changes
      </p>

      <h4>Group name : {groupKey}</h4>

      <div
        style={{
          display: "flex",
          gap: 8,
        }}
      >
        {prefixes.map((prefix) => (
          <GroupName
            keySet={keySet}
            key={prefix + groupKey}
            Key={prefix + groupKey}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupReactivity;
