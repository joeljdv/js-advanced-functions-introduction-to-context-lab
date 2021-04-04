// Your code here
function createEmployeeRecord([string, stringTwo,stringThree, num]) {
    const employee = {
        firstName: string, familyName: stringTwo, title: stringThree, payPerHour: num,
        timeInEvents:[] , timeOutEvents:[]
    }
    return employee
    
}

function createEmployeeRecords(arrayOne) {
    return arrayOne.map(data =>{
        return createEmployeeRecord(data)
   })
}
 
function createTimeInEvent(object,dateStamp) {
    let splitdateStamp = dateStamp.split(" ")
    let hour = splitdateStamp[1];
    let date = splitdateStamp[0]
    object.timeInEvents.push({
        type:"TimeIn",
        hour: parseInt(hour,10),
        date: date
    })
    return object
}
    
function createTimeOutEvent(object,dateStamp) {
    let splitdateStamp = dateStamp.split(" ")
    let hour = splitdateStamp[1], date = splitdateStamp[0];
    object.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour,10),
        date: date
    })
    return object
}

function hoursWorkedOnDate(record, date){
    const timeInArray = record.timeInEvents
    const findDate = timeInArray.find(element => element.date === date)
    const timeOutArray = record.timeOutEvents
    const findOutDate = timeOutArray.find(element => element.date === date)
   
    return parseInt((findOutDate.hour - findDate.hour) / 100, 10)
}

function wagesEarnedOnDate(record,date) {
    const payByHour = record.payPerHour
    return parseInt(hoursWorkedOnDate(record,date) * payByHour)

}

function allWagesFor(record) {
    const firstDate = record.timeInEvents[0].date
    const seconDate = record.timeInEvents[1].date
    const date1 = wagesEarnedOnDate(record,firstDate)
    const date2 = wagesEarnedOnDate(record,seconDate)

    
    return date1 + date2
}

function findEmployeeByFirstName(array, firstName) {
    for (const element of array){
        if(element.firstName === firstName){
            return element
        }
    }
}
function calculatePayroll(record) {
    const sDate = [record[0].timeInEvents[0].date, record[0].timeInEvents[1].date]
    const rDate = [record[1].timeInEvents[0].date, record[1].timeInEvents[1].date]
    const sPay = sDate.map(date => wagesEarnedOnDate(record,date))
    const rPay = rDate.map(date => wagesEarnedOnDate(record,date))
    console.log(spay)
    
}