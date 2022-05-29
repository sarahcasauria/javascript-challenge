// from data.js
var tableData = data;
console.log(tableData);

// create a variable to select the <tbody> element
var tbody = d3.select("tbody");

function buildTable(tableData) {
// Using a forEach loop, we will be appending data from the data.js into the html file
    tableData.forEach(function(dataRow) {
        // log the data so we know it is grabbing the correct data
        console.log(dataRow);

        // Append <tr> elements to <tbody> element
        var tr = tbody.append("tr");
        // Append Object entry values to <td> elements
        Object.entries(dataRow).forEach(([key, value]) => 
        tr.append("td").text(value));    
    });
};

buildTable(tableData);

//-----------------------
// FILTER BUTTONS SET-UP
//-----------------------

// select the filter button based on its ID
var button = d3.select("#filter-btn");

// When the button is clicked, run a function
button.on("click", function(event){
    d3.event.preventDefault(); // This prevents the page from reloading
    tbody.html(""); // empty the <tbody> element so it can load in new data defined below

    // assign the inputted search texts to variables
    var dateValue = d3.select("#datetime").property("value");
    var cityValue = d3.select("#city").property("value");
    var stateValue = d3.select("#state").property("value");
    var countryValue = d3.select("#country").property("value");
    var shapeValue = d3.select("#shape").property("value");

    // create variables to store the table data where the parameters match the searched value(s)
    if (dateValue) {
        filteredData = tableData.filter(tableData => tableData.datetime === dateValue)
    };
    if (cityValue) {
        filteredData = tableData.filter(tableData => tableData.city === cityValue)
    };
    if (stateValue) {
        filteredData = tableData.filter(tableData => tableData.state === stateValue)
    };
    if (countryValue) {
        filteredData = tableData.filter(tableData => tableData.country === countryValue)
    };
    if (shapeValue) {
        filteredData = tableData.filter(tableData => tableData.shape === shapeValue)
    };

    // for each row of filtered data, append <tr> elements to the <tbody> element and add the filtered data to <td> elements
    filteredData.forEach(function(dateData){
        var tr = tbody.append("tr");
        Object.entries(dateData).forEach(function([key,value]){
        tr.append("td").text(value);
        });
    });
});