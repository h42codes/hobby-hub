import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../client";
import "./Editor.css";

const Editor = ({ data, isEdit, id }) => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    desc: "",
    upvote: 0,
    image_url: "",
  });

  useEffect(() => {
    if (isEdit && data) {
      setFormData({
        ...data,
      });
    }
  }, [data, isEdit]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await supabase.from("posts").insert([formData]).select();

    window.location = "/";
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await supabase.from("posts").update(formData).eq("id", id);

    window.location = "/";
  };

  return (
    <div className="Editor">
      <form>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        ></input>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        ></input>
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          id="desc"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
        ></input>
        <label htmlFor="image_url">Image URL</label>
        <input
          type="text"
          id="image_url"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
        ></input>
        {/* <button type="submit">Submit</button> */}
        <div className="editor-buttons">
          {isEdit ? (
            <button onClick={handleUpdate}>Update</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
          {/* <button onClick={() => navigate(-1)}>Cancel</button>
           */}

          <Link to={`/`}>
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Editor;
