import asyncHandler from "../utils/asyncHandler.js";

const RegisterCollage = asyncHandler((req, res) => {
    res.status(200).json({
        message: "Collage Registered"
    })
});
const AddCollage = asyncHandler((req, res) => {
    res.status(200).json({
        message: "Collage Added"
    })
});

const RemoveCollage = asyncHandler((req, res) => {
    res.status(200).json({
        message: "Collage Removed"
    })
});

const EditCollageDetails = asyncHandler((req, res) => {
    res.status(200).json({
        message: "Collage Details Edited"
    })
});

export default {RegisterCollage, AddCollage , RemoveCollage , EditCollageDetails};