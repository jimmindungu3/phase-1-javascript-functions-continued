// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("play table tennis");

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(wrapper = `"*"`) {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!` 
    }
}

wrapAdjective("%")("a dedicated programmer!")