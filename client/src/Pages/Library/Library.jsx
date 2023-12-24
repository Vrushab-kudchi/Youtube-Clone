import LeftSideBar from '../../Components/Left_SIdebar/LeftSideBar'
import './Library.css'
import vid from '../../Components/video/lake_clouds_forest_nature_dark_595.mp4'
import { FaHistory } from "react-icons/fa"
import WHLVideoList from '../../Components/WHL/WHLVideoList';

export default function Library() {
    const vids = [
    {
      _id: 1,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 1",
      Uploder: "abc",
      description: "description of  video 1",
      uploader: "ABC"
    },
    {
      _id: 2,
      video_src: vid,
      Chanel: "cdd",
      title: "video 2",
      Uploder: "abc",
      description: "description of  video 2",
      uploader: "ABC"
    },
    {
      _id: 3,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
      uploader: "ABC"
    },
    {
      _id: 4,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
      uploader: "ABC"
    },
      {
      _id: 4,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
      uploader: "ABC"
    }
  ];
  return (
    <>
      <div className="container_pages_app">
        <LeftSideBar />
          <div className="container_libraryPage">
            <h1 className="title_container_LibraryPage">
              <b>
                <FaHistory />
              </b>
              <b>
                History
              </b>
            </h1>
            <div className="container_videoList_LibraryPage">
              <WHLVideoList
                page={"History"}
                videoList={vids}
              />
            </div>
        </div>
        
      </div>
      
    </>
  )
}
