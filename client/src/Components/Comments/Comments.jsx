import { useState } from "react"
import DisplayComments from "./DisplayComments";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../actions/comments";
import "./comments.css";


export default function Comments({videoId}) {
   const currentUser = useSelector((state) => state.currentUser);
  const [commentText, setCommentText] = useState("")

  const commentsList = useSelector((state) => state.comment);
  const dispatch = useDispatch()

  // const commentsList = [
  //   {
  //     _id: 1,
  //     commentBody: "Hello",
  //     userCommented: "abc"
  //   },
  //   {
  //     _id: 2,
  //     commentBody: "Hiii",
  //     userCommented: "abc"
  //   }
  // ]

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(!commentText){
      alert("write the comment before submitting")
    } else {
      dispatch(postComment({
        videoId: videoId,
        userId: currentUser?.result._id,
        commentBody: commentText,
        userCommented: currentUser?.result._id
      }))
    }
    setCommentText("");
  }
  return (
    <>
      <form className="comments_sub_form_comments"
      onSubmit={handleOnSubmit}
      >
        <input type="text" className="comment_ibox"
          onChange={(e) => { setCommentText(e.target.value) }}
        value={commentText}/>
        <input type="submit" value="add" className='comment_add_btn_comments'  />
      </form>
      <div className="display_comment_container">
        {
          commentsList?.data?.filter(q=>videoId === q?.videoId).reverse().map((d) => {
            return (
              <DisplayComments
                cId={d._id}
                userId={d.userId}
                commentBody={d.commentBody}
                commentOn={d.commentOn}
                userCommented={d.userCommented} />     
            )
          })
        }
      </div>
      {commentText}
    </>
  )
}
