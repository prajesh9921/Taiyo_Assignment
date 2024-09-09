import React from "react";
import { Chart } from "react-google-charts";
import { useQuery } from "@tanstack/react-query";
import AllApi from "../../apis/api";
import Spinner from "../spinner/spinner";

export const options = {
  title: "COVID-19 Daily Data",
  hAxis: {
    title: "Types of Cases",
  },
  vAxis: {
    title: "No of Cases",
  },
  legend: { position: "none" },
  curveType: "function",
};

const WorldWideCasesOfDay: React.FC = () => {
  const { getWorldWideDataOfCases } = AllApi();

  // World wide cases of day
  const { isFetching, data } = useQuery({
    queryKey: ["worlddata"],
    queryFn: getWorldWideDataOfCases,
  });

  if (isFetching) {
    return <p>Loading...</p>;
  }

  const data1 = [
    ["Metric", "Today"],
    ["cases", data?.cases],
    ["todayCases", data?.todayCases],
    ["active", data?.active],
    ["casesPerOneMillion", data?.casesPerOneMillion],
    ["oneCasePerPeople", data?.oneCasePerPeople],
  ];

  return (
    <div>
      <h1 className="mb-5 font-bold">Covid-19 Daily Data</h1>
      {isFetching ? (
        <Spinner />
      ) : (
        <div className="w-full max-w-full overflow-x-auto lg:overflow-x-visible">
          <div className="min-w-[600px] max-h-[400px] lg:min-w-[auto] lg:max-h-[none]">
            <Chart
              chartType="LineChart"
              width="100%"
              height="400px"
              data={data1}
              options={options}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldWideCasesOfDay;
