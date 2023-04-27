import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ post }) => {
  // const date = new Date(post.created_at).toISOString().split("T")[0];

  const date = new Date(post.created_at);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(date);

  return (
    <div className="Card">
      <div className="card-content">
        <Link to={`/post/${post.id}`}>
          <h1>{post.title}</h1>
        </Link>
        <h2>by {post.author}</h2>
        <p>on {formattedDate}</p>
        {post.image_url && <img src={post.image_url} alt="" />}

        <p>{post.desc}</p>
        <h3>{post.upvote} Upvotes</h3>
      </div>
      {/* <div className="card-buttons">
        <button onClick={() => console.log("delete")}>Delete</button>
        <Link to={`/edit/${post.id}`}>
          <button>Edit</button>
        </Link>
      </div> */}
    </div>
  );
};

export default Card;
