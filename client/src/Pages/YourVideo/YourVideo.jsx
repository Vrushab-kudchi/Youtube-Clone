import { useSelector } from 'react-redux';
import LeftSideBar from '../../Components/Left_SIdebar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import "./YourVideo.css"
export default function YourVideo() {

 const currentUser = useSelector((state) => state.currentUser);

  const vids = useSelector((state) => state.video)?.data?.filter(q => q.videoChanel === currentUser?.result?._id).reverse();
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
          <div className="container_yourvideo"> 
            <h1>Your Videos</h1>
            {
              currentUser ? <>
              <ShowVideoGrid vids={vids} />
              </> : <>
              Login to Check Your Uploaded Video
                </>
            }
          
          </div>
        </div>
      </div>
    </>
  )
}
