import express from "express";
import { uploadVideo, getAllvideos } from "../controllers/video.js";
import { likeController } from "../controllers/like.js";
import { viewController } from "../controllers/views.js";
import {
  likeVideoController,
  getAlllikeVideoController,
  deleteLikeVideoController,
} from "../controllers/likedVideo.js";
import {
  watchLaterController,
  getAllwatchLaterController,
  deletewatchLaterController,
} from "../controllers/watchLater.js";
import {
  HistoryController,
  getAllHistoryController,
  deleteHistoryController,
} from "../controllers/History.js";
import upload from "../Helpers/fileHelpers.js";
import auth from "../Middleware/auth.js";

const router = express.Router();

router.post("/uploadVideo", auth, upload.single("file"), uploadVideo);
router.get("/getVideos", getAllvideos);
router.patch("/like/:id", auth, likeController);
router.patch("/view/:id", viewController);

router.post("/likeVideo", auth, likeVideoController);
router.get("/getAlllikeVideo", getAlllikeVideoController);
router.delete(
  "/deleteLikedVideo/:videoId/:Viewer",
  auth,
  deleteLikeVideoController
);

router.post("/watchLater", auth, watchLaterController);
router.get("/getAllwatchLater", getAllwatchLaterController);
router.delete(
  "/deleteWatchlater/:videoId/:Viewer",
  auth,
  deletewatchLaterController
);

router.post("/History", auth, HistoryController);
router.get("/getAllHistory", getAllHistoryController);
router.delete("/deleteHistory/:userId", auth, deleteHistoryController);

export default router;
