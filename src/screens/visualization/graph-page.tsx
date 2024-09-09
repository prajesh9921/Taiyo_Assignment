import React from 'react';
import WorldWideCasesOfDay from '../../components/graphs/worldwidedata';
import CountrySpecificDataGraph from '../../components/graphs/countryspecificdata';
import HistoricalData from '../../components/graphs/historicaldata';

const GraphPage: React.FC = () => {

  return (
    <div className='p-10 sm:p-1 lg:p-10 w-full max-h-[90vh] overflow-y-scroll'>
      <WorldWideCasesOfDay/>
      <CountrySpecificDataGraph/>      
      <HistoricalData/>
     </div>
  );
}


export default GraphPage;