import { reducer, RootState } from "./reducers/index";
import { Context, createWrapper } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk, { ThunkDispatch } from "redux-thunk";

const makeStore = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
