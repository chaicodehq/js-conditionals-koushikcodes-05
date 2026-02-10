/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  let vehicles = ["car", "motorcycle", "bus"];
  if (hours <= 0 || !vehicles.includes(vehicleType)) {
    return -1;
  }

  if (hours && vehicleType === "car") {
    let time = Math.ceil(hours);
    let carRate;
    if (time > 1) {
      carRate = 5 + (time - 1) * 3;
    } else {
      carRate = 5;
    }

    if (carRate >= 30) {
      carRate = 30;
    }
    return carRate
  }
  
  if (hours && vehicleType === "motorcycle") {
    let time = Math.ceil(hours);
    let mcRate;
    if (time > 1) {
      mcRate = 3 + (time - 1) * 2;
    } else {
      mcRate = 3;
    }

    if (mcRate >= 18) {
      mcRate = 18;
    }
    return mcRate
  }

  if (hours && vehicleType === "bus") {
    let time = Math.ceil(hours);
    let busRate;
    if (time > 1) {
      busRate = 10 + (time - 1) * 7;
    } else {
      busRate = 10;
    }

    if (busRate >= 60) {
      busRate = 60;
    }
    return busRate
  }
}
