// Object.js

import React from "react";

const Object = (props) => {
    const { infoArray } = props;

    return (
        <ul>
            {infoArray.map((array) => {
                return (
                <li key={array[0]}></li>,
                <li key={array[1]}></li>,
                <li key={array[2]}></li>
                )
            })}
        </ul>
    );
};

export default Object;