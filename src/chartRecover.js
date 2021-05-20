import React from 'react';
import {Line} from 'react-chartjs-2';



class Chartsx_Recovered extends React.Component {

    constructor(props){
        super(props)
        this.state = {'labels':[],'recovered':[],'chartdata':{}}
        fetch(
            "https://api.covid19india.org/data.json"
            ).then((resp) => resp.json().then((x) =>{
                var datasets = x['cases_time_series']
                var jk=[]
                var confr = []
                var i;
                for (i in datasets){
                    jk.push(datasets[i].date)
                    confr.push(datasets[i].totalrecovered)
                }
                this.setState({'labels':jk,'recovered':confr})
                console.log(this.state.labels)
                const chartdata = {
                    labels: this.state.labels,
                    datasets: [
                      {
                        label: 'Recovered',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgb(53,199,89)',
                        borderColor: 'rgb(53,199,89)',
                        borderWidth: 4,
                        data: this.state.recovered
                      }
                    ]
                  }
                  this.setState({'chartdata':chartdata})
            }));
    }
  render() {
    return (
      <div className=" p-2 rounded shadow mt-4">
        <Line
          data={this.state.chartdata}
          options={{
            title:{
              display:true,
              text:'Covid-19 Confirmed cases',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
export default Chartsx_Recovered