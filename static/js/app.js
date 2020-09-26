// helps correct strrange character sequences in text
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};

// build table for each data
function buildTable(filteredData){
    // select the body of the table and clear it's children
    var tbody = d3.select("tbody").html("");
    
    // loop through each object
    filteredData.forEach((sighting) => {
        // create a new row
        var row = tbody.append("tr");

        // loop through each object entry
        Object.entries(sighting).forEach(([key, value]) => {

            // create new row, clean up text
            var cell = row.append("td");
            cell.text(decodeHtml(value));
        });
    });
};

// from data.js
var tableData = data;

// default table
buildTable(tableData);

// select button and form
var button = d3.select("#filter-btn");
var form = d3.select("#form")

// event handler for button and form
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    // keep the page from refreshing
    d3.event.preventDefault();

    // select date input element
    var dateFilter = d3.select("#datetime");

    // Get the value property of the input element
    var dateValue = dateFilter.property("value");

    // filter by date value
    buildTable(tableData.filter((entry) => {
        return dateValue === entry.datetime;
    }));
};
