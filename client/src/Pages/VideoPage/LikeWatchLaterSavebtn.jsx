/* eslint-disable */

import { useEffect, useState } from "react";
import "./LikeWatchLaterSavebtn.css";
import { BsThreeDots } from "react-icons/bs";
import { MdPlaylistAddCheck } from "react-icons/md";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { likeVideo } from "../../actions/video";
import { addToLikedVideo } from "../../api";
import { addTowatchLater, deleteWatchLater } from "../../actions/watchLater";
import { deletelikedVideo } from "../../actions/likedVideo";

export default function LikeWatchLaterSavebtn({ vv, vid }) {
  const currentUser = useSelector((state) => state.currentUser);
  
  const dispatch = useDispatch()
  const [saveVideo, setSaveVideo] = useState(false)
  const [dislike, setDislike] = useState(false)
  const [like, setlike] = useState(false)
    
  const likedVideoList = useSelector(state => state.likedVideo) 
  const watchLater = useSelector(state => state.watchLater) 

  useEffect(() => {
    likedVideoList?.data.filter(q => q.videoId === vid && q?.Viewer === currentUser?.result._id).map(m => setlike(true))
    watchLater?.data.filter(q => q.videoId === vid && q?.Viewer === currentUser?.result._id).map(m => setSaveVideo(true))
  
  },[])
  const toggleSaveVideo = () => {
    if (currentUser) {
      if (saveVideo) {
        setSaveVideo(false)
        dispatch(deleteWatchLater({
          videoId: vid,
          Viewer: currentUser?.result._id,
        }))
      }
      else {
        setSaveVideo(true)
        dispatch(addTowatchLater({
          videoId: vid,
          Viewer: currentUser?.result._id
        }))
      }
    } else {
        alert("Please login to perform this action")
    }
  }

  const toggleDisLike = (e, lk) => {
    if(currentUser){
    if (dislike) {
      setDislike(false)
    } else {
      setDislike(true)
      setlike(false)
      if (like) {
        dispatch(
          likeVideo({
            id: vid,
            Like: lk - 1,
          })
        );
        dispatch(deletelikedVideo({
          videoId: vid,
          Viewer: currentUser?.result._id
      }))
      }
      dispatch(likeVideo())
    } } else {
      alert("Please login to perform this action")
      }
  }

  const togglelike = (e, lk) => {
    if(currentUser){
    if (like)
    {
      setlike(false)
        dispatch(
          likeVideo({
            id: vid,
            Like: lk - 1,
          })
        );
      dispatch(deletelikedVideo({
          videoId: vid,
          Viewer: currentUser?.result._id
      }))
    } else {
      setlike(true)
        dispatch(
          likeVideo({
            id: vid,
            Like: lk + 1,
          })
        );
      dispatch(addToLikedVideo({
        videoId: vid,
        Viewer: currentUser?.result._id
      }))
      setDislike(false)
      }
    } else {
      alert("Please login to perform this action")
    }
  }  
  return (
    <>
      <div className="btns_cont_videoPage">
        <div className="btn_VideoPage">
          <BsThreeDots />
        </div>
        <div className="btn_VideoPage">
        <div className="like_videoPage" onClick={(e) => togglelike(e,vv.Like)}>
            {
              like ?
                <>
                <AiFillLike size={22} className="btns_videoPage" />
                </> :
                <>
                <AiOutlineLike size={22} className="btns_videoPage" />
                </>  
            }
            <b>{vv?.Like}</b>
          </div>
          <div className="like_videoPage" onClick={(e) => toggleDisLike(e,vv.Like)}>
            {
              dislike ?
                <>
                <AiFillDislike size={22} className="btns_videoPage" />
                </> :
                <>
                <AiOutlineDislike size={22} className="btns_videoPage" />
                </>  
            }
            <b>Dislike</b>
          </div>
          <div className="like_videoPage" onClick={toggleSaveVideo}>
            {
              saveVideo ?
                <>
                  <MdPlaylistAddCheck size={22} className="btns_videoPage" />
                <b>Saved</b> 
                </> :
                <>
                <RiPlayListAddFill size={22} className="btns_videoPage" />
                    <b>Save</b>
                </>  
              }
          </div>
          <div className="like_videoPage">
            <>
              <RiHeartAddFill size={22} className="btns_videoPage" />
              <b>Thanks</b>
            </>
          </div>
          <div className="like_videoPage">
            <>
              <RiShareForwardLine size={22} className="btns_videoPage" />
              <b>Share</b>
            </>
          </div>
        </div>
      </div>
    </>
  );
}
