import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'

export default function WHLVideoList({ page, videoList,currentUser }) {
  return (
    <>
      {currentUser ? (<>
        {
            videoList?.data?.filter(q => q?.Viewer === currentUser).reverse().map((d) => {
            return (
              <ShowVideoList videoId={d?.videoId} key={d?._id} />       
          )
      })
      }
      </>) :
        (<>
          <h1 style={{ color: "white" }}>Plz Login To Watch  Your {page}</h1>
        </>)
 }
    </>
  )
}
