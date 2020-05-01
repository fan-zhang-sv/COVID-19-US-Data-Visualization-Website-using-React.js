# COVID-19-US-Data-Visualization-Website-using-React.js

The full project demo is avaliable at https://covid-19.fanzhang.pro.

## UI framework

React.js library and Material-UI used.

## Data preprocessing

The data include county-wise confirmed and death cases number. ~~The weight of each datapoint in the heat map is logrithmed number of the original accumulated confirmed cases due to the high confirmed cases number in New York State. And I believe, after the number reaches a certain point, reader should've already raised their highest alarm, thus no need to continue scaling the weight.~~

## Data visualiztion

Due to the high infection number in NY and NJ, the country-wise data visualization based on confirmed cases can not reflect the severeness in other states. I did some data scaling to make on the weight.

Instead of using ~~Math.log(weight)~~, in my latest commit, I changed it using a custom function, where the county-wise data under 30k would be adopted linearly, and those above 30k would be adopted as 30k.(And more than 30k confirmed cases in one county, that's scary!)