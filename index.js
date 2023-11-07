// Code your solution in this file!
function distanceFromHqInBlocks(someBlocks) {
    if(someBlocks <= 42) {
        return(42 - someBlocks)
    } else {
        return(someBlocks - 42)
    }
}
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264
}
function distanceTravelledInFeet(start, destination) {
    if(start >= destination) {
        return(start - destination)*264
    } else {
        return(destination - start)*264
    }
}
function calculatesFarePrice(start, destination) {
    if(destination >= start) {
        const distance = (destination - start)*264
        if(distance <= 400) {
            return(0)
        }
    } if(start <= destination) {
        const travel = (start - destination)*264
        if(travel >= 400) {
        } return(25)
    } else if(start <= destination){
        const total = (destination - start)*264
        if(total <= 2000) {
            return(2.56)
        }
    } else if (start < 2500) {
        return('cannot travel that far')
    }
}

