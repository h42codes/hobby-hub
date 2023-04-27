import Editor from "../components/Editor";
import { supabase } from "../client";

const New = () => {
  return (
    <div>
      <h1>New</h1>
      <Editor isEdit={false} />
    </div>
  );
};

export default New;
