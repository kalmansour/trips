//Libraries
import { makeAutoObservable } from "mobx";

//Stores
import instance from "./instance";

class ProfileStore {
  profiles = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProfiles = async () => {
    try {
      const response = await instance.get("/profiles");
      this.profiles = response.data;
      this.loading = false;
    } catch (error) {
      console.error("Profilestore -> fetchProfiles -> error", error);
    }
  };

  getProfileById = (userId) =>
    this.profiles.find((profile) => profile.userId === userId);

  updateProfile = async (updatedProfile) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);
      await instance.put(`/profiles/${updatedProfile.id}`, updatedProfile);

      const profile = this.profiles.find(
        (profile) => profile.id === updatedProfile.id
      );

      for (const key in profile) profile[key] = updatedProfile[key];
    } catch (error) {
      console.error("ProfileStore -> updateProfile -> error", error);
    }
  };
}

const profileStore = new ProfileStore();
profileStore.fetchProfiles();

export default profileStore;
