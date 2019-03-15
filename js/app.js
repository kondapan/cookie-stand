'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var storesInfo = [];
var rowData = [];

function Store(storeName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
  this.storeName = storeName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHourData = [];
  this.dayTotals = 0;
}

Store.prototype.avgCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour;
};

Store.prototype.cookiesPerHour = function(avgCustomersPerHour) {
  return Math.floor(this.avgCookiesPerCustomer * avgCustomersPerHour);
};

Store.prototype.calculateData = function () {
  for (var i = 0; i < hours.length; i++) {
    this.cookiesPerHourData[i] = this.cookiesPerHour(this.avgCustomersPerHour());
    this.dayTotals = this.dayTotals + this.cookiesPerHourData[i];
  }
};

var firstStore = new Store('1st and Pike', 23, 65, 6.3);
var secondStore = new Store('SeaTac Airport', 3, 24, 1.2);
var thirdStore = new Store('Seattle Center', 11, 38, 3.7);
var fourthStore = new Store('Capitol Hill', 20, 38, 2.3);
var fifthStore = new Store('Alki', 2, 16, 4.3);


storesInfo.push(firstStore);
storesInfo.push(secondStore);
storesInfo.push(thirdStore);
storesInfo.push(fourthStore);
storesInfo.push(fifthStore);


function generateStoresData(storesInfo){
  for(var s=0; s<storesInfo.length; s++){
    storesInfo[s].calculateData();
  }
}

function makeRow(storesInfo, rowData){
  for(var t=0; t<storesInfo.length; t++){
    var storesCookies = storesInfo[t].cookiesPerHourData;
    var rowValue = '<td>' + storesInfo[t].storeName + '</td>';
    for(var sc=0; sc<storesCookies.length; sc++){
      rowValue = rowValue + '<td>' + storesCookies[sc] + '</td>';
    }
    rowValue = rowValue + '<td>' + storesInfo[t].dayTotals + '</td>';
    rowData.push(rowValue);
  }
}

function renderData(rowData, tableBody){
  for(var t=0; t<rowData.length; t++){
    var newRow = document.createElement('tr');
    newRow.innerHTML = rowData[t];
    tableBody.appendChild(newRow);
  }
}

function createHeader(hours, tableHeader){
  var storeName = document.createElement('td');
  storeName.innerHTML = 'Store Name';
  tableHeader.appendChild(storeName);
  for(var i=0; i<hours.length; i++){
    var storeTime = document.createElement('td');
    storeTime.innerHTML = hours[i];
    tableHeader.appendChild(storeTime);
  }
  var storeDailyTotals = document.createElement('td');
  storeDailyTotals.innerHTML = 'Total';
  tableHeader.appendChild(storeDailyTotals);
}

var tableHeader = document.getElementById('store_hours');
var tableBody = document.getElementById('store_data');

createHeader(hours, tableHeader);
generateStoresData(storesInfo);
makeRow(storesInfo, rowData);
renderData(rowData, tableBody);
