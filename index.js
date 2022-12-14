// code your solution here
const mondayWork = function (task = `go to the office`) {

    return `This Monday, I will ${task}.`
}

const saturdayFun = function (activity = 'roller-skate') {

    return `This Saturday, I want to ${activity}!`
}

function wrapAdjective(symbol = "*"){
   return function (adjective) {
    return `You are ` + `${symbol}` + `${adjective}` + `${symbol}`+ `!`}
}
wrapAdjective()