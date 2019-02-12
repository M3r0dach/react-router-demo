const initState = {
  pending: false,
  logged: false
};
const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case "pending":
      return {
        pending: true,
        logged: false
      };
    case "login":
      return {
        pending: false,
        logged: true
      };
    case "logout":
      return initState;
    default:
      return state;
  }
};
export default loginReducer;
