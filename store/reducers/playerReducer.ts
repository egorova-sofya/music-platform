import * as actions from "./../actions-creators/player";

const initialState = {
  pause: true,
  currentTime: 0,
  volume: 50,
  duration: 0,
  active: null,
};

type StateType = typeof initialState;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
type GetActionsTypes<T extends { [key: string]: (...args: any[]) => any }> =
  ReturnType<PropertiesType<T>>;
type ActionsTypes = GetActionsTypes<typeof actions>;

export const playerReducer = (
  state: StateType = initialState,
  action: ActionsTypes
): StateType => {
  switch (action.type) {
    case "PAUSE":
      return { ...state, pause: true };
    case "PLAY":
      return { ...state, pause: false };

    case "SET_CURRENT_TIME":
      return { ...state, currentTime: action.payload };

    case "SET_VOLUME":
      return { ...state, volume: action.payload };

    case "SET_DURATION":
      return { ...state, duration: action.payload };

    case "SET_ACTIVE":
      return { ...state, active: action.payload, duration: 0, currentTime: 0 };

    default:
      return state;
  }
};
