import { create } from "zustand";
import { Biolink } from "@/types";

interface BiolinkPreview {
  biolink?: Biolink;
  updateBiolink: (newBiolink: Biolink) => void;
  setLoading: (loading: boolean) => void;
  loading: boolean;
}

export const useBiolinkPreview = create<BiolinkPreview>((set) => ({
  updateBiolink: (newBiolink) => {
    set((state) => ({ biolink: { ...state.biolink, ...newBiolink } }));
  },
  setLoading: (loading) => set({ loading }),
  loading: true,
}));
