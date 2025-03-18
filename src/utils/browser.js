function error() {
  throw new Error("please provide parameter for method");
}

export const handleChangeTheme = (changedTheme = error()) => {
  if (changedTheme === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    setLocalStorageItem("selectedTheme","light")
  }
  if (changedTheme === "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    setLocalStorageItem("selectedTheme","dark")
  }
};


export const setLocalStorageItem =(key,value)=>{
  localStorage.setItem(key,JSON.stringify(value))
}


export const getLocalStorageItem =(key)=>{
  const res = localStorage.getItem(key);
  return res?JSON.parse(res):null
}
