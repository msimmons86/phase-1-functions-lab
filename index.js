// Code your solution in this file!
const hq = 42
const feet = 264

function distanceFromHqInBlocks(pickup) {
  if (pickup > hq) {
    return pickup - hq
    // e.g. pickup = 52, return 52 - 42 = 10
    // pickup = 3, return 3 - 42 = -39
  } else if (pickup < hq) {
    return hq - pickup
    // e.g. pickup = 8, return 42 - 8 = 34
  }
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * feet;
}

function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    let distanceFeet = (destination - start) * feet;
    return distanceFeet;
  } else {
    let distanceFeet2 = (start - destination) * feet;
    return distanceFeet2;
  }
}

function calculatesFarePrice (start, destination) {
 let distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400){
   return 0;
 }
 else if (distance >= 401 && distance <= 2000){
   return (distance - 400) * 0.02
 }
 else if (distance >= 2001 && distance <= 2500) {
   return 25
 }
 else if (distance >= 2501) {
   return `cannot travel that far`;
 } 
}