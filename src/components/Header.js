import React from "react";

const Header = () => {
  const date = new Date();
  const day = date.getDay;
  console.log(date);
  return (
    <div className="flex flex-row justify-between py-4 px-4 bg-neutral-700">
      <div className="text-2xl text-teal-400 font-semibold">Task Manager</div>
      <div className="text-white">{day}</div>
    </div>
  );
};

export default Header;
