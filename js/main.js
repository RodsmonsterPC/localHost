const signUp = () => {
  localStorage.getItem("token")
    ? window.open("../views/home.html", "_self")
    : window.open("../views/login.html", "_self");
};

signUp();
