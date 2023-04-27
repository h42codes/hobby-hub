// const Loading = () => {
//   return (
//     <div className="Loading">
//       <h1>Loading...</h1>
//     </div>
//   );
// };

// export default Loading;

import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box sx={{ display: "flex", margin: "100px" }}>
      <CircularProgress />
    </Box>
  );
}
