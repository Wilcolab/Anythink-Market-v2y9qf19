const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");
const auth = require("../../config/passport");

/**
 * GET /api/comments
 * Retrieves all comments from the database
 * @async
 * @returns {Promise<Object>} JSON object containing array of all comments
 */
router.get("/", auth.optional, async (req, res, next) => {
  try {
    const comments = await Comment.find()
      .populate("author")
      .sort({ createdAt: -1 });
    return res.json({ comments });
  } catch (err) {
    return next(err);
  }
});

/**
 * DELETE /api/comments/:id
 * Deletes a specific comment by ID
 * @async
 * @param {string} id - The comment ID to delete
 * @returns {Promise<Object>} JSON object confirming deletion
 */
router.delete("/:id", auth.required, async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    
    if (!comment) {
      return res.status(404).json({ errors: { "Comment not found": "404" } });
    }

    // Check if the user owns the comment
    if (comment.author.toString() !== req.payload.id.toString()) {
      return res.status(403).json({ errors: { "Not authorized": "403" } });
    }

    await Comment.findByIdAndDelete(req.params.id);
    return res.json({ message: "Comment deleted" });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
