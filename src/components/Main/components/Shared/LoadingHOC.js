import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

function LoadingHOC({ loading, children, height, width = "100%" }) {
  if (loading) {
    return <Skeleton animation="wave" width={width} height={height} />;
  }

  return <> {children} </>;
}

export default LoadingHOC;
