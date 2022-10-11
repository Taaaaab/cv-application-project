// Object.js

import React from "react";
import uniqid from "uniqid";

const Object = (props) => {
  const { infoArray } = props;

  return (
    <ul>
      {infoArray.map((array) => {
        return <li key={uniqid()}>{array.fullName}</li>;
      })}
    </ul>
  );
};

export default Object;