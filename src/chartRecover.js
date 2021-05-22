import React from 'react';
import {Line} from 'react-chartjs-2';



class ChartsxRecovered extends React.Component {

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
                        fill: true,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(98, 201, 158,0.7)',
                        borderColor: 'rgb(98, 201, 158)',
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
      <div className="  mt-2">
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
export default ChartsxRecovered