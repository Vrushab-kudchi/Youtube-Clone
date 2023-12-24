// rootReducer.js
import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import chanelReducer from "./channel";
import videoReducer from "./video";
import likedVideoReducer from "./likedVideo";
import watchLaterReducer from "./WatchLater";
import HistoryReducer from "./history";
import commentReducer from "./comments";

export default combineReducers({
  auth: authReducer,
  currentUser: currentUserReducer,
  channel: chanelReducer,
  video: videoReducer,
  likedVideo: likedVideoReducer,
  watchLater: watchLaterReducer,
  history: HistoryReducer,
  comment: commentReducer
});
