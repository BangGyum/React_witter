import React, {  useState } from "react";

const Home = () => {
    const [bweet, setBweet] = useState("");
    const onSubmit = (event) =>{
        event.preventDefault();
    }
    const onChange = (event) =>{
        const { 
            target:{value}
        } =event ; //from event
        setBweet=value
    }
    return(
    <form>
        <input value={bweet} onChange={onChange}  type="text" placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="Bweet" />
    </form>
    );
}
export default Home;