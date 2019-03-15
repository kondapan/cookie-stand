'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(storeName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
  this.storeName = storeName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
}

Store.prototype.randomNum = function() {
  return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour;
};



var firstandPike = {
  storeName: '1st and Pike'
  ,minCustomersPerHour: 23
  ,maxCustomersPerHour: 65
  ,avgCookiesPerCustomer: 6.3
  ,randomNum: function() {
    
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

var seattleCenter = {
  storeName: 'Seattle Center'
  ,minCustomersPerHour: 11
  ,maxCustomersPerHour: 38
  ,avgCookiesPerCustomer: 3.7
  ,randomNum: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour;
  }
  ,avgCustomersPerHour: []
  ,cookiesPerHour: []
  ,dayTotals: 0
};

var thirdStoreList = document.getElementById('seattleCenter');

for(var sc=0; sc<hours.length; sc++){
  seattleCenter.avgCustomersPerHour[sc] = seattleCenter.randomNum();
  seattleCenter.cookiesPerHour[sc] = Math.floor(seattleCenter.avgCookiesPerCustomer * seattleCenter.avgCustomersPerHour[sc]);
  seattleCenter.dayTotals = seattleCenter.dayTotals + seattleCenter.cookiesPerHour[sc];
  var thirdLiC = document.createElement('li');
  thirdLiC.textContent = `${hours[sc]}: ${seattleCenter.cookiesPerHour[sc]} cookies`;
  thirdStoreList.appendChild(thirdLiC);
}

var thirdLiTotals = document.createElement('li');
thirdLiTotals.textContent = `Total: ${seattleCenter.dayTotals}`;
thirdStoreList.appendChild(thirdLiTotals);

var capitalHill = {
  storeName: 'Capitol Hill'
  ,minCustomersPerHour: 20
  ,maxCustomersPerHour: 38
  ,avgCookiesPerCustomer: 2.3
  ,randomNum: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour;
  }
  ,avgCustomersPerHour: []
  ,cookiesPerHour: []
  ,dayTotals: 0
};

var fourthStoreList = document.getElementById('capitalHill');

for(var ch=0; ch<hours.length; ch++){
  capitalHill.avgCustomersPerHour[ch] = capitalHill.randomNum();
  capitalHill.cookiesPerHour[ch] = Math.floor(capitalHill.avgCookiesPerCustomer * capitalHill.avgCustomersPerHour[ch]);
  capitalHill.dayTotals = capitalHill.dayTotals + capitalHill.cookiesPerHour[ch];
  var fourthLiC = document.createElement('li');
  fourthLiC.textContent = `${hours[ch]}: ${capitalHill.cookiesPerHour[ch]} cookies`;
  fourthStoreList.appendChild(fourthLiC);
}

var fourthLiTotals = document.createElement('li');
fourthLiTotals.textContent = `Total: ${capitalHill.dayTotals}`;
fourthStoreList.appendChild(fourthLiTotals);

var alki = {
  storeName: 'Alki'
  ,minCustomersPerHour: 2
  ,maxCustomersPerHour: 16
  ,avgCookiesPerCustomer: 4.6
  ,randomNum: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour;
  }
  ,avgCustomersPerHour: []
  ,cookiesPerHour: []
  ,dayTotals: 0
};

var fifthStoreList = document.getElementById('alki');

for(var a=0; a<hours.length; a++){
  alki.avgCustomersPerHour[a] = alki.randomNum();
  alki.cookiesPerHour[a] = Math.floor(alki.avgCookiesPerCustomer * alki.avgCustomersPerHour[a]);
  alki.dayTotals = alki.dayTotals + alki.cookiesPerHour[a];
  var fifthLiC = document.createElement('li');
  fifthLiC.textContent = `${hours[a]}: ${alki.cookiesPerHour[a]} cookies`;
  fifthStoreList.appendChild(fifthLiC);
}

var fifthLiTotals = document.createElement('li');
fifthLiTotals.textContent = `Total: ${alki.dayTotals}`;
fifthStoreList.appendChild(fifthLiTotals);
