import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Library from '../../Pages/Library/Library';
import YourVideo from '../../Pages/YourVideo/YourVideo';
import WatchedHistory from '../../Pages/WatchedHistory/WatchedHistory';
import WatchLater from '../../Pages/WatchLater/WatchLater';
import LikedVideo from '../../Pages/LikedVideos/LikedVideo';
import VideoPage from '../../Pages/VideoPage/VideoPage';
import Channel from '../../Pages/Channel/Channel';
import Search from '../../Pages/Search/Search';

export default function AllRoutes({setcreateEditChannelbtn,setVidUploadPage}) {
  return (

        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/library' element={<Library />} />
        <Route exact path='/yourvideo' element={<YourVideo />} />
        <Route exact path='/history' element={<WatchedHistory />} />
        <Route exact path='/watchlater' element={<WatchLater />} />
        <Route exact path='/likedvideo' element={<LikedVideo />} />
        <Route exact path='/search/:searchQuery' element={<Search />} />
        <Route path='/videopage/:vid' element={<VideoPage />} /> 
      <Route path='/channelpage/:Cid' element={<Channel
        setcreateEditChannelbtn={setcreateEditChannelbtn}
        setVidUploadPage={setVidUploadPage} />} />      
      </Routes>

  )
}
