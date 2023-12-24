import mongoose from "mongoose";
import users from "../models/auth.js";

export const updateChannelData = async (req, res) => {
  const { id: _id } = req.params;
  const { name, desc } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Channel unavailable..");
  }

  try {
    const updateData = await users.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(_id) }, 
      {
        $set: {
          name: name,
          desc: desc,
        },
      },
      { new: true }
    );
    res.status(200).json(updateData);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};

export const getAllChannels = async (req, res) => {
  try {
    const allChannel = await users.find();
    const allChannelDetails = [];
    allChannel.forEach((element) => {
      allChannelDetails.push({
        _id: element.id,
        name: element.name,
        desc: element.desc,
        email: element.email,
      });
    });
    res.status(201).json(allChannelDetails);
  } catch (error) {
    res.status(404).jsn({ message: error.message });
  }
};
