'use strict';

// Create seattle object

let seattleStore = {
    location: 'Seattle',
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    avgCookiesPerCustomer: 6.3,
    hourlyCookies: {},
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 
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

// Create seattle object

let tokyoStore = {
    location: 'Tokyo',
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookiesPerCustomer: 1.2,
    hourlyCookies: {},
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 
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
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 
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
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 
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


let limaStore = {
    location: 'Lima',
    minHourlyCustomers:2,
    maxHourlyCustomers: 16,
    avgCookiesPerCustomer: 4.6,
    hourlyCookies: {},
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 
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







let storeList = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore]

for (let i = 0; i < storeList.length; i++) {

    // get the location of the current of object
    let store = storeList[i].location.toLowerCase()

    // get the section of the html
    let element = document.getElementById(`${store}-section`)

    // append the store and its cookie info
    storeList[i].renderList(element)

    
}



