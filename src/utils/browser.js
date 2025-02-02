function error() {
  throw new Error("please provide parameter for method");
}

export const handleChangeTheme = (changedTheme = error()) => {
  if (changedTheme === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
  if (changedTheme === "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
};
