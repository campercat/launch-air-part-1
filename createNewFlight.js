const createNewFlight = (date, takeoffTime, landingTime, origin, destination) => {
    let flight = {
        date,
        takeoffTime,
        landingTime,
        origin,
        destination
    }
    return flight
}
export default createNewFlight