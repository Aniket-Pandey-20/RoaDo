// Define interfaces for pickup, drop, warehouse, and trip points
interface IntermediateTrip {
    pickup: string;
    drop: string;
}

// Function to validate the set of trips
function validateTrips(pickUps: string[],drops: string[],trips:IntermediateTrip[]): boolean {
    for(const trip of trips){
        if((!pickUps.includes(trip.pickup) && !trip.pickup.startsWith('W')) || (!drops.includes(trip.drop) && !trip.drop.startsWith('W'))){
            return false;
        }

        if (trip.drop.startsWith('W')) {
            const matchingTrip = trips.find(trip2 => trip2.pickup === trip.drop && drops.includes(trip2.drop));
            if (!matchingTrip) {
                return false;
            }
        }

        if(trip.pickup.startsWith('W')){
            const matchingTrip = trips.find(trip2 => trip2.drop === trip.pickup);
            if (!matchingTrip) {
                return false;
            }
        }
    }
    return true;
}

// Example usage
const pickUps = ["A","B"];
const drops = ["C","D"];
const trips1: IntermediateTrip[] = [
    { pickup: "A", drop: "W"},
    { pickup: "B", drop: "W"},
    { pickup: "W", drop: "C"},
    { pickup: "W", drop: "D"},
];

const trips2: IntermediateTrip[] = [
    { pickup: "A", drop: "W1"},
    { pickup: "B", drop: "W1"},
    { pickup: "W1", drop: "C"},
];

const trips3: IntermediateTrip[] = [
    { pickup: "A", drop: "W1"},
    { pickup: "B", drop: "W1"},
    { pickup: "W1", drop: "C"},
    { pickup: "W4", drop: "D"},
];

console.log("Trips 1 Validity:", validateTrips(pickUps,drops,trips1)); // Should print true
console.log("Trips 2 Validity:", validateTrips(pickUps,drops,trips2)); // Should print true
console.log("Trips 23Validity:", validateTrips(pickUps,drops,trips3)); // Should print false