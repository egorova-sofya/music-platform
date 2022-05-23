import { Track } from "../../types";
import * as actions from "./../actions-creators/track";

// import defaultExport, * as name from "module-name";

const initialState = {
  tracks: null as Track[] | null,
  error: "",
};

type StateType = typeof initialState;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
type GetActionsTypes<T extends { [key: string]: (...args: any[]) => any }> =
  ReturnType<PropertiesType<T>>;
type ActionsTypes = GetActionsTypes<typeof actions>;

export const trackReducers = (
  state: StateType = initialState,
  action: ActionsTypes
): StateType => {
  switch (action.type) {
    case "FETCH_TRACKS":
      return { error: "", tracks: action.payload };
    case "FETCH_TRACKS_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
