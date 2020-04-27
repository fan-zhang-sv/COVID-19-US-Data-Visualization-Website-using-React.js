# COVID-19-US-Data-Visualization-Website-using-React.js

The full project demo is avaliable at https://covid-19.fanzhang.pro.

## UI framework

React.js library and Material-UI used.

## Data preprocessing

The data include county-wise confirmed and death cases number. The weight of each datapoint in the heat map is logrithmed number of the original accumulated confirmed cases due to the high confirmed cases number in New York State. And I believe, after the number reaches a certain point, reader should've already raised their highest alarm, thus no need to continue scaling the weight. Be alarmed and be safe, fella! 

