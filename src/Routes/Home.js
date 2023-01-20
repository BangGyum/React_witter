import React, {  useEffect, useState } from "react";
import { dbService } from "fbInstance";
import { addDoc, collection, query, where, getDocs, orderBy, onSnapshot} from "firebase/firestore";

const Home = ({userObj}) => {
    console.log("userObj"+userObj);
    const [bweet, setBweet] = useState("");
    const [bweets, setBweets] = useState([]);
    // const getBweets = async() => {
    //     //https://firebase.google.com/docs/firestore/query-data/get-data
    //     const q = query(collection(dbService, "bweets"),orderBy("createdAt", "desc")); //, where("capital", "==", true));
    //     const querySnapshot = await getDocs(q);
    //     //const bweets = await getDocs(collection(dbService, "bweets")); 
    //         // doc.data() is never undefined for query doc snapshots

    //         // ... 은 spread로, 값을 뿌려줌
    //     querySnapshot.forEach((doc) => {
    //         const bweetObj = {
    //         ...doc.data(), 
    //         id: doc.id,
    //         }
    //         setBweets(prev => [bweetObj, ...prev]);
    //         });
    // }
    useEffect(() => {
        const q = query(
            collection(dbService, "bweets"),
            orderBy("createdAt", "desc")
        );
        onSnapshot(q, (snapshot) => { //스냅샷은 우리가 가진 query와 같고, docs를 갖고 있음, 우리의 bweets는 snapshot에서 나오는거임
        console.log("snapshot"+snapshot);
        const bweetArr = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
        }));
        setBweets(bweetArr);
        });
        // getBweets();
        // collection(dbService, "nweets"),
        // orderBy("createdAt", "desc")
    }, [])
    //https://firebase.google.com/docs/firestore/quickstart#web-version-9_3
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
        const docRef = await addDoc(collection(dbService, "bweets"), {//bweets 컬렉션에 다른 문서 추가.
        //bweet,
        text:bweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
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
                <h4>{bweet.text}</h4>
                </div>
                )}
        </div>
    </form>
    );
}
export default Home;