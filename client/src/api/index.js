import axios from "axios";
const API = axios.create({
  baseURL: `http://localhost:5500/`,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});
export const login = (authData) => API.post("/user/login", authData);

export const updateChanelData = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);

export const fetchAllChannel = () => API.get("/user/getAllChannels");

export const uploadVideo = (fileData, fileOptions) =>
  API.post("/video/uploadVideo", fileData, fileOptions);

export const getVideos = () => API.get("video/getVideos");

export const likeVideo = (id, like) => API.patch(`/video/like/${id}`, { like });

export const addToLikedVideo = (LikedVideoData) =>
  API.post("/video/likeVideo", LikedVideoData);

export const getAlllikedVideo = () => API.get("/video/getAlllikeVideo");

export const deletelikedVideo = (videoId, Viewer) =>
  API.delete(`/video/deleteLikedVideo/${videoId}/${Viewer}`);

export const viewsVideo = (id) => API.patch(`/video/view/${id}`);

export const addTowatchLater = (watchLaterData) =>
  API.post("/video/watchLater", watchLaterData);
export const getAllwatchLater = () => API.get("/video/getAllwatchLater");

export const deleteWatchLater = (videoId, Viewer) =>
  API.delete(`/video/deleteWatchlater/${videoId}/${Viewer}`);

export const addToHistory = (HistoryData) =>
  API.post("/video/History", HistoryData);
export const getAllHistory = () => API.get("/video/getAllHistory");
export const deleteHistory = (userId) =>
  API.delete(`/video/deleteHistory/${userId}`);

  
export const postComment = (CommentData) =>
  API.post("/comment/post", CommentData);
export const deleteComment = (id) => API.delete(`/comment/delete/${id}`);
export const editComment = (id, commentBody) =>
  API.patch(`/comment/edit/${id}`, { commentBody });
export const getAllComment = () => API.get("/comment/get");
