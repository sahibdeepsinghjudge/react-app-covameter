import React from 'react';
import {Line} from 'react-chartjs-2';



class ChartsxConfirmed extends React.Component {

    constructor(props){
        super(props)
        this.state = {'labels':[],'confirmed':[],'chartdata':{}}
        fetch(
            "https://api.covid19india.org/data.json"
            ).then((resp) => resp.json().then((x) =>{
                var datasets = x['cases_time_series']
                var jk=[]
                var confr = []
                var i;
                for (i in datasets){
                    jk.push(datasets[i].date)
                    confr.push(datasets[i].totalconfirmed)
                }
                this.setState({'labels':jk,'confirmed':confr})
                console.log(this.state.labels)
                const chartdata = {
                    labels: this.state.labels,
                    datasets: [
                      {
                        label: 'Confirmed',
                        fill: true,
                        
                        borderColor:'rgb(252, 93, 93)',
                        backgroundColor: 'rgba(252, 93, 93,0.7)',
                        gridLines: {
                          display:false,
                        },
                        data: this.state.confirmed
                      }
                    ]
                  }
                  this.setState({'chartdata':chartdata})
            }));
    }
  render() {
    return (
      <div className=" mt-2">
        <Line
          data={this.state.chartdata}
          options={
            {
              borderDash:[1],
            scales: {
             
                y: {
                    display:false
                },
                x: {
                  display:false
              }
            },
          }}
        />
      </div>
    );
  }
}
export default ChartsxConfirmed