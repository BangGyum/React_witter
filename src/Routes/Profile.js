import React from "react";
import { authService } from "fbInstance"
import { useNavigate  } from "react-router-dom";

const profile = () => {
    const navigate = useNavigate();
    const onClickLogOut = () => {
        authService.signOut();
        
        navigate(-1); 
    }
    
    return (
        <>
            <button onClick={onClickLogOut}>Log out</button>
        </>
    );
}
export default profile;