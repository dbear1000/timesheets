var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope, $http){
  var vm = this;
  this.calculateWeeksBetween = function (date1, date2) {
    // The number of milliseconds in one week
    var ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);
    // Convert back to weeks and return hole weeks
    return difference_ms / ONE_WEEK;
  }
  this.formatDate = function (date){
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() - 1),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('-');
  }
  //vm.startDate = "3, 10, 2017";
  this.dates = [];
  this.timesheets = {
    "candidate": {
      "name": "",
      "jobTitle": ""
    },
    "clientName": "",
    "startDate": "",
    "endDate": "",
    "type": ""
  }

  this.json = "Hello";
  this.fruits = ['Apples', 'Bananas', 'Grapes'];
  this.alertMe = function(){
    alert(JSON.stringify(vm.names))
  }
  $http.get("customers.php")
    .then(function (data) {
      vm.names = data.data;
    });
  this.generate = function(){
    var date1 = new Date(vm.timesheets.startDate);
    var date2 = new Date(vm.timesheets.endDate);
    var a = [];
    var sDate = new Date(vm.timesheets.startDate);
    var eDate = new Date(vm.timesheets.endDate);
    //var result = vm.calculateWeeksBetween(date1, date2);
    while(date1 < date2){
      a.push(date1);
      date1 = new Date(date1.setDate(date1.getDate()+1))
    }
    var result = a;
    //var result = sDate.getDay();
    vm.dates = result;
    //this.example = vm.formatDate(result[0]) +" "+ vm.formatDate(result[0 + (6 - date1.getDay())]) + " " + vm.formatDate(result[0 + (6 - date1.getDay()) + 1]) + " " + vm.formatDate(result[0 + (6 - date1.getDay()) + 7]);
  }
  this.onprint = function () {
      window.print();
  }

})
