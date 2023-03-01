import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schedule:
    "00001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
};

const ScheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setSchedule: (state, action) => {
      state.schedule = action.payload.schedule;
    },
  },
});

export default ScheduleSlice.reducer;
export const { setSchedule } = ScheduleSlice.actions;
