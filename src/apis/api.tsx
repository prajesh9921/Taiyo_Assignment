import axios from "axios";

const AllApi = () => {
  const getWorldWideDataOfCases = async () => {
    try {
      const response = await axios.get("https://disease.sh/v3/covid-19/all");
      return response?.data;
    } catch (error) {
      console.log("error in getting world wide data of cases", error);
    }
  };

  const getCountrySpecificCases = async () => {
    try {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/countries"
      );
      return response?.data;
    } catch (error) {
      console.log("error in getting country specific data of cases", error);
    }
  };

  const getCountryHistoricalData = async () => {
    try {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      const cases = response?.data?.cases;
      const data = [["Date", "Cases"], ...Object.entries(cases)];
      return data;
    } catch (error) {
      console.log("error in getting country historical data of cases", error);
    }
  };

  return {
    getWorldWideDataOfCases,
    getCountrySpecificCases,
    getCountryHistoricalData,
  };
};

export default AllApi;
