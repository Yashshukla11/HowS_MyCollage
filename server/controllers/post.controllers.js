import asyncHandler from "../utils/asyncHandler.js";

const GetPost = asyncHandler((req, res) => {
    res.status(200).json({
        message: "Post Retrieved"
    })
});

const AddPost = asyncHandler((req, res) => {
    res.status(200).json({
        message: "Post Added"
    })
});

const RemovePost = asyncHandler((req, res) => {
    res.status(200).json({
        message: "Post Removed"
    })
});

const EditPost = asyncHandler((req, res) => {
    res.status(200).json({
        message: "Post Edited"
    })
});

export default {
    GetPost,
    AddPost,
    RemovePost,
    EditPost
};