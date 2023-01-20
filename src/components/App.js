import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbInstance"
//https://create-react-app.dev/docs/importing-a-component/
//https://firebase.google.com/docs/reference/js/v8/firebase.User
//https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#onauthstatechanged


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);//처음에 무조건 로그아웃으로 시작, 로드하는 시간때문에
  const [init, setInit] = useState(false); //초기화 안된 set
  const [userObj, setUserObj] = useState(null);
  useEffect(()=> { //component가 mount될 때 실행됨, 그리고 변화를 들어야함.
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true); 
        setUserObj(user);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
      console.log(isLoggedIn);
      //console.log(authService.currentUser);
      
      
      });
  }, []);
  console.log(authService.currentUser); 
  //const auth = fbase.auth();
 
  //console.log(authService.currentUser); //이때 null이고
  setInterval(()=> {
    //console.log(authService.currentUser); //이때 확인하면 로그인돼 있음
  }, 2000);
  return (
    <>
  {init ? <AppRouter isLoggedIns={isLoggedIn} userObj={userObj} /> : " Initailizing" }
  <footer>&copy; Bwitter {new Date().getFullYear()}</footer>
  </>
  );
}
export default App;
//git config --global core.autocrlf true