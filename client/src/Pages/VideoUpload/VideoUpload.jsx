import React, { useState } from 'react'
import "./VideoUpload.css"
import { useDispatch, useSelector } from 'react-redux';
import { uploadVideo } from '../../actions/video';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function VideoUpload({setVidUploadPage}) {
  const [title, setTitle] = useState("");
  const [videoFile, setCVideoFile] = useState("");
  
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  
  const handleSetVideo = (e) => {
    setCVideoFile(e.target.files[0])
  }

  const [progress, setProgress] = useState(0);
  const fileOptions = {
    onUploadProgress: (programEvent) => {
      const { load, total } = programEvent
      const percentage = Math.floor(((load / 1000) * 100) / (total / 1000))
      setProgress(percentage);
      if (percentage === 100)
      {
        setTimeout(() => {

        }, 3000);
        setVidUploadPage(false);

      }
    }
  }

  const uploadVideoFile = () => {
    if (!title) {
      alert("Plz Enter A Title of the video");
    } else if (!videoFile) {
      alert("Plz Attach a video File");
    } else if (videoFile.size > 1000000) {
      alert("Plz Attch video file less than 1kb");
    } else {
      const fileData = new FormData();
      fileData.append("file", videoFile);
      fileData.append("title", title);
      fileData.append("chanel", currentUser?.result._id);
      fileData.append("Uploder", currentUser?.result.name);
    //   console.log(videoFile)
      dispatch(
        uploadVideo({
          fileData: fileData,
          fileOptions: fileOptions,
        })
      );
    }
  };
  return (
    <>
      <div className="container_VidUpload">
          <input type="submit"
                  name='text'
                  value={'X'}
          className='ibtn_x'
        onClick={() => setVidUploadPage(false)}/>
      
      <div className="container2_VidUpload">
        <div className="ibox_div_vidupload">
            <input type="text"
              name='title'
              onChange={(e) => setTitle(e.target.value)}
          className='ibox_vidupload'
          maxLength={30}
          placeholder='Enter Title Of Your Video ' />
      </div>
      <label htmlFor="file" className='ibox_vidupload btn_vidUpload'>
            <input type="file" name='file'
               onChange={(e) => handleSetVideo(e)}
          className='ibox_vidupload'
        style={{fontSize:"1rem"}}/>
        </label>
        <div className="ibox_div_vidupload">
          <input type="submit" value={'Upload'}
              className='ibox_vidupload btn_vidUpload'
            onClick={uploadVideoFile}/>
          </div>
          <div className="loader ibox_div_vidupload">
            <CircularProgressbar
              value={progress}
              text={`${progress}`}
              styles={
                buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(255,255,255,${progress / 100})`,
                  textColor: "#f88",
                  trailColor: "#adff2f",
                  backgroundColor: "#3e86c7"
              })
            }/>
          </div>
        </div>
      </div>   
    </>
  )
}
