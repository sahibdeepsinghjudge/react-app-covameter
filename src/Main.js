import React from "react";
import "./table.css"
class Data extends React.Component {
    constructor(props) {
      super(props);
      this.state = {'active':0,'total':0,'recoveries':0,'deaths':0,'newActiveCases':0,'newDeaths':0,'newRecoveries':0,'newTotalCases':0,'items':[],'s_items':[],'last_update':"-- -- --/--/--"};
      fetch(
        "https://api.covid19india.org/data.json"
        ).then((resp) => resp.json().then((x) =>{
            var datasets = x['cases_time_series']
            var state_datasets = x['statewise']
            var data = state_datasets[0]       
            this.setState({'active':data.active,'deaths':data.deaths,'recoveries':data.recovered,'total':data.confirmed,'newDeaths':data.deltadeaths,'newRecoveries':data.deltarecovered,'newTotalCases':data.deltaconfirmed,'last_update':data.lastupdatedtime})
            datasets = datasets.reverse()
               this.setState({'items':datasets.map((datax,key) => (
                   
                <tr >
                <td className=" text-iosdark font-bold-sm" id={key}>{datax.date}</td>
                <td className=" text-iosred font-bold-sm" id={key}>{datax.totalconfirmed}</td>
                <td className=" text-iosdark font-bold-sm" id={key}>{datax.totaldeceased}</td>
                <td className=" text-iossuccess font-bold-sm" id={key}>{datax.totalrecovered}</td>
                </tr>
                
            ))})
            this.setState({'s_items':state_datasets.map((datas,key) => (
             <tr>
             <td className=" text-iosdark font-bold-sm" id={key}>{datas.state}</td>
             <td className=" text-iosred font-bold-sm" id={key}>{datas.confirmed}</td>
             <td className=" text-iossuccess font-bold-sm" id={key}>{datas.recovered}</td>
             <td className=" text-iosdark font-bold-sm" id={key}>{datas.deaths}</td>
  
             <td className=" text-iosprimary font-bold-sm" id={key}>{datas.active}</td>
             </tr>
         ))})
            
        }));
        
    }
   
    render() {
      return (
        
        <div className="container mt-4">
          <div className="row">
          
          <div className="col-lg-6">
              <br></br>
        <div className="container">
          
              <table className="table1 table ">
                   <tr>
                       <td className=" text-iosred font-bold">Confirmed</td>
                       <td className="text-iosprimary font-bold">Active</td>
                       <td className="text-iossuccess font-bold">Recovered</td>
                       
                       <td className="text-iosdark font-bold">Deaths</td>
                       
                   </tr>
                   <tr>
                   <td className="  text-iosred font-bold"><p className="mt-2 font-bold-sm">+{this.state.newTotalCases}</p>{this.state.total}</td>
                   <td className="  text-iosprimary font-bold ">{this.state.active}</td>
                   <td className="  text-iossuccess font-bold"><p className="mt-2 font-bold-sm">+{this.state.newRecoveries}</p>{this.state.recoveries}</td>
                   
                   <td className="  text-iosdark font-bold"><p className="mt-2 font-bold-sm">+{this.state.newDeaths}</p>{this.state.deaths}</td>
                   </tr>
               </table>
               <p className="text-iosdark font-bold-sm ">data updated at {this.state.last_update}</p>
               </div>
               <hr className="hr" ></hr>
               <h2 className="h2 text-iosprimary mt-3  font-bold">India</h2>
               <div className="conatiner-fluid ">
              <table className="table tablex">
                   <tr>
                       <th className=" font-bold">Date</th>
                       <th className=" text-iosred font-bold">Confirmed</th>
                       <th className=" text-iosdark font-bold">Deaths</th>
                       <th className=" text-iossuccess font-bold">Recoverd</th>
                       
                   </tr>
                   {this.state.items.slice(0,20)}
               </table> 
               </div>
               <br></br>
               <hr className="hr" ></hr>
               </div>
               
               
          <div className="col-lg-6">
          <h2 className="h2 text-iosred  font-bold">States</h2>
          
            <div className="container-fluid tablex2 ">
          <table className="table tablex ">
                   <tr>
                       <th className=" text-iosdark font-bold">Name</th>
                       <th className=" text-iosred font-bold">Confirmed</th>
                       <th className=" text-iossuccess font-bold">Recoverd</th>
                       <th className=" text-iosdark font-bold">Deaths</th>
                       <th className=" text-iosprimary font-bold">Active</th>
                   </tr>
                   {this.state.s_items.slice(1,31)}
                   {this.state.s_items.slice(32)}
               </table>  
          </div>
          </div>
          </div>
          </div>
      );
    }
  }



export default Data
