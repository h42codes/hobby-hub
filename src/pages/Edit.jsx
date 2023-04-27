import { supabase } from "../client";
import Editor from "../components/Editor";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Edit = () => {
  const { id } = useParams();
  // const [data, setData] = useState({
  //   author: "",
  //   title: "",
  //   desc: "",
  //   upvote: 0,
  //   image_url: "",
  // });
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("posts").select().eq("id", id);
      setData(data[0]);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {/* <h1>Edit</h1> */}
      {data ? <Editor data={data} isEdit={true} id={id} /> : <Loading />}
    </div>
  );
};

export default Edit;
