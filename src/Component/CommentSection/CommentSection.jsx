import React, { useState } from "react";
import "./CommentSection.css";

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "John Doe",
      text: "Sản phẩm này sẽ mua tặng cho gia đình sau ngày 15 nè!",
      timestamp: "5 min ago",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        name: "You",
        text: newComment,
        timestamp: "Just now",
      };
      setComments([newCommentObj, ...comments]);
      setNewComment("");
    }
  };

  return (
    <div className="comment-section container">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <img
            src="./public/Ellipse1.png"
            alt="User Avatar"
            className="user-avatar"
          />
          <div className="comment-content">
            <p className="comment-author">{comment.name}</p>
            <p>{comment.text}</p>
            <div className="comment-actions">
              <span>{comment.timestamp}</span>
              <button className="comment-btn">B</button>
              <button className="comment-btn">I</button>
              <button className="comment-btn">🔗</button>
            </div>
          </div>
        </div>
      ))}

      <div className="add-comment">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Thêm bình luận..."
        ></textarea>
        <button onClick={handleAddComment} className="comment-submit-btn">
          Bình luận
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
