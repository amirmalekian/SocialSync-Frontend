import Post from "../post/Post";
import "./posts.scss";
import post1 from "../../assets/posts/wallpaper-2.jpg";
import post2 from "../../assets/posts/wallpaper-0.jpg";
const Posts = () => {
  // Temporarily Use Dummy Data
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      img: post1,
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
