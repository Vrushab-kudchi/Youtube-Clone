import LeftSideBar from '../../Components/Left_SIdebar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import './Home.css'
import { useSelector } from 'react-redux';
// import vid from '../../Components/video/lake_clouds_forest_nature_dark_595.mp4'

export default function Home() {

  const vids = useSelector((state) => state.video)?.data?.filter(q=>q).reverse();
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
  const NavList = [
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy"
  ]
  return (
    <>
      <div className="container_pages_app">
        <LeftSideBar />
        <div className="container2_pages_app">
          <div className="navigate_Home">
            {
              NavList.map((item) => {
                return (
                  <p key={item} className="btn_nav_home">
                    {item}
                  </p>
                )
              })
            }
          </div>
          <ShowVideoGrid vids={vids} />
        </div>
      </div>
    </>
  )
}

