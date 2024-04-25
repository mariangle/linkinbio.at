import { create } from "zustand";
import { Biolink } from "@/types";

interface BiolinkPreview {
  biolink?: Biolink;
  updateBiolink: (newBiolink: Biolink) => void;
  setBiolink: (biolink: Biolink) => void;
}

export const useBiolinkPreview = create<BiolinkPreview>((set) => ({
  updateBiolink: (newBiolink) => {
    console.log("Updating biolink with: ", newBiolink.config);
    set((state) => ({ biolink: { ...state.biolink, ...newBiolink } }));
  },
  setBiolink: (biolink) => set({ biolink }),
}));
