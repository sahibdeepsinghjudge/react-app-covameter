import React from "react";

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
               this.setState({'items':datasets.map(datax => (
                <tr>
                <td className="p-4 "><b>{datax.date}</b></td>
                <td className="p-4 text-iosred"><b>{datax.totalconfirmed}</b></td>
                <td className="p-4 text-iosprimary"><b>{datax.totaldeceased}</b></td>
                <td className="p-4 text-iossuccess"><b>{datax.totalrecovered}</b></td>
                </tr>
            ))})
            this.setState({'s_items':state_datasets.map(datas => (
             <tr>
             <td className="p-4 "><b>{datas.state}</b></td>
             <td className="p-4 text-iosred"><b>{datas.confirmed}</b></td>
             <td className="p-4 text-iossuccess"><b>{datas.recovered}</b></td>
             <td className="p-4 "><b>{datas.deaths}</b></td>
             
             <td className="p-4 text-iosprimary"><b>{datas.active}</b></td>
             </tr>
         ))})
            
        }));
        
    }
   
    render() {
      return (
        
        <div className="mt-4 ml-4 ">
          <div className="row">
          
          <div className="col-md-6">
          <h2 className="h2 text-iossuccess  p-2 ">Daily</h2>
          <p className="text-iosgray">{this.state.last_update}</p>
              <table className="p-4  text-center rounded shadow mb-4">
                   <tr>
                       <th className="px-4 py-2 text-iosred">Confirmed</th>
                       <th className="px-4 py-2 text-iosprimary">Active</th>
                       <th className="px-4 py-2 text-iossuccess">Recovered</th>
                       
                       <th className="px-4 py-2 ">Deaths</th>
                       
                   </tr>
                   <tr>
                   <td className="px-3 py-2 text-iosred"><p className="mt-2">+{this.state.newTotalCases}</p><b>{this.state.total}</b></td>
                   <td className="px-3 py-2 text-iosprimary"><b>{this.state.active}</b></td>
                   <td className="px-3 py-2 text-iossuccess"><p className="mt-2">+{this.state.newRecoveries}</p><b>{this.state.recoveries}</b></td>
                   
                   <td className="px-3 py-2 "><p className="mt-2">+{this.state.newDeaths}</p><b>{this.state.deaths}</b></td>
                   </tr>
               </table>
               <h2 className="h2 text-iosred  p-2 ">States</h2>
          <table className="table-responsive  p-4 shadow rounded">
                   <tr>
                       <th className="p-4 ">Name</th>
                       <th className="p-4 text-iosred">Confirmed</th>
                       <th className="p-4 text-iossuccess">Recoverd</th>
                       <th className="p-4 ">Deaths</th>
                       <th className="p-4 text-iosprimary">Active</th>
                   </tr>
                   {this.state.s_items}
               </table>  
               
               </div>
          <div className="col-md-6">
              <h2 className="h2 text-iosprimary  p-2 ">India</h2>
          <table className="table-responsive  p-4 shadow rounded">
                   <tr>
                       <th className="p-4 ">Date</th>
                       <th className="p-4 text-iosred">Confirmed</th>
                       <th className="p-4 text-iossuccess">Recoverd</th>
                       <th className="p-4 text-iosprimary">Deaths</th>
                   </tr>
                   {this.state.items.slice(0,45)}
               </table>       
          </div>
         
          </div>
               
               
           </div>
           
        
        
        
      );
    }
  }



export default Data
