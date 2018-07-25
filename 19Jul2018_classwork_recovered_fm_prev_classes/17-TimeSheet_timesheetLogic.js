/* global firebase moment */
// Steps to complete:

// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyBQA1RFr2RBUyCOLbpl9dfV51J8kpRH8zI",
  authDomain: "ejohnsonstartingproject.firebaseapp.com",
  databaseURL: "https://ejohnsonstartingproject.firebaseio.com",
  projectId: "ejohnsonstartingproject",
  storageBucket: "ejohnsonstartingproject.appspot.com",
  messagingSenderId: "1087153459167"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // 2. Create button for adding new employees - then update the html + update the database
  $("#add-employee-btn").on("click", function(){
    event.preventDefault();
    // $("#employee-table").append("<tr><br>"+
    // "<td>"+$("#employee-name-input").val()+"</td><br>"+
    // "<td>"+$("#role-input").val()+"</td><br>"+
    // "<td>"+$("#start-input").val()+"</td><br>"+
    // "<td>"+0+"</td><br>"+
    // "<td>"+$("#rate-input").val()+"<td><br>"+
    // "<td>"+0+"</td>")
  
    database.ref().push({
      employeeName: $("#employee-name-input").val().trim() ,
      employeeRole: $("#role-input").val().trim(),
      employeeStart: $("#start-input").val().trim(),
      employeeRate: $("#rate-input").val().trim(),
    });
  
  });
  
  // 3. Create a way to retrieve employees from the employee database.
  database.ref().on("child_added", function(snapshot){
    event.preventDefault();
    
      let currentDate = moment().format('DD/MM/YY');
      let startDate = moment().format(snapshot.val().employeeStart);
      let diffDate = moment(startDate).fromNow("MM");
      console.log(currentDate, startDate, diffDate);  
  
    $("#employee-table").append("<tr><br>"+
    "<td>"+snapshot.val().employeeName+"</td><br>"+
    "<td>"+snapshot.val().employeeRole+"</td><br>"+
    "<td>"+snapshot.val().employeeStart+"</td><br>"+
    "<td>"+startDate+"</td><br>"+
    "<td>"+snapshot.val().employeeRate+"<td><br>"+
    "<td>"+0+"</td>")
  });
  // 4. Create a way to calculate the months worked. Using difference between start and current time.
  //    Then use moment.js formatting to set difference in months.
  // 5. Calculate Total billed
  
  // 1. Initialize Firebase
  
  
  // 2. Button for adding Employees
  
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  
  
  // Example Time Math
  // -----------------------------------------------------------------------------
  // Assume Employee start date of January 1, 2015
  // Assume current date is March 1, 2016
  
  // We know that this is 15 months.
  // Now we will create code in moment.js to confirm that any attempt we use meets this test case

  