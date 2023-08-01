function distanceFromHqInBlocks(distance) {
    let blocks = 42;
        if ( distance > 42) {
            return distance - blocks
        } else {
            return blocks - distance;
        }
}

function distanceFromHqInFeet(feet) {
    if (feet > 42) {
        return ((feet - 42) * 264)
    } else {
        return ((42 - feet) * 264) 
    }
}

function distanceTravelledInFeet(start, end) {

    let distanceTravelled = Math.abs(start - end) * 264

    return distanceTravelled
}

function calculatesFarePrice(start, destination) {

    let fare = 0
    let distance = Math.abs(start - destination) * 264

    if (distance <= 400) {
        fare = 0
    } else if (distance > 400 && distance <= 2000) {
        fare = (distance - 400) * .02
    } else if (distance > 2000 && distance < 2500) {
        fare = 25
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }
        
    return(fare)
}
