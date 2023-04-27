import "./App.css";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Browse from "./pages/Browse";
import Post from "./pages/Post";
import { Link, useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Browse />,
    },
    {
      path: "/new",
      element: <New />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
    {
      path: "/post/:id",
      element: <Post />,
    },
  ]);

  return (
    <div className="App">
      <div className="links">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/new">
          <button>New</button>
        </Link>
      </div>
      <div className="element">{element}</div>
    </div>
  );
}

export default App;
