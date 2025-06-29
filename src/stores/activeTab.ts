import { create } from "zustand";

export interface activeTabState {
    activeTab: string;
    setTab: (newTab: string) => void;
}

export const useActiveTab = create<activeTabState>((set) => ({
    activeTab: "24H",
    setTab: (newTab) => set({activeTab: newTab})
}))