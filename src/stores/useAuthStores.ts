// import { create } from "zustand";

// interface UseAuthStore {
//   email: string;
//   setEmail: (value: string) => void;
// }

// const useAuthStore = create<UseAuthStore>((set) => ({
//   email: "",
//   setEmail: (value) => set({ email: value }),
// }));

// export default useAuthStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  email: string;
  name: string;
  objectId: string;
}

interface UseAuthStore {
  user: User;
  setUser: (user: User) => void;
}

const useAuthStore = create<UseAuthStore>()(
  persist(
    (set) => ({
      user: {
        email: "",
        name: "",
        objectId: "",
      },
      setUser: (user) => set({ user: user }),
    }),
    {
      name: "user-store",
      partialize: (state) => ({
        user: {
          objectId: state.user.objectId,
        },
      }),
    }
  )
);

export default useAuthStore;
