import "./VideoPage.css"
import LikeWatchLaterSavebtn from "./LikeWatchLaterSavebtn"
import Comments from "../../Components/Comments/Comments"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useEffect } from "react";
import { addToHistory } from "../../actions/History";
import { viewVideo } from "../../actions/video";

export default function VideoPage() {
  const currentUser = useSelector((state) => state.currentUser)
  const dispatch = useDispatch()
  const { vid } = useParams();
  //console.log(vid)
  const vids = useSelector((state) => state.video)?.data;
  const vv = vids.filter((q) => q._id === vid)[0];
  // const chanels = useSelector((state) => state?.channel);
  // const currentChanel = chanels.filter((c) => c._id === Cid)[0];

  const handleHistory = () => {
    dispatch(
      addToHistory({
        videoId: vid,
        Viewer: currentUser?.result._id,
       })
    )
  }
  const handleViews = (vw) => {
    dispatch(viewVideo({
      id:vid
    }))
  }

  useEffect(() => {
    if (currentUser) {
      handleHistory();
    }
    handleViews()
},[])
  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <video src={`http://localhost:5500/${vv?.filePath}`}
              className={"video_ShowVideo_videoPage "}
              controls
              autoPlay>
            </video>
            <div className="video_details_videoPage">
              <div className="video_btns_title_VideoPage_cont">
                <p className="video_title_VideoPage">{vv?.videoTitle}</p>
                <div className="views_date_btns_VideoPage">
                  {vv?.Views} Views <div className="dot"></div>{moment(vv?.createdAt).fromNow()}  </div>
                <LikeWatchLaterSavebtn vv={vv} vid={vid} />
            </div>
              </div>
            <Link to={`/channelpage/${vv?.videoChanel}`} className="chanel_details_videoPage">
              <b className="chanel_logo_videoPage">
                <p> {vv?.Uploder.charAt(0).toUpperCase()}</p>
              </b>
              <p className="chanel_name_videoPage">
                {vv?.Uploder}
              </p>
            </Link>
            <div className="comments_VideoPage">
              <h2>
                <u>Comment</u>
              </h2>
              <Comments videoId={vv._id} />
            </div>
          </div>
          <div className="moreVideoBar">
            More Video
          </div>
        </div>
      </div>
    </>
  )
}
