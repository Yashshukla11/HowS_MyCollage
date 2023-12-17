import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler((req, res) => {
    res.status(200).json({
        message: "registerUser"
    })
});

const loginUser = asyncHandler((req, res) => {
    res.status(200).json({
        message: "loginUser"
    })
});

const logoutUser = asyncHandler((req, res) => {
    res.status(200).json({
        message: "logoutUser"
    })
});



export default {registerUser , loginUser , logoutUser};