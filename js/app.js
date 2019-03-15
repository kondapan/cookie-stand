'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var storesInfo = [];
var tableData = [];
var rowData = [];
var header = [];

function Store(storeName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
  this.storeName = storeName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHour = [];
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
    this.cookiesPerHour[i] = Math.floor(this.avgCookiesPerCustomer * this.avgCustomersPerHour());
    this.dayTotals = this.dayTotals + this.cookiesPerHour[i];
  }
};

var firstStore = new Store('1st and Pike', 23, 65, 6.3);

storesInfo.push(firstStore);

function generateStoresData(storesInfo){
  for(var s=0; s<storesInfo.length; s++){
    tableData.push(storesInfo[s].calculateData());
  }
}

function makeRow(tableData){
  for(var t=0; t<tableData.length; t++){
    var perHourData = tableData[t][1];
  }
}

function renderData(tableData){
  for(var t=0; t<tableData.length; t++){

  }
}

var tableHeader = document.getElementById('store_hours');

function createHeader(hours, tableHeader){
  var storeName = document.createElement('td');
  storeName.innerHTML = 'Store Name';
  tableHeader.appendChild(storeName);
  for(var i=0; i<hours.length; i++){
    var storeTime = document.createElement('td');
    storeTime.innerHTML = hours[i];
    tableHeader.appendChild(storeTime);
  }

}

function makeRow(arr) {
  for (var i=0; i < arr.length; i++) {
    data.push(
      '<td>' + arr[i].name + '</td>' +
      '<td>' + arr[i].age + '</td>' +
      '<td>' + arr[i].profession + '</td>'
    )
  }
}

function render(tableRow) {
  for (var j=0; j < tableRow.length; j++) {
    var newRow = document.createElement('tr');
    newRow.innerHTML = tableRow[j];
    table.appendChild(newRow);
  }
}

/* Store.prototype.calculateData = function () {
  for (var i = 0; i < hours.length; i++) {
    this.avgCustomersPerHour[i] = firstandPike.randomNum();
    firstandPike.cookiesPerHour[i] = Math.floor(firstandPike.avgCookiesPerCustomer * firstandPike.avgCustomersPerHour[i]);
    firstandPike.dayTotals = firstandPike.dayTotals + firstandPike.cookiesPerHour[i];
    var firstLiC = document.createElement('li');
    firstLiC.textContent = `${hours[i]}: ${firstandPike.cookiesPerHour[i]} cookies`;
    firstStoreList.appendChild(firstLiC);
  }
};
 */

createHeader(hours, tableHeader);
generateStoresData(storesInfo);

