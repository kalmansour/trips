//Libraries
import { makeAutoObservable } from "mobx";

//Stores
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

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

  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);

  deleteTrip = async (tripId) => {
    console.log(instance.defaults.headers.common.Authorization);
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip.id !== tripId);
    } catch (error) {
      console.error("TripStore -> deleteTrip -> error", error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
