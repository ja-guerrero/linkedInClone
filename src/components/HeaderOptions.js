import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

import "./HeaderOption.css"

function HeaderOptions({avatar ,title, Icon, onClick}) {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className='headerOption'>
       {Icon && <Icon className="headerOptionIcon" />}
       {avatar && 
           <Avatar src={user?.photoUrl}className='headerOptionIcon' >
             {user?.email[0]}
           </Avatar>
    }
       <h3 className='headerOptionTitle'>{title}</h3>
    </div>
  )
}

export default HeaderOptions