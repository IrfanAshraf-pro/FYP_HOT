import React, { useState } from "react";
import { useSelector } from "react-redux";
import ScheduleRow from "./ScheduleRow";
import SplitingSchedule from "../utils/ScheduleFunctions";

const ScheduleComponent = () => {
  const schedules = useSelector((state) => state.schedule);
  const [schedule, setSchedule] = useState(
    SplitingSchedule(schedules.schedule)
  );
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "All"];
  const timeslots = [
    {
      time: "08:00-9:00",
      stamp: "AM",
    },
    {
      time: "10:00-11:00",
      stamp: "AM",
    },
    {
      time: "09:00-10:00",
      stamp: "AM",
    },
    {
      time: "11:00-12:00",
      stamp: "AM",
    },
    {
      time: "12:00-01:00",
      stamp: "PM",
    },
    {
      time: "01:00-02:00",
      stamp: "PM",
    },
    {
      time: "02:00-03:00",
      stamp: "PM",
    },
    {
      time: "03:00-04:00",
      stamp: "PM",
    },
    {
      time: "04:00-05:00",
      stamp: "PM",
    },
    {
      time: "05:00-06:00",
      stamp: "PM",
    },
    {
      time: "06:00-07:00",
      stamp: "PM",
    },
    {
      time: "07:00-08:00",
      stamp: "PM",
    },
    {
      time: "08:00-09:00",
      stamp: "PM",
    },
    {
      time: "09:00-10:00",
      stamp: "PM",
    },
    {
      time: "10:00-11:00",
      stamp: "PM",
    },
    {
      time: "11:00-12:00",
      stamp: "PM",
    },
  ];
  const SetSchedule = (schedules) => {
    const newSchedule = schedule.map((item) => {
      return item.row === schedules.row ? schedules : item;
    });
    setSchedule(newSchedule);
  };
  const slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div className="flex p-2 rounded-lg ">
      <div className="w-3/12 pl-1 pt-10 bg-main rounded-tl-lg lg:pt-[44px]">
        {timeslots.map((slot, index) => (
          <div className="flex bg-main text-primary " key={index}>
            <p className="text-base xl:w-7/12 lg:text-xl">{slot.time}</p>
            <p className="text-base xl:w-5/12 lg:text-xl">{slot.stamp}</p>
          </div>
        ))}
      </div>
      <div className="w-9/12 bg-gray-400 rounded-tr-lg">
        <div className="flex justify-between px-2 py-2 rounded-tr-lg bg-main">
          {days.map((day, index) => (
            <p
              className="text-base  font-bold text-primary w-[10%] lg:text-xl"
              key={index}
            >
              {day}
            </p>
          ))}
        </div>
        <div className="flex flex-col px-2 lg:gap-[4.1px]">
          {slots.map((slot, index) => (
            <div key={index}>
              <ScheduleRow
                schedule={schedule[index]}
                setSchedule={SetSchedule}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleComponent;
