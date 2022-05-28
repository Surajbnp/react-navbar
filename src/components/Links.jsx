import React from "react";

const Links = () => {
  let linkArr = [{ link: "Service" }, { link: "Projects" }, { link: "About" }];

  return (
    <div>
      {linkArr.map((e) => {
       return <div>{e.link}</div>;
      })}
    </div>
  );
};

export default Links;
