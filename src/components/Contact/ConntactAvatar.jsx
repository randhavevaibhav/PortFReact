import React from "react";
import testImg from "../../assets/images/test.jpg";
export const ConntactAvatar = () => {
  return (
    <div className="avatar ">
      <img alt="avatar" src={testImg} className="w-full object-cover" />
    </div>
  );
};
