import Post from "../post/Post";
import "./posts.scss";
import post1 from "../../assets/posts/cat1.jpg";
import post2 from "../../assets/posts/cat2.jpg";
import w1 from "../../assets/users/w1.jpg";
import m1 from "../../assets/users/m1.jpg";

const Posts = () => {
  // Temporarily Use Dummy Data
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: w1,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      img: post1,
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic: m1,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste nesciunt soluta excepturi. Optio rem eius vel maiores laboriosam ad. ",
      img: post2,
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
