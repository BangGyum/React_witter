import React, { useState } from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Auth from "Routes/Auth";
import Home from "Routes/Home";
import Profile from "Routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIns }) => {
    //const [isLoggedIn, setIsLoggedIn] = useState(false);
    //isLoggedIns && <Navigation />} navigation이 존재하려면, isLoggedIns가 true여야 한다.
    return (
    <Router>
        {<Navigation />} 
        <Routes>
        
            {isLoggedIns ? (
                <>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/profile" element={<Profile/>} />
                </>
                ) : (
                    <>
                    <Route exact path="/" element={<Auth/>} />
                    </>
                    
                )
                
            } 
        </Routes>
    </Router>
    );

}
export default AppRouter;

