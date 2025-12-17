import { useAuth } from "../context/AuthContex";


export const useRequireAuth = () => {
  const { user } = useAuth();

  return {
    isAuthenticated: !!user,
    guard: (fn: () => void) => {
      if (!user) {
        window.dispatchEvent(new CustomEvent("open-auth-modal"));
        return;
      }
      fn();
    },
  };
};
