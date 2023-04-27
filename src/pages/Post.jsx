import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../client";
import "./Post.css";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Post = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  const fetchData = async () => {
    const fullData = await supabase
      .from("posts")
      .select()
      .order("created_at", { ascending: false });

    setData(fullData.data.filter((post) => post.id == id)[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpvote = async () => {
    await supabase
      .from("posts")
      .update({ upvote: data.upvote + 1 })
      .eq("id", id);

    fetchData();
  };

  const handleDelete = async () => {
    await supabase.from("posts").delete().eq("id", id);
    window.location = "/";
  };

  return (
    <div className="Post">
      {data ? (
        <>
          <div>
            <h1>{data.title}</h1>
            <h2>by {data.author}</h2>
            <p>on {data.created_at}</p>
            {data.image_url && <img src={data.image_url} alt="" />}
            <p>{data.desc}</p>
            <h3>{data.upvote} Upvotes</h3>
          </div>
          <div className="buttons">
            <button onClick={handleUpvote}>Upvote</button>
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/edit/${id}`}>
              <button>Edit</button>
            </Link>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Post;
