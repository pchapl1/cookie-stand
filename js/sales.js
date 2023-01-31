'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

const renderTableHead = ()=> {

    // get thead row
    let row = document.querySelector('#table-head-tr')

    //loop through hours 
    for (let i = 0; i < hours.length; i++) {

        // create th
        let th = document.createElement('th')

        // add data to th
        th.textContent = hours[i]

        row.appendChild(th)

        
    }




}


// constructor function
function Store(location, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer){
    this.location = location,
    this.minHourlyCustomers = minHourlyCustomers,
    this.maxHourlyCustomers = maxHourlyCustomers,
    this.avgCookiesPerCustomer = avgCookiesPerCustomer,
    this.hourlyCookies = [],
    this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 
    this.getRandomNumOfCustomers = function(){
        // return a number between 0 and 1000
        return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
    },
    this.cookiesPerHour = function(){
        return Math.floor(this.getRandomNumOfCustomers() * this.avgCookiesPerCustomer)
    },

    this.renderTableRow = function(){
        // get into the dom
        let tableBody = document.getElementById('sales-table-body')


        for (const prop in this.hourlyCookies) {
            // create a row element
            let row = document.createElement('row')

            if (prop === '0') {
                console.log('hello')
                let locationTd = document.createElement('td')
                locationTd.textContent = this.location
                row.appendChild(locationTd)
            }
            // create a td element
            let td = document.createElement('td')

            // add text content to the td
            td.textContent = `${this.hourlyCookies[prop]}`

            // append the td to the row
            row.appendChild(td)

            // append the row to the table head
            tableBody.appendChild(row)  




        }
        
        // for (let i = 0; i < this.hourlyCookies.length; i++) {

        //     console.log(this.hourlyCookies)
        //     // create a row element
        //     let row = document.createElement('row')

        //     // create a td element
        //     let td = document.createElement('td')

        //     // add text content to the td
        //     td.textContent = `${this.hourlyCookies[i]}`

        //     // append the td to the row
        //     row.appendChild(td)

        //     // append the row to the table head
        //     tableBody.appendChild(row)            
            
        // }
    }
}

let seattle = new Store("Seattle", 23, 65, 6.3)
let tokyo = new Store("Tokyo", 23, 65, 6.3)
let dubai = new Store("Dubai", 23, 65, 6.3)
let lima = new Store("Lima", 23, 65, 6.3)
let paris = new Store("Paris", 23, 65, 6.3)


// console.log(seattle)
let stores = [seattle,tokyo,dubai,lima,paris]

for (const store of stores) {
    store.renderTableRow()
}


// call the functions
renderTableHead()













let seattleStore = {
    location: 'Seattle',
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    avgCookiesPerCustomer: 6.3,
    hourlyCookies: {},
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], 
    renderList: function(element){
        // create a ul
        let ul = document.createElement('ul')

        ul.classList.add('sales-data')

        // keep track of total
        let total = 0

        let h3 = document.createElement('h3')

        h3.textContent = `${this.location}`
        element.appendChild(h3)

        for (let i = 0; i < this.hours.length; i++) {
            
            // create an li
            let li = document.createElement('li')

            

            // insert the teimplate literal in the li text content
            li.textContent = `${this.hours[i]}: ${this.cookiesPerHour()} cookies`;

            this.hourlyCookies[this.hours[i] = this.cookiesPerHour()]

            // append the li to the ul
            ul.appendChild(li);

            total += this.cookiesPerHour()

            // at the end of the loop, append the total amount of cookies
            if (i === this.hours.length -1) {
                let li = document.createElement('li')
                li.textContent = `Total: ${total}`
                ul.appendChild(li)
            }
        }

        element.appendChild(ul);
    },
    getRandomNumOfCustomers: function(){
        // return a number between 0 and 1000
        return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
    },
    cookiesPerHour: function(){
        return Math.floor(this.getRandomNumOfCustomers() * this.avgCookiesPerCustomer)
    },

}



let tokyoStore = {
    location: 'Tokyo',
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookiesPerCustomer: 1.2,
    hourlyCookies: {},
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], 
    renderList: function(element){
        // create a ul
        let ul = document.createElement('ul')

        // keep track of total
        let total = 0

        let h3 = document.createElement('h3')

        h3.textContent = `${this.location}`
        element.appendChild(h3)

        for (let i = 0; i < this.hours.length; i++) {
            
            // create an li
            let li = document.createElement('li')

            // insert the teimplate literal in the li text content
            li.textContent = `${this.hours[i]}: ${this.cookiesPerHour()} cookies`;

            this.hourlyCookies[this.hours[i] = this.cookiesPerHour()]

            // append the li to the ul
            ul.appendChild(li);

            total += this.cookiesPerHour()

            // at the end of the loop, append the total amount of cookies
            if (i === this.hours.length -1) {
                let li = document.createElement('li')
                li.textContent = `Total: ${total}`
                ul.appendChild(li)
            }
        }

        element.appendChild(ul);
    },
    getRandomNumOfCustomers: function(){
        // return a number between 0 and 1000
        return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
    },
    cookiesPerHour: function(){
        return Math.floor(this.getRandomNumOfCustomers() * this.avgCookiesPerCustomer)
    },

}



