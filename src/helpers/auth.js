import Cookies from "js-cookie";

const setCookie = (key, value) => {
  if (window !== undefined) {
    Cookies.set(key, value, {
      expires: 1,
    });
  }
};

// const removeCookie = (key) => {
//   if (window !== undefined) {
//     Cookies.remove(key, {
//       expires: 1,
//     });
//   }
// };

const setLocalStorage = (key, value) => {
  if (window !== undefined) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// const getLocalStorage = (key) => {
//   if (window !== undefined) {
//     localStorage.getItem(key);
//   }
// };

// const removeLocalStorage = (key) => {
//   if (window !== undefined) {
//     localStorage.removeItem(key);
//   }
// };
export const authenticate = (response, next) => {
  setCookie("token", response.user.displayName);
  setLocalStorage("user", response.user);
  next();
};

export const isAuth = () => {
  if (window !== "undefined") {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }
};

export const getCookie = (key) => {
  if (window !== "undefined") {
    Cookies.get(key);
  }
};
