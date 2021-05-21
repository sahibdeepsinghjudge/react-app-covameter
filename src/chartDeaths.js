import React from 'react';
import {Line} from 'react-chartjs-2';



class ChartxDeaths extends React.Component {

    constructor(props){
        super(props)
        this.state = {'labels':[],'deaths':[],'chartdata':{}}
        fetch(
            "https://api.covid19india.org/data.json"
            ).then((resp) => resp.json().then((x) =>{
                var datasets = x['cases_time_series']
                var jk=[]
                var confr = []
                var i;
                for (i in datasets){
                    jk.push(datasets[i].date)
                    confr.push(datasets[i].totaldeceased)
                }
                this.setState({'labels':jk,'deaths':confr})
                console.log(this.state.labels)
                const chartdata = {
                    labels: this.state.labels,
                    datasets: [
                      {
                        label: 'Deaths',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgb(70, 70, 70)',
                        borderColor: 'rgb(70, 70, 70)',
                        borderWidth: 4,
                        data: this.state.deaths
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
          options={{
            title:{
              display:true,
              text:'Covid-19 Deaths',
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
export default ChartxDeaths