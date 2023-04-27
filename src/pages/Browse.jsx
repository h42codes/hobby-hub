import { useEffect, useState } from "react";
import { supabase } from "../client";
import Card from "../components/Card";
import Loading from "../components/Loading";

const Browse = () => {
  const [posts, setPosts] = useState();

  const fetchData = async () => {
    const { data } = await supabase
      .from("posts")
      .select()
      .order("created_at", { ascending: false });

    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {posts ? (
        posts.map((post) => <Card key={post.id} post={post} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Browse;
