import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbInstance"
//https://create-react-app.dev/docs/importing-a-component/
//https://firebase.google.com/docs/reference/js/v8/firebase.User


function App() {
  
  console.log(authService.currentUser);
  //const auth = fbase.auth();
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
  <AppRouter isLoggedIn={isLoggedIn}/>
  <footer>&copy; Bwitter {new Date().getFullYear()}</footer>
  </>
  );
}
export default App;
