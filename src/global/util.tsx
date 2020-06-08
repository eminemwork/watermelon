import React from "react";

const Util = {
  generate(element: React.ReactElement, baseArr: Array<any>) {
    return baseArr.map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  },
};

export default Util;
