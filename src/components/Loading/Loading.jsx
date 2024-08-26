import React from "react";
const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className=" mt-1 font-medium  text-sm flex flex-col py-5">
        {" "}
        {/* <img src={StageDrivingLogo} alt="" className="w-20 py-5" /> */}
        <p className="text-bold text-xl">Loading ...</p>
      </span>
    </div>
  );
};

export default Loading;
