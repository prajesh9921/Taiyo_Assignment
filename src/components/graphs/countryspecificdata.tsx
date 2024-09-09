// MapComponent.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "@tanstack/react-query";
import AllApi from "../../apis/api";
import Spinner from "../spinner/spinner";

const CountrySpecificDataGraph = () => {
  const { getCountrySpecificCases } = AllApi();

  // Fetch world data cases of covid-19
  const { isFetching, isError, data, error } = useQuery({
    queryKey: ["countriesdata"],
    queryFn: getCountrySpecificCases,
  });

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h1 className="mb-5 mt-10 font-bold">Covid-19 Countries Data</h1>
      {isFetching ? (
        <Spinner />
      ) : (
        <MapContainer
          style={{ height: 500, width: "100%" }}
          center={[20, 0]}
          zoom={5}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {Array.isArray(data) &&
            data?.map((country, index) => (
              <Marker
                key={index}
                position={[
                  country?.countryInfo?.lat,
                  country?.countryInfo?.long,
                ]}
              >
                <Popup>
                  <img
                    src={country?.countryInfo?.flag}
                    alt={country?.country}
                    width={50}
                  />
                  <h2>
                    <strong>Country:</strong> {country?.country}{" "}
                    <strong>Continent:</strong> {country?.continent}
                  </h2>
                  <p>
                    <strong>Cases:</strong> {country?.cases}
                  </p>
                  <p>
                    <strong>Deaths:</strong> {country?.deaths}
                  </p>
                  <p>
                    <strong>Recovered:</strong> {country?.recovered}
                  </p>
                  <p>
                    <strong>Active:</strong> {country?.active}
                  </p>
                  <p>
                    <strong>Population:</strong> {country?.population}
                  </p>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      )}
    </>
  );
};

export default CountrySpecificDataGraph;
