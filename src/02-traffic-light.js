/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
    if (color.toLowerCase() === "green") {
      return  "GO"
    }
    if (color.toLowerCase() === "yellow") {
      return  "SLOW DOWN"
    }
    if (color.toLowerCase() === "red") {
      return "STOP"
    }
    if (color.toLowerCase() === "flashing red") {
      return  "STOP AND PROCEED WITH CAUTION"
    }
    const validSignal = ["green","yellow","red","flashing red"]
    if ( color.toLowerCase() !== validSignal  ) {
      return  "INVALID SIGNAL"
    }
    
}
