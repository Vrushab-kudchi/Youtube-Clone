import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import LeftSideBar from "../../Components/Left_SIdebar/LeftSideBar";

// import vid from "../../Components/Video/vid.mp4";
// import "./Search.css";
function Search() {
    const {searchQuery}=useParams();
  const vids = useSelector((state) => state.video)
    ?.data?.filter((q) => q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase()))
    .reverse();

  return (
    <div className="container_Pages_App">
      <LeftSideBar />
      <div className="container2_Pages_App">
        <h2 style={{color:"white"}}>Search Results for {searchQuery}...</h2>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
}

export default Search;
