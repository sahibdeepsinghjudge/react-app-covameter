
import Data from './Main';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <br></br>
     <br></br>
     
     
       <Data />
       
       <div className="footer container bg-ioslight p-3 mt-3 rounded text-center font-bold-sm">
      Api by <a href="https://www.covid19india.org/">https://www.covid19india.org/</a> 
      <br></br>
      <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40sahibdeep_jwd/Cova-Meter-6a7d0a99fc694ccf9357e429b3aeff93-signed.apk"><button className="btn btn-dark">Download app</button></a>
      <p>Developed by: jwd</p>
    </div>
     
     </div>
      
  
  );
}

export default App;
