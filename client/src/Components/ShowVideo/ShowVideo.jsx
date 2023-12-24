import { Link } from 'react-router-dom'
import './ShowVideo.css'
import moment from 'moment'

export default function ShowVideo({vid}) {
  return (
    <>
        <Link to={`/videopage/${vid?._id}`}>
          <video src={`http://localhost:5500/${vid?.filePath}`}
            className='video_ShowVideo' />
      </Link>
      <div className="video_description">
        <div className="channel_logo">
          {vid?.Uploder?.charAt(0).toUpperCase()}
        </div>
        <div className='video_details'>
            <p className='title_vid_ShowVideo'>{vid?.videoTitle}</p>
            <pre className='vid_views_UploadTime'>{vid?.Uploder}</pre>
            <pre className='vid_views_UploadTime'>
                {vid?.Views} views <div className="dot"></div> uploaded {moment(vid?.createdAt).fromNow()}
            </pre>

        </div>
      </div>
    </>
  )
}
