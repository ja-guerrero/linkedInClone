import React, {useEffect} from 'react';
import Headers from "./components/Headers"
import Sidebar from './components/Sidebar';
import Feed from "./components/Feed"
import Login from './components/Login';
import './App.css';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import Widgets from './components/Widgets';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth){
       dispatch(login({
         email: userAuth.email,
         uid: userAuth.uid,
         displayName: userAuth.displayName,
         photoUrl: userAuth.photoURL
       }))
      } else{
       dispatch(logout());
      }
    })
   },[]);

  return (
    <div className="app">
      <Headers/>

       {!user ? (
       <Login/>
       ) : (
        <div className='appBody'>
            <Sidebar/> 
            <Feed/>
            <Widgets/>
        </div>
       )}
    </div>
    
  );
}

export default App;
