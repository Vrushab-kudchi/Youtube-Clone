import videoFiles from "../models/videoFiles.js";
import mongoose from "mongoose";

export const likeController = async (req, res) => {
  const { id: _id } = req.params;
  const { like } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Video Unavailable");
  }

  try {
    const updatedLike = await videoFiles.findByIdAndUpdate(_id, {
      $set: {
        Like: like,
      },
    });

    if (!updatedLike) {
      return res.status(404).send("Video not found");
    }

    res.status(200).send({ success: "Updated Likes" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
