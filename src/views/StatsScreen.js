
import React from 'react';

import {
    ScrollView,
    Text,
    Button,
} from 'react-native';

import {
    LineChart, 
    BarChart, 
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart} from 'react-native-chart-kit';


const StatsScreen = ({navigation}) =>{

    const rainData ={
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            //   color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            //   strokeWidth: 2 // optional
            }
        ],
        legend :["Rainy Days"]};

    const progressData = {
        labels :["Swim", "Bike", "Run"],
        data: [0.4,0.6,0.8]
    };

    const stackedBarData = {
        labels: ["Test1", "Test2"],
        legend: ["L1", "L2", "L3"],
        data: [
          [60, 60, 60],
          [30, 30, 60]
        ],
        barColors: ["#0D9DAA", "#0D6BAA", "#0D34AA"]
      };


    const populationData = [
        {
          name: "Seoul",
          population: 21500000,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Toronto",
          population: 2800000,
          color: "#488D97",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Beijing",
          population: 527612,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "New York",
          population: 8538000,
          color: "#B563C0",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Moscow",
          population: 11920000,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];


      const commitsData = [
        { date: "2017-01-02", count: 1 },
        { date: "2017-01-03", count: 2 },
        { date: "2017-01-04", count: 3 },
        { date: "2017-01-05", count: 4 },
        { date: "2017-01-06", count: 5 },
        { date: "2017-01-30", count: 2 },
        { date: "2017-01-31", count: 3 },
        { date: "2017-03-01", count: 2 },
        { date: "2017-04-02", count: 4 },
        { date: "2017-03-05", count: 2 },
        { date: "2017-02-30", count: 4 }
      ];

    const chartConfig = {
        backgroundGradientFrom: "#FFFFFF",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#FFFFFF",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(13, 78, 70, ${opacity})`,
        // strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        // useShadowColorFromDataset: false // optional
        };


    return (
        <ScrollView>
        <Text>Simple line chart</Text>
        <LineChart
        data={rainData}
        width={400}
        height={220}
        chartConfig={chartConfig}
        />

        <Text>Bezier line chart</Text>
        <LineChart
                data={rainData}
                width={400}
                height={220}
                chartConfig={{
                    backgroundGradientFrom: "#FFFFFF",
                    backgroundGradientFromOpacity: 1,
                    backgroundGradientTo: "#FFFFFF",
                    backgroundGradientToOpacity: 1,
                    color: (opacity = 1) => `rgba(13, 78, 70, ${opacity})`,
                    // strokeWidth: 2, // optional, default 3
                    barPercentage: 0.5,
                    // useShadowColorFromDataset: false // optional
                }}
                bezier
                />
        <Text>Progress chart</Text>
        <ProgressChart
            data={progressData}
            width={400}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
        />
        <Text>Bar chart</Text>
        <BarChart
            // style={graphStyle}
            data={rainData}
            width={400}
            height={220}
            yAxisLabel="h"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
        />
        <Text>Stackedbar Chart</Text>
        <StackedBarChart
            // style={graphStyle}
            data={stackedBarData}
            width={300}
            height={220}
            chartConfig={chartConfig}
        />
        <Text>Pie chart</Text>
        <PieChart
            data={populationData}
            width={310}
            height={110}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            // center={[10, 50]}
            // absolute
        />
        <Text>Contribution graph</Text>
        <ContributionGraph
            values={commitsData}
            endDate={new Date("2017-04-01")}
            numDays={105}
            width={400}
            height={220}
            chartConfig={chartConfig}
        />
                
        

        </ScrollView>
    );
}


export default StatsScreen;