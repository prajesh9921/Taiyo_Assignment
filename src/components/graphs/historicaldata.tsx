import React from "react";
import { Chart } from "react-google-charts";
import { useQuery } from "@tanstack/react-query";
import AllApi from "../../apis/api";
import Spinner from "../spinner/spinner";

const options = {
  title: "Historical Case Counts",
  curveType: "function",
  legend: { position: "bottom" },
  hAxis: {
    title: "Date",
    slantedText: true,
    slantedTextAngle: 45,
  },
  vAxis: {
    title: "Number of Cases",
  },
};

function HistoricalData() {
  const { getCountryHistoricalData } = AllApi();

  // Historical cases of covid-19
  const { isFetching, data } = useQuery({
    queryKey: ["historicaldata"],
    queryFn: getCountryHistoricalData,
  });

  return (
    <div>
      <h1 className="mb-5 mt-10 font-bold">Covid-19 Historical Data</h1>
      {isFetching ? (
        <Spinner />
      ) : (
        <div className="w-full max-w-full overflow-x-auto lg:overflow-x-visible">
          <div className="min-w-[600px] max-h-[400px] lg:min-w-[auto] lg:max-h-[none]">
            <Chart
              chartType="LineChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HistoricalData;
