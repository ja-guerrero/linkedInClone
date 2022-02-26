import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import "./Sidebar.css"


function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className='sidebarRecentItem'>
            <span className='sidebarHash'>#</span>
            <p>{topic}</p>
        </div>
    );


  return (
    <div className='sidebar'>

        <div className='sidebarTop'>
            <img 
            src='https://images.unsplash.com/photo-1642103358955-77b6c955a0d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60' alt=''></img>
            <Avatar src={user?.photoUrl} className='sidebarAvatar'>
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className='sidebarStats'>
            <div className='sidebarStat'>
                <p>Who viewed you</p>
                <p className='sidebarStatNumber'>0</p>
            </div> 

            <div className='sidebarStat'>
                <p>Views on post</p>
                <p className='sidebarStatNumber'>0</p>
            </div>  
        </div>



        <div className='sidebarBottom'>
            <p>Recent</p>
            {recentItem("ReactJS")}
            {recentItem("Programming")}
            {recentItem("Software Engineering")}
            {recentItem("Design")}

        </div>


    </div>
  )
}

export default Sidebar