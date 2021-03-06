
// 1: On Load
// ==========

// The first thing this js file will do: ask the back end for a json with all animals
$.getJSON("/all", function(data) {
  // For each entry of that json...
  for (var i = 0; i < data.length; i++) {
    // Append each of the animal's properties to the table
    $("#results").append("<tr><td>" + data[i].name + "</td>" +
                         "<td>" + data[i].numlegs + "</td>" +
                         "<td>" + data[i].class + "</td>" +
                         "<td>" + data[i].weight + "</td>" +
                         "<td>" + data[i].whatIWouldReallyCallIt + "</td></tr>");
  }
});


// 2: Button Interactions
// ======================

// When user clicks the weight sort button, display table sorted by weight
$("#weightsort").on("click", function() {
  // First, empty the table
  $("#results").empty();
  // Then re-append the header of the table
  $("#results").append("<tr><th>Name</th><th>Num Legs</th><th>Class</th>" +
    "<th id='active'>Weight</th><th>But I'd Call It...</th></tr>");
  // Now do an api call to the back end for a json with all animals, sorted by weight
  $.getJSON("/weight", function(data) {
    // For each entry of that json...
    for (var i = 0; i < data.length; i++) {
      // Append each of the animal's properties to the table
      $("#results").append("<tr><td>" + data[i].name + "</td>" +
                           "<td>" + data[i].numlegs + "</td>" +
                           "<td>" + data[i].class + "</td>" +
                           "<td>" + data[i].weight + "</td>" +
                           "<td>" + data[i].whatIWouldReallyCallIt + "</td></tr>");
    }
  });
});

// When user clicks the name sort button, display the table sorted by name
$("#namesort").on("click", function() {
  // First empty results table
  $("#results").empty();
  // Then re-append the header of the table
  $("#results").append("<tr><th id='active'>Name</th><th>Num Legs</th><th>Class</th>" +
    "<th>Weight</th><th>But I'd Call It...</th></tr>");
  // Now do an api call to the back end for a json with all animals, sorted by name
  $.getJSON("/name", function(data) {
    // For each entry of that json...
    for (var i = 0; i < data.length; i++) {
      // Append each of the animal's properties to the table
      $("#results").append("<tr><td>" + data[i].name + "</td>" +
                           "<td>" + data[i].numlegs + "</td>" +
                           "<td>" + data[i].class + "</td>" +
                           "<td>" + data[i].weight + "</td>" +
                           "<td>" + data[i].whatIWouldReallyCallIt + "</td></tr>");
    }
  });
});
