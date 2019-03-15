'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var storesInfo = [];
var tableData = [];
var header = [];

function Store(storeName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
  this.storeName = storeName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
}

Store.prototype.avgCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour;
};

Store.prototype.cookiesPerHour = function(avgCustomersPerHour) {
  return Math.floor(this.avgCookiesPerCustomer * avgCustomersPerHour);
};

var firstStore = new Store('1st and Pike', 23, 65, 6.3);

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
