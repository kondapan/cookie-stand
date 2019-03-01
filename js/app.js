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
  firstStoreList.appendChild(firstLiC);
}

var firstLiTotals = document.createElement('li');
firstLiTotals.textContent = `Total: ${firstandPike.dayTotals}`;
firstStoreList.appendChild(firstLiTotals);

var seaTacAirport = {
  storeName: 'SeaTac Airport'
  ,minCustomersPerHour: 3
  ,maxCustomersPerHour: 24
  ,avgCookiesPerCustomer: 1.2
  ,randomNum: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour;
  }
  ,avgCustomersPerHour: []
  ,cookiesPerHour: []
  ,dayTotals: 0
};

var seaTacAirportList = document.getElementById('seaTacAirport');

for(var sa=0; sa<hours.length; sa++){
  seaTacAirport.avgCustomersPerHour[sa] = seaTacAirport.randomNum();
  seaTacAirport.cookiesPerHour[sa] = Math.floor(seaTacAirport.avgCookiesPerCustomer * seaTacAirport.avgCustomersPerHour[sa]);
  seaTacAirport.dayTotals = seaTacAirport.dayTotals + seaTacAirport.cookiesPerHour[sa];
  var secondLiC = document.createElement('li');
  secondLiC.textContent = `${hours[sa]}: ${seaTacAirport.cookiesPerHour[sa]} cookies`;
  seaTacAirportList.appendChild(secondLiC);
}

var secondLiCTotals = document.createElement('li');
secondLiCTotals.textContent = `Total: ${seaTacAirport.dayTotals}`;
seaTacAirportList.appendChild(secondLiCTotals);

