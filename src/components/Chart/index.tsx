import React, { useState, useEffect } from "react";
import ChartList from "./chartList";
import Util from "global/util";
import URI from "global/uri";
import ChartData from "./chartDataInterface";

function createData(data: any) {
  return { ...data };
}

export default function Chart() {
  const [chartData, setChartData] = useState<ChartData[] | []>([]);
  useEffect(() => {
    Util.fetchAPI({ url: `${URI.BACK_URI}/chart` }).then((data) => {
      const cd = Object.values(data).map((row) => createData(row));
      setChartData(cd);
    });
  }, [chartData]);

  return (
    <>
      <ChartList chartData={chartData} />
    </>
  );
}
