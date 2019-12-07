import React from "react";
import Timer from "../components/Timer";
import CodeEntry from "../components/CodeEntry";
import { CODE } from "../components/PrivateRoute";

const TimerContainer = () => {
  const targetDate: Date = new Date(2019, 11, 13, 9);
  // return targetDate.getTime() - new Date().getTime() > 0 ? (
  //   <Timer targetDate={targetDate} />
  // ) : (
  return <CodeEntry lockCode={CODE} />;
  // );
};

export default TimerContainer;
