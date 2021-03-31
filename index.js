// Your code here
function createEmployeeRecord([string, stringTwo,stringThree, num]) {
    const employee = {
        firstName: string, familyName: stringTwo, title: stringThree, payPerHour: num,
        timeInEvents:[] , timeOutEvents:[]
    }
    return employee
    
}

function createEmployeeRecords(arrayOne) {
    arrayOne.forEach(data =>{
        createEmployeeRecord(data)
   })
   return arrayOne
}
    
    