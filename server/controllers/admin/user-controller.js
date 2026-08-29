const User = require("../../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password"); 
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error fetching users",
    });
  }
};

module.exports = { getAllUsers };