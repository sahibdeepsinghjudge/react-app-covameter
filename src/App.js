import Chartxdeaths from './chartDeaths';
import ChartsxRecovered from './chartRecover';
import ChartsxConfirmed from './charts';
import Data from './Main';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <br></br>
     <br></br>
     
     
       <Data />
       <div className="container">
       <h2 className="h2 text-iosred font-bold p-3 mt-4 ">Confirmed</h2>
       <ChartsxConfirmed />
       <h2 className="h2 text-iossuccess font-bold p-3 mt-4">Recoveries</h2>
       <ChartsxRecovered />
       <h2 className="h2 text-iosdark font-bold p-3 mt-4">Deaths</h2>
       <Chartxdeaths />
       </div>
       
     
     </div>
      
  
  );
}

export default App;
