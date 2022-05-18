import { reducer, RootState } from "./reducers/index";
import { Context, createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const makeStore = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware()));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});
