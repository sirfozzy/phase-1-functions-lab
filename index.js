const feet = 264;
let beginning;
let distance;
let destination;
let start;

function distanceFromHqInBlocks (destination){
    let start = 42;
    if (destination > start)
    return destination - start;

    return start - destination;
}

function distanceFromHqInFeet(Blocks) {
    let Feet = distanceFromHQInBlocks(Blocks)
    return Feet * 264
}

function distanceTravelledInFeet (sLocation, eLocation) {
    if (sLocation < eLocation)
        return (eLocation - sLocation) * 264;
    else
        return (sLocation - eLocation) * 264
}

function calculatesFarePrice(start, destination) {
    if (destination - start <= 1)
        return (start - destination +1)
    else if (destination - start <= 8)
        return 25
    else
        return ('cannot travel that far')
}