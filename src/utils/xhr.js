import store from "../store";
const login = () => {
  return new Promise((resolve, reject) => {
    store.dispatch({ type: "pending" });
    setTimeout(() => {
      store.dispatch({ type: "login" });
      resolve();
    }, 1000);
  });
};
const logout = () => {
  store.dispatch({ type: "logout" });
};
export { login, logout };
