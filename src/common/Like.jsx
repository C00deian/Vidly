import React from "react";

function Like({ liked, onClick }) {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";

  return (
    <i
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    ></i>
  );
}

export default Like;
