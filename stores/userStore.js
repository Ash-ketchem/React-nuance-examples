import { create } from "react-nuance";

const userStore = create((set) => ({
  user: {
    name: "ash",
    age: 10,
  },
  user2: {
    name: "ash",
    age: 10,
  },
  pet: {
    name: "tommy",
  },
  setUser: (updatedUser) => {
    set((state) => {
      return {
        user: updatedUser,
      };
    });
  },
  setUserName: (name, key) => {
    set((state) => {
      return {
        user: {
          ...state.user,
          name: name,
        },
      };
    }, key);
  },
  setUserName2: (name, key) => {
    set((state) => {
      return {
        user2: {
          ...state.user2,
          name: name,
        },
      };
    }, key);
  },
  setUserAge: (age, key) => {
    set((state) => {
      return {
        user: {
          ...state.user,
          age: age,
        },
      };
    }, key);
  },
  setPetName: (name, key) => {
    set((state) => {
      return {
        pet: {
          ...state.pet,
          name: name,
        },
      };
    }, key);
  },
}));

export default userStore;
