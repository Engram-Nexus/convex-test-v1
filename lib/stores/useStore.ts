import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AppState {
  // UI State
  isSidebarOpen: boolean;
  toggleSidebar: () => void;

  // User State
  user: { id: string; name: string; email: string } | null;
  setUser: (user: AppState['user']) => void;
  clearUser: () => void;

  // Add more state as needed
}

export const useStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        // UI State
        isSidebarOpen: true,
        toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

        // User State
        user: null,
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
      }),
      {
        name: 'convex-test-v1-storage',
        partialize: (state) => ({ user: state.user }), // Only persist user state
      }
    )
  )
);
