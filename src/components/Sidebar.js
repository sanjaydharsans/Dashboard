import React from 'react'
import Vector from '../images/Vector.png'
import setting from '../images/setting.png'
import transaction from '../images/transaction.png'
import './dashboard.css'
export const Sidebar = () => {
  return (
    <div className='sidebar'>
                <h1>Board.</h1>
                <ul className='menu'>
                    <li><img src={Vector} height='10px'></img>Dashborad</li>
                    <li><img src={transaction} height='10px'></img>Transactions</li>
                    <li><img src={Vector} height='10px'></img>Schedules</li>
                    <li><img src={Vector} height='10px'></img>Users</li>
                    <li><img src={setting} height='10px'></img>Settings</li>
                </ul>
                <ul className='footer'>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>
  )
}
