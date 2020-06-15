import React from "react";

const Util = {
  generate(element: React.ReactElement, baseArr: Array<any>) {
    return baseArr.map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  },
  async fetchAPI({
    url,
    method = "GET",
    body = "",
  }: {
    url: string;
    method?: string;
    body?: any;
  }) {
    let result = {};
    if (body) {
      await fetch(url, { method: method, body: JSON.stringify(body) })
        .then((response) => response.json())
        .then((data) => (result = data));
    } else {
      await fetch(url, { method: method })
        .then((response) => response.json())
        .then((data) => (result = data));
    }
    return result;
  },

  getFormattedNumber(number: number) {
    // http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
};

export default Util;
