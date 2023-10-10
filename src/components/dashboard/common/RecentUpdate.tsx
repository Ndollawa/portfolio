import React from "react";

const RecentUpdate = () => {
  return (
    <div className="recent__updates">
      <h2>Recent Blog Posts</h2>
      <div className="updates">
        <div className="update__box">
          <div className="content__image profile__photo">
            <img src="/assets/images/users/pic1.jpg" alt="" />
          </div>

          <div className="content">
            <p>
              <strong>Grace B.</strong> commented on your post.
            </p>
            <small className="text__muted">5 minutes ago</small>
          </div>
        </div>
        <div className="update__box">
          <div className="content__image profile__photo">
            <img src="/assets/images/users/pic2.jpg" alt="" />
          </div>

          <div className="content">
            <p>
              <strong>Grace B.</strong> commented on your post.
            </p>
            <small className="text__muted">5 minutes ago</small>
          </div>
        </div>
        <div className="update__box">
          <div className="content__image profile__photo">
            <img src="/assets/images/users/pic3.jpg" alt="" />
          </div>

          <div className="content">
            <p>
              <strong>Grace B.</strong> commented on your post.
            </p>
            <small className="text__muted">5 minutes ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentUpdate;
