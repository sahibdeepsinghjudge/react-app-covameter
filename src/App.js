
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
      <p>Developed by: jwd</p>
    </div>
     
     </div>
      
  
  );
}

export default App;
