import "./CreateEditChannel.css"
import vid from '../../Components/video/lake_clouds_forest_nature_dark_595.mp4'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import LeftSideBar from '../../Components/Left_SIdebar/LeftSideBar'
import DescribeChannel from "./DescribeChannel";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Channel({ setcreateEditChannelbtn,setVidUploadPage }) {
  const { Cid } = useParams();
  const vids = useSelector((state) => state.video)?.data?.filter(q => q.videoChanel === Cid).reverse();
 
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     Chanel: "62bafe6752cea35a6c30685f",
  //     title: "video 1",
  //     Uploder: "abc",
  //     description: "description of  video 1",
  //     uploader: "ABC"
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     Chanel: "cdd",
  //     title: "video 2",
  //     Uploder: "abc",
  //     description: "description of  video 2",
  //     uploader: "ABC"
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 3",
  //     Uploder: "abc",
  //     description: "description of  video 3",
  //     uploader: "ABC"
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 3",
  //     Uploder: "abc",
  //     description: "description of  video 3",
  //     uploader: "ABC"
  //   },
  //     {
  //     _id: 4,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 3",
  //     Uploder: "abc",
  //     description: "description of  video 3",
  //     uploader: "ABC"
  //   }
  // ];  
  return (
    <>
      <div className="container_pages_app">
        <LeftSideBar />
        <div className="container2_pages_app">
          <DescribeChannel
            setVidUploadPage={setVidUploadPage}
            setcreateEditChannelbtn={setcreateEditChannelbtn}
            Cid={Cid} />
          <ShowVideoGrid vids={vids} />
        </div>
      </div>  
    </>
  )
}


