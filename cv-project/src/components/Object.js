// Object.js

import React from "react";
import uniqid from "uniqid";

const Object = (props) => {
  const { infoArray } = props;

  return (
    <ul>
      {infoArray.map((array) => {
        return <ol key={uniqid()}>{array}</ol>;
      })}
    </ul>
  );
};

export default Object;