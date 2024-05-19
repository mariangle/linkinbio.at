import { create } from "zustand";
import { Biolink } from "@/lib/types";

interface BiolinkPreview {
  biolink?: Biolink;
  loading: boolean;
  open: boolean;
  setBiolink: (newBiolink: Biolink) => void;
  setLoading: (loading: boolean) => void;
  setOpen: (open: boolean) => void;
}

export const useBiolinkPreviewStore = create<BiolinkPreview>((set) => ({
  loading: true,
  open: false,
  setBiolink: (newBiolink) => {
    set((state) => ({ biolink: { ...state.biolink, ...newBiolink } }));
  },
  setLoading: (loading) => set({ loading }),
  setOpen: (open) => set({ open }),
}));
