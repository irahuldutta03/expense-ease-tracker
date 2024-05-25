const asyncHandler = require("express-async-handler");
const Mode = require("../models/mode.model.js");

const allListByUserId = asyncHandler(async (req, res) => {
  try {
    const UserId = req.user._id;

    const modes = await Mode.find({ UserId: UserId }).populate("UserId", "-password");

    return res.status(200).json({
      status: 200,
      data: modes,
    });
  } catch (error) {
    res.status(404);
    throw new Error("Modes not found");
  }
});

module.exports = { allListByUserId };
