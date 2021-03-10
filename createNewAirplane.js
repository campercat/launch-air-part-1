const createNewAirplane = (make, model, capacity) => {
    let airplane = {
        make,
        model,
        capacity,
        flights: [],
        scheduleFlight (flight){
            this.flights.push(flight)
        }
    }
    return airplane
}

export default createNewAirplane