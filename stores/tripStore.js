//Libraries
import { makeAutoObservable } from "mobx";

//Stores
import instance from "./instance";

class TripStore {
  trips = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.error("Tripstore -> fetchTrips -> error", error);
    }
  };

  createTrip = async (newTrip) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      const response = await instance.post("/trips", formData);
      this.trips.push(response.data);
    } catch (error) {
      console.error("Tripstore -> createTrip -> error", error);
    }
  };

  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