let dubaiStore = {
    location: 'Dubai',
    minHourlyCustomers:11,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 3.7,
    hourlyCookies: {},
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], 
    renderList: function(element){
        // create a ul
        let ul = document.createElement('ul')

        // keep track of total
        let total = 0

        let h3 = document.createElement('h3')

        h3.textContent = `${this.location}`
        element.appendChild(h3)

        for (let i = 0; i < this.hours.length; i++) {
            
            // create an li
            let li = document.createElement('li')

            // insert the teimplate literal in the li text content
            li.textContent = `${this.hours[i]}: ${this.cookiesPerHour()} cookies`;

            this.hourlyCookies[this.hours[i] = this.cookiesPerHour()]

            // append the li to the ul
            ul.appendChild(li);

            total += this.cookiesPerHour()

            // at the end of the loop, append the total amount of cookies
            if (i === this.hours.length -1) {
                let li = document.createElement('li')
                li.textContent = `Total: ${total}`
                ul.appendChild(li)
            }
        }

        element.appendChild(ul);
    },
    getRandomNumOfCustomers: function(){
        // return a number between 0 and 1000
        return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
    },
    cookiesPerHour: function(){
        return Math.floor(this.getRandomNumOfCustomers() * this.avgCookiesPerCustomer)
    },

}

let parisStore = {
    location: 'Paris',
    minHourlyCustomers:20,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 2.3,
    hourlyCookies: {},
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], 
    renderList: function(element){
        // create a ul
        let ul = document.createElement('ul')

        // keep track of total
        let total = 0

        let h3 = document.createElement('h3')

        h3.textContent = `${this.location}`
        element.appendChild(h3)

        for (let i = 0; i < this.hours.length; i++) {
            
            // create an li
            let li = document.createElement('li')

            // insert the teimplate literal in the li text content
            li.textContent = `${this.hours[i]}: ${this.cookiesPerHour()} cookies`;

            // add this to hourly cookies field
            this.hourlyCookies[this.hours[i] = this.cookiesPerHour()]

            // append the li to the ul
            ul.appendChild(li);

            total += this.cookiesPerHour()

            // at the end of the loop, append the total amount of cookies
            if (i === this.hours.length -1) {
                let li = document.createElement('li')
                li.textContent = `Total: ${total}`
                ul.appendChild(li)
            }
        }

        element.appendChild(ul);
    },
    getRandomNumOfCustomers: function(){
        // return a number between 0 and 1000
        return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
    },
    cookiesPerHour: function(){
        return Math.floor(this.getRandomNumOfCustomers() * this.avgCookiesPerCustomer)
    },

}


let limaStore = {
    location: 'Lima',
    minHourlyCustomers:2,
    maxHourlyCustomers: 16,
    avgCookiesPerCustomer: 4.6,
    hourlyCookies: {},
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], 
    renderList: function(element){
        // create a ul
        let ul = document.createElement('ul')

        // keep track of total
        let total = 0

        // create an h3 element
        let h3 = document.createElement('h3')

        // add the objects 
        h3.textContent = `${this.location}`
        element.appendChild(h3)

        for (let i = 0; i < this.hours.length; i++) {
            
            // create an li
            let li = document.createElement('li')

            // insert the teimplate literal in the li text content
            li.textContent = `${this.hours[i]}: ${this.cookiesPerHour()} cookies`;

            this.hourlyCookies[this.hours[i]] = this.cookiesPerHour()

            // append the li to the ul
            ul.appendChild(li);

            total += this.cookiesPerHour()

            // at the end of the loop, append the total amount of cookies
            if (i === this.hours.length -1) {
                let li = document.createElement('li')
                li.textContent = `Total: ${total}`
                ul.appendChild(li)
            }
        }

        element.appendChild(ul);
    },
    getRandomNumOfCustomers: function(){
        // return a number between 0 and 1000
        return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
    },
    cookiesPerHour: function(){
        return Math.floor(this.getRandomNumOfCustomers() * this.avgCookiesPerCustomer)
    },

}


// create the store array
let storeList = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore]

// loop through store list and call renderList method on each object
// for (let i = 0; i < storeList.length; i++) {

//     // get the location of the current of object
//     let store = storeList[i].location.toLowerCase()

//     // get the section of the html
//     let element = document.getElementById(`${store}-section`)

//     // append the store and its cookie info
//     storeList[i].renderList(element)

    
// }

// console.log(limaStore.hourlyCookies)

