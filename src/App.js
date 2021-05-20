
import Chartx_deaths from './chartDeaths';
import Chartsx_Recovered from './chartRecover';
import Chartsx_Confirmed from './charts';
import Data from './Main';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <br></br>
     <br></br>
     <div className="container-fluid">
     
       <div className="container"><Data />
       <h2 className="h2 text-iosred p-3 m-2 ">Confirmed</h2>
       <Chartsx_Confirmed />
       <h2 className="h2 text-iossuccess p-3 m-2">Recoveries</h2>
       <Chartsx_Recovered />
       <h2 className="h2  p-3 m-2">Deaths</h2>
       <Chartx_deaths />
       </div>
       
     
     </div>
      
    </div>
  );
}

export default App;
