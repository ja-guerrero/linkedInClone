import React,{useEffect, useState} from 'react'
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import SuperviosrAccountIcon from  "@material-ui/icons/SupervisorAccount"
import "./Headers.css"
import HeaderOptions from './HeaderOptions';
import BusinessCenterIcon  from '@material-ui/icons/Business'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch, useSelector } from 'react-redux'
import {logout, selectUser } from '../features/userSlice'
import { auth } from '../firebase'



function Headers() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const logOut = () =>{
        dispatch(logout())
        auth.signOut()
    }

    return (
    <div className='header'>
        <div className='leftheaders'>
            <img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" 
            alt='Linkedin'/>

            <div className='search'>
                <SearchIcon/>
                <input type='text'></input>
            </div>


        </div>

        <div className='rightheaders'>
            <HeaderOptions Icon={HomeIcon} title="Home"/>
            <HeaderOptions Icon={SuperviosrAccountIcon} title="My Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOptions Icon={ChatIcon} title="Messaging"/>
            <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOptions 
            avatar={true} 
            title={user ? "Logout": "Login"} 
            onClick={logOut}
            />
        </div>
        
    </div>
  );
}

export default Headers