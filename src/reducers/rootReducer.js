import { homeTitleReducer } from "./homeTitleReducer";
import mathReducer from "./mathReducer";

// defining how to map multiple reducers to individual state keys
export const rootReducer = {
  homeTitle: homeTitleReducer,
  somethingElse: (state = false) => state,
  counter: mathReducer
};
