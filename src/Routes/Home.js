import React, {  useEffect, useState } from "react";
import { dbService } from "fbInstance";
import { addDoc, collection, query, where, getDocs} from "firebase/firestore";

const Home = () => {
    const [bweet, setBweet] = useState("");
    const [bweets, setBweets] = useState([]);
    const getBweets = async() => {
        //https://firebase.google.com/docs/firestore/query-data/get-data
        const q = query(collection(dbService, "bweets")); //, where("capital", "==", true));
        const querySnapshot = await getDocs(q);
        //const bweets = await getDocs(collection(dbService, "bweets")); 
            // doc.data() is never undefined for query doc snapshots

            // ... 은 spread로, 값을 뿌려줌
        querySnapshot.forEach((doc) => {
            const bweetObj = {
            ...doc.data(), 
            id: doc.id,
            }
            setBweets(prev => [bweetObj, ...prev]);
            });
    }
    useEffect(() => {
        getBweets();
    }, [])
    //https://firebase.google.com/docs/firestore/quickstart#web-version-9_3
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
        const docRef = await addDoc(collection(dbService, "bweets"), {//bweets 컬렉션에 다른 문서 추가.
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
    console.log(bweets);
    return(
    <form onSubmit={onSubmit}>
        <input value={bweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="Bweet" />
        <div>
            {bweets.map(bweet => <div>
                <h4>{bweet.bweet}</h4>
                </div>
                )}
        </div>
    </form>
    );
}
export default Home;