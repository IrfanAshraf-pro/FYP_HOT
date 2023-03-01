import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsScheduleDispatched } from "../../../app/Slices/ScheduleSlice";
import PageHeader from "../../components/PageHeader";
import ScheduleComponent from "../../components/ScheduleComponent";
const Schedule = () => {
  const { isChanged } = useSelector((state) => state.schedule);
  const dispatch = useDispatch();
  const setDispatchSchedule = () => {
    dispatch(setIsScheduleDispatched());
  };
  return (
    <div>
      {/* {isChanged ? (
        <PageHeader>Schedule</PageHeader>
      ) : ( */}
      <PageHeader icon={"+"} onClick={() => setDispatchSchedule()}>
        Schedule
      </PageHeader>
      {/* )} */}
      <div className="mx-auto w-[95%] sm:w-[85%] ">
        <ScheduleComponent />
      </div>
    </div>
  );
};

export default Schedule;
