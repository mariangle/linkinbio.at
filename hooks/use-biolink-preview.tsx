import { create } from "zustand";
import { Biolink } from "@/lib/types";

interface BiolinkPreview {
  biolink?: Biolink;
  loading: boolean;
  setBiolink: (newBiolink: Biolink) => void;
  setLoading: (loading: boolean) => void;
}

export const useBiolinkPreview = create<BiolinkPreview>((set) => ({
  loading: true,
  setBiolink: (newBiolink) => {
    set((state) => ({ biolink: { ...state.biolink, ...newBiolink } }));
  },
  setLoading: (loading) => set({ loading }),
}));
