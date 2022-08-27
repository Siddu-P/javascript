var names=["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
        var numberOfPersons=names.length;
        var randomPersonPosition=Math.floor(Math.random()*numberOfPersons);
        var randomPerson=names[randomPersonPosition];
        return randomPerson + " is going to buy lunch today!"   
    }