'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

const renderTableHead = ()=> {

    // get thead row
    let row = document.querySelector('#sales-table-head')

    //loop through hours 
    for (let i = 0; i < hours.length; i++) {
        if (i === 0) {
            let locationTh = document.createElement('th')
            locationTh.textContent = "Location"
            row.appendChild(locationTh)
        }
        // create th
        let th = document.createElement('th')

        // add data to th
        th.textContent = hours[i]

        row.appendChild(th)

    }
}

const renderTableFooter = ((array)=> {


    // get thead row
    let row = document.querySelector('#sales-table-footer')


    //loop through hours 
    for (let i = 0; i < hours.length; i++) {
        if (i === 0) {
            let locationTd = document.createElement('Td')
            locationTd.textContent = "Total"
            row.appendChild(locationTd)
        }

        let hourlyTotal = 0
        for (let j = 0; j < array.length; j++) {
            hourlyTotal += array[j].hourlyCookies[i]
        }

        // create th
        let td = document.createElement('td')

        // add data to td
        td.textContent = hourlyTotal

        row.appendChild(td)

    }
})


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
        for (let i = 0; i < this.hours.length; i++) {
            this.hourlyCookies.push(Math.floor(this.getRandomNumOfCustomers() * this.avgCookiesPerCustomer))
        }
        
    },

    this.renderTableRow = function(){
        
        this.cookiesPerHour()

        let tableBody = document.getElementById('sales-table-body')

        let row = document.createElement('row')


        for (let i = 0; i < this.hourlyCookies.length; i++) {

            if (i === 0) {
                let locationTd = document.createElement('td')
                locationTd.textContent = this.location
                row.appendChild(locationTd)
            }
            // create a td element
            let td = document.createElement('td')


            // add text content to the td
            td.textContent = `${this.hourlyCookies[i]}`

            // append the td to the row
            row.appendChild(td)


            // append the row to the table head
            tableBody.appendChild(row)  



        }

    }
}

let seattle = new Store("Seattle", 23, 65, 6.3)
let tokyo = new Store("Tokyo", 3, 24, 1.2)
let dubai = new Store("Dubai", 11, 38, 3.7)
let lima = new Store("Lima", 2, 16, 4.6)
let paris = new Store("Paris", 20, 38, 2.3)


let stores = [seattle,tokyo,dubai,lima,paris]

for (const store of stores) {
    store.renderTableRow()
}


// call the functions
renderTableHead()
renderTableFooter(stores)



