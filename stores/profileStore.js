//Libraries
import { makeAutoObservable } from "mobx";

//Stores
import instance from "./instance";

class ProfileStore {
  userProfile = null;
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
      await instance.put("/profiles", formData);
      await this.fetchProfiles();
      // const profile = this.userProfile;
      // for (const key in profile) profile[key] = updatedProfile[key];
      // profile.image = URL.createObjectURL(formData.image);
    } catch (error) {
      console.error("ProfileStore -> updateProfile -> error", error);
    }
  };
}

const profileStore = new ProfileStore();
profileStore.fetchProfiles();

export default profileStore;
