const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Users = require("../model/userModel");

exports.getAllUsers = async (req, res) => {
  const users = await Users.find({});

  res.status(200).json({
    success: true,
    users,
  });
  res.send("User Route is wokring");
};

exports.createUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await Users.insertMany(req.body);
  res.status(201).json({
    success: true,
    users,
  });
});
