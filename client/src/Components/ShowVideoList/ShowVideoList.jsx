import ShowVideo from "../ShowVideo/ShowVideo"
import { useSelector } from "react-redux"

export default function ShowVideoList({ videoId }) {


  
  const vids = useSelector(s => s.video)
  console.log(vids)
  //   const vids = [
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
            <div className="container_showVideoGrid">
              {
                  vids?.data?.filter(q => q._id === videoId).reverse().map((item) => {
                      return (
                          <div key={item._id} className="video_box_app">
                              <ShowVideo vid = {item} />
                        </div>
                    )
                  })
              }
          </div>
    </>
  )
}
