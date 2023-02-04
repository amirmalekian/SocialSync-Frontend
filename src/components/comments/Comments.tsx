import "./comments.scss";
import m2 from "../../assets/users/m2.jpg";
import w2 from "../../assets/users/w2.jpg";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { user } = useContext(AuthContext);

  // Temporarily Use Dummy Data
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eum deleniti, recusandae ea possimus cumque. Consequuntur quos dolorum recusandae voluptas?",
      name: "Jahn Doe",
      userId: 1,
      profilePicture: m2,
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eum deleniti, recusandae ea possimus cumque. Consequuntur quos dolorum recusandae voluptas?",
      name: "Jahn Doe",
      userId: 2,
      profilePicture: w2,
    },
  ];
  return (
    <div className="comments">
      <div className="comment__write">
        <img src={user?.profilePicture} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <div className="comment__profile-picture">
            <img src={comment.profilePicture} alt="" />
          </div>
          <div className="comment__content">
            <span className="comment__content__name">{comment.name}</span>
            <p className="comment__content__desc">{comment.desc}</p>
          </div>
          <span className="comment__date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
