import React, {  useState } from "react";
import { dbService } from "fbInstance";
import { addDoc, collection } from "firebase/firestore";

const Home = () => {
    const [bweet, setBweet] = useState("");
    //https://firebase.google.com/docs/firestore/quickstart#web-version-9_3
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
        const docRef = await addDoc(collection(dbService, "bweets"), {
        bweet,
        createdAt: Date.now(),
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (error) {
        console.error("Error adding document: ", error);
        }
        setBweet("");
};
    const onChange = (event) =>{
        const { 
            target:{value}
        } =event ; //from event
        setBweet(value);
    }
    return(
    <form onSubmit={onSubmit}>
        <input value={bweet} onChange={onChange}  type="text" placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="Bweet" />
    </form>
    );
}
export default Home;