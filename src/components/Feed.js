import React, {useState, useEffect} from 'react'
import "./Feed.css"
import InputOption from "./InputOption"
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from "./Post"
import {db} from "../firebase"
import { collection, addDoc } from "firebase/firestore"; 
import firebase from 'firebase/compat/app'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import FlipMove from 'react-flip-move'



function Feed() {
    
    const [text,setText] = useState('')
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        let isMounted = true;
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
            if (isMounted){
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )}}
        );
        return () => {
            isMounted = false;
            };
        
    },[]);


    const sendPost = (e) => {
        e.preventDefault();
        addDoc(collection(db, "posts"),{
            name: user?.displayName,
            description: user.email,
            message: text,
            photoUrl: user?.photoUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log(text)
        setText('');
    }


  return (
    <div className='feed'>
        <div className="feedInputContanier">
            <div className="feedInput">
                <CreateIcon/>
                <form>
                    <input 
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>

            <div className="inputOptions">
                <InputOption title='Photo' Icon={ImageIcon} color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title="Event" color="#COCBCD" />
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
            </div>

        </div>
        <FlipMove>
            {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl}/>
            ))}
        </FlipMove>



    </div>
  );
}

export default Feed