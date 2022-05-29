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
// FILTER BUTTON SET-UP
//-----------------------

// Define a filter function
function filterClick() {
    d3.event.preventDefault(); // This prevents the page from reloading
    tbody.html(""); // empty the <tbody> element so it can load in new data defined below

    // Select the search box using its ID
    var searchBox = d3.select("#datetime"); 

    // assign the inputted search date to a variable
    var searchValue = searchBox.property("value");

    // create a variable to store the table data where the datetime value matches the searched date value
    var filteredData = tableData.filter(tableData => tableData.datetime === searchValue);

    // Call the buildTable function
    buildTable(filteredData);
};

// select the filter button based on its ID
var button = d3.select("#filter-btn");
button.on("click", filterClick);
