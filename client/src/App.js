import { useEffect, useState } from "react";
import "./App.css";
import AllRoutes from "./Components/All_Routers/AllRoutes";
import DrawSlidebar from "./Components/Left_SIdebar/DrawSlidebar";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import CreateEditChannel from "./Pages/Channel/CreateEditChannel";
import { useDispatch } from "react-redux";
import { fetchAllChannel } from "./actions/ChanelUser";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import { getAllVideo } from "./actions/video";
import { getAlllikedVideo } from "./actions/likedVideo";
import { getAllwatchLater } from "./actions/watchLater";
import { getAllHistory } from "./actions/History";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllChannel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  }, [dispatch]);

  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };

  const [createEditChannelbtn, setcreateEditChannelbtn] = useState(false);
  const [vidUploadPage, setVidUploadPage] = useState(false);
  return (
    <>
      <Router>
        {vidUploadPage && <VideoUpload setVidUploadPage={setVidUploadPage} />}
        {createEditChannelbtn && (
          <CreateEditChannel
            setcreateEditChannelbtn={setcreateEditChannelbtn}
          />
        )}
        <Navbar
          toggleDrawer={toggleDrawer}
          setcreateEditChannelbtn={setcreateEditChannelbtn}
        />
        <DrawSlidebar
          toggleDrawer={toggleDrawer}
          toggleDrawerSidebar={toggleDrawerSidebar}
        />

        <AllRoutes
          setcreateEditChannelbtn={setcreateEditChannelbtn}
          setVidUploadPage={setVidUploadPage}
        />
      </Router>
    </>
  );
}

export default App;
