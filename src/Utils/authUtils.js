export const isAuthenticated = () => {
  const access = localStorage.getItem("IS_LOGGED-IN");
  return access === "true";
};