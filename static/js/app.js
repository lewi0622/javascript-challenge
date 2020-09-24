// helps correct strrange character sequences in text
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};

// build table for each data
function buildTable(filteredData){
    // select the body of the table
    var tbody = d3.select("tbody");
    
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

// select button
var button = d3.select("#filter-btn");

// event handler for button
button.on("click", runEnter);

function runEnter(){

};
