import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataProps, RaceSummary } from '../types/list';


interface UserSelectorProps {
  list: DataProps;
}

const initialState: DataProps = {
  nextToGoList: [],
  toggleGreyhound: true,
  toggleHarness: true,
  toggleHorse: true,
};

const updateNextToGoResponse = (
  state: DataProps,
  action: PayloadAction<RaceSummary[] | []>
) => {
  state.nextToGoList = action.payload;
};

const updateToggleGreyhound = (
  state: DataProps,
  action: PayloadAction<boolean>
) => {
  state.toggleGreyhound = !state.toggleGreyhound;
};
const updateToggleHarness = (
  state: DataProps,
  action: PayloadAction<boolean>
) => {
  state.toggleHarness = !state.toggleHarness;
};
const updateToggleHorse = (
  state: DataProps,
  action: PayloadAction<boolean>
) => {
  state.toggleHorse = !state.toggleHorse;
};

const removeExpiredRaceData = (
  state: DataProps,
  action: PayloadAction<RaceSummary[] | []>
) => {
  const newList = state.nextToGoList?.filter(race=> race.race_id !== action.payload);
  state.nextToGoList = newList;
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    updateNextToGoList: updateNextToGoResponse,
    removeExpiredRace: removeExpiredRaceData,
    toggleGreyhoundState: updateToggleGreyhound,
    toggleHarnessState: updateToggleHarness,
    toggleHorseState: updateToggleHorse,
  },
});

const { updateNextToGoList, removeExpiredRace, toggleGreyhoundState, toggleHarnessState, toggleHorseState } =
listSlice.actions;

const selectNextToGoList = ({ list }: UserSelectorProps) => {
  return list.nextToGoList;
};
const selectToggleGreyhound = ({ list }: UserSelectorProps) => {
  return list.toggleGreyhound;
};
const selectToggleHarness = ({ list }: UserSelectorProps) => {
  return list.toggleHarness;
};
const selectToggleHorse = ({ list }: UserSelectorProps) => {
  return list.toggleHorse;
};

const listSliceReducer = listSlice.reducer;

export {
  listSliceReducer,
  updateNextToGoList,
  selectNextToGoList,
  removeExpiredRace,
  toggleGreyhoundState,
  selectToggleGreyhound,
  toggleHarnessState,
  selectToggleHarness,
  toggleHorseState,
  selectToggleHorse,
};
