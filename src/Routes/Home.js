import React from "react";

const Home = () => {
    const onSubmit = (event) =>{
        event
    }
    const onChange = (event) =>{
        const { target:{value}} =event ; //from event
    }
    return(
    <form>
        <input type="text" placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="Bweet" />
    </form>
    );
}
export default Home;