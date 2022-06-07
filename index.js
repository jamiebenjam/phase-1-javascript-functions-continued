// code your solution here
function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

saturdayFun();

function mondayWork(mondayActivity = "go to the office") {
    return(`This Monday, I will ${mondayActivity}.`);
};

const fn = mondayWork()

fn();

function wrapAdjective(symbol = "*") {
    return function nameAdjective(adjective = "special") {
        return(`You are ${symbol}${adjective}${symbol}!`)
    };
    
}

wrapAdjective("%")("a dedicated programmer");