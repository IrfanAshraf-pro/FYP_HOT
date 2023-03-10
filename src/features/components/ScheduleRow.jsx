import React, { useState, useEffect } from "react";
import ScheduleCheckBox from "./ScheduleCheckBox";

const ScheduleRow = ({ schedule, setSchedule }) => {
  const [srow, setSrow] = useState(schedule);
  const [all, setAll] = useState("0");
  const setSchedulee = (schedulee) => {
    setSchedule(schedulee);
  };
  const setAllValues = (value) => {
    let row = srow;
    let ssrow = row.schedule;
    for (let item of Object.keys(ssrow)) {
      ssrow[item] = value.toString();
    }
    setAll(all === "0" ? "1" : "0");
    setSrow({ ...srow, schedule: ssrow });
    console.log("Setting All is ", ssrow);
  };
  useEffect(() => {
    //rerender component
  }, [all]);
  useEffect(() => {
    console.log(srow);
  }, [srow]);

  const setRow = (value, key) => {
    let row = srow;
    let ssrow = row.schedule;
    for (let item of Object.keys(ssrow)) {
      if (item === key) {
        ssrow[item] = value.toString();
      }
    }
    setSrow({ ...srow, schedule: ssrow });
    console.log("ssrow is ", ssrow);
  };
  const iteratingOverRow = () => {
    const arr = [];
    for (const key in srow.schedule) {
      arr.push(
        <ScheduleCheckBox
          item={srow.schedule[key]}
          Objkey={key}
          setRow={setRow}
          key={key}
        />
      );
    }
    return arr.map((item) => item);
  };
  return (
    <div className="flex items-start justify-between w-full py-1 lg:pr-6">
      {iteratingOverRow()}
      <ScheduleCheckBox
        item={all}
        setRow={setRow}
        isAll={true}
        setAllValues={setAllValues}
      />
    </div>
  );
};

export default ScheduleRow;
