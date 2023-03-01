import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schedule:
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  isChanged: false,
  isScheduleDispatch: false,
};

const ScheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setScheduleState: (state, action) => {
      state.schedule = action.payload;
      state.isChanged = false;
      state.isScheduleDispatch = false;
    },
    setIsChange: (state) => {
      state.isChanged = true;
    },
    setIsScheduleDispatched: (state) => {
      state.isScheduleDispatch = true;
    },
  },
});

export default ScheduleSlice.reducer;
export const { setScheduleState, setIsChange, setIsScheduleDispatched } =
  ScheduleSlice.actions;
