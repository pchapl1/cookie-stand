'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let originalLoad = true


const renderTableHead = ()=> {

    let table = document.querySelector('table')

    let thead = document.createElement('thead')

    let row = document.createElement('tr')

    table.appendChild(thead)

    thead.appendChild(row)

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

        if (i === hours.length -1 ) {
            let totalTh = document.createElement('th')
            totalTh.textContent = "Daily Location Total"
            row.appendChild(totalTh)
        }

    }

}

const renderTableFooter = ((array)=> {

    let table = document.querySelector('table')

    let tfoot = document.createElement('tfoot')

    table.append(tfoot)

    let row = document.createElement('tr')

    tfoot.appendChild(row)

    let grandTotal = 0

    //loop through hours 
    for (let i = 0; i < hours.length; i++) {
        if (i === 0) {
            let locationTd = document.createElement('Td')
            locationTd.textContent = "Total"
            row.appendChild(locationTd)
            console.log(`td: ${locationTd}`)
        }

        let hourlyTotal = 0
        for (let j = 0; j < array.length; j++) {
            hourlyTotal += array[j].hourlyCookies[i]
        }

        // create th
        let td = document.createElement('td')

        // add data to td
        td.textContent = hourlyTotal

        //add to grand total
        grandTotal += hourlyTotal
        // console.log(grandTotal)


        row.appendChild(td)

    }

    // append the total
    let totalTd = document.createElement('td')
    console.log(grandTotal)

    totalTd.textContent = grandTotal
    row.appendChild(totalTd)
})

const dailyGrandTotalCookies = ((array)=> {

    let total = 0

    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
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
    this.getDailyTotal = function(){
        let total = 0
        for (let i = 0; i < this.hourlyCookies.length; i++) {
            total += this.hourlyCookies[i]
        }
        return total
    }

    this.renderTableRow = function(){
        
        this.cookiesPerHour()

        let table = document.querySelector('table')

        let tableBody = document.createElement('tbody')

        table.append(tableBody)

        let row = document.createElement('tr')

        tableBody.append(row)

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

            if (i === this.hourlyCookies.length -1) {
                let totalTd = document.createElement('td')
                totalTd.textContent = this.getDailyTotal()
                row.appendChild(totalTd)
            }



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

// form section

// get the form
let form = document.querySelector('form')

// create handleSubmit function
function handleSubmit(event){
    event.preventDefault()
    let location = event.target.location.value
    let minHourlyCustomers = parseInt(event.target.minHourlyCustomers.value)
    let maxHourlyCustomers = parseInt(event.target.maxHourlyCustomers.value)
    let avgCookiesPerCustomer = parseFloat(event.target.avgCookiesPerCustomer.value)

    // create a new store
    let newStore = new Store(location, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer)

    // add new store to stores array
    stores.push(newStore)

    let footer = document.querySelector('tfoot')

    footer.lastChild.remove()



    originalLoad = false

    let newRow = newStore.renderTableRow()


    renderTableFooter(stores)
    
}

// add event listener
form.addEventListener('submit', handleSubmit)


// call the functions

function renderTable(){

    if (originalLoad) {
        console.log('original load')
        renderTableHead()
    }
    for (const store of stores) {
        store.renderTableRow()
    }
    renderTableFooter(stores)
}


if (originalLoad) {
    renderTable()
}

