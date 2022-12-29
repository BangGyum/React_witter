import React,{useState} from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

//https://firebase.google.com/docs/auth/web/password-auth?authuser=1#create_a_password-based_account

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const onChange = (event) =>{
        console.log(event.target.name);
        const {target : {name, value}} =event;
        if(name ==="email"){
            setEmail(value);
        } else if (name ==="password"){
            setPassword(value);
        }
        console.log(email);
        console.log(password);

    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try{
            const auth = getAuth();
            let authAccount;
            if(newAccount){
                //true니깐 create
                // createUserWithEmailAndPassword(auth, email, password)
                //                 .then((userCredential) => {
                //         // Signed in 
                //         const user = userCredential.user;
                //         // ...
                //     })
                //     .catch((error) => {
                //         const errorCode = error.code;
                //         const errorMessage = error.message;
                //         // ..
                //     });

                authAccount = await createUserWithEmailAndPassword(auth, email, password);
            }else{
                authAccount = await signInWithEmailAndPassword(auth, email, password);
                //log in 
                // signInWithEmailAndPassword(auth, email, password)
                //     .then((userCredential) => {
                //         // Signed in 
                //         const user = userCredential.user;
                //         // ...
                //     })
                //     .catch((error) => {
                //         const errorCode = error.code;
                //         const errorMessage = error.message;
                //     });
            
            }
            console.log(authAccount);
        }catch (error){
            console.log(error);
        }
        
    }
return (
<div>
    <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder="Email" value={email} onChange={onChange} required/>
        <input name="password" type="password" placeholder="Password" onChange={onChange} required value={password}/>
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
    </form>
    <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
    </div>
</div>
);
};
export default Auth;