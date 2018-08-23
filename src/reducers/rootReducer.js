import { oauthReducer } from "./oauthReducer";
import { photosReducer } from "./photosReducer";

export const rootReducer = {
  user: oauthReducer,
  photos: photosReducer
};
