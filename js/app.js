'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstandPike = {
  storeName: '1st and Pike'
  ,minCustomersPerHour: 23
  ,maxCustomersPerHour: 65
  ,avgCookiesPerCustomer: 6.3
  ,randomNum: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour;
  }
  ,avgCustomersPerHour: []
  ,cookiesPerHour: []
  ,dayTotals: 0
};

var firstStoreList = document.getElementById('firstandpike');

for(var i=0; i<hours.length; i++){
  firstandPike.avgCustomersPerHour[i] = firstandPike.randomNum();
  firstandPike.cookiesPerHour[i] = Math.floor(firstandPike.avgCookiesPerCustomer * firstandPike.avgCustomersPerHour[i]);
  firstandPike.dayTotals = firstandPike.dayTotals + firstandPike.cookiesPerHour[i];
  var firstLiC = document.createElement('li');
  firstLiC.textContent = `${hours[i]}: ${firstandPike.cookiesPerHour[i]} cookies`;
  // 3. Append the new element to its parent in the DOM
  firstStoreList.appendChild(firstLiC);
}

var firstLiTotals = document.createElement('li');
firstLiTotals.textContent = `Total: ${firstandPike.dayTotals}`;
firstStoreList.appendChild(firstLiTotals);

