import ShowVideo from "../ShowVideo/ShowVideo"
import './ShowVideoGrid.css'

export default function ShowVideoGrid({vids}) {
  return (
      <>
          <div className="container_showVideoGrid">
              {
                  vids?.reverse().map((item) => {
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
