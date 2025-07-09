let currentUser = localStorage.getItem("user");
let listeners: (() => void)[] = [];

export const authStore = {
  getSnapshot: () => !!currentUser,
  subscribe: (callback: () => void) => {
    listeners.push(callback);
    return () => {
      listeners = listeners.filter((l) => l !== callback);
    };
  },
  login: (user: string) => {
    localStorage.setItem("user", user);
    currentUser = user;
    listeners.forEach((cb) => cb());
  },
  logout: () => {
    localStorage.removeItem("user");
    currentUser = null;
    listeners.forEach((cb) => cb());
  },
};
