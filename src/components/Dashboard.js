import React from 'react'
import './dashboard.css'
import  Stream  from './Stream.jsx'
import notification from '../images/notification.png'
import avtar from '../images/avtar.png'
import { content } from './content.js'
import { Sidebar } from './Sidebar'

function Dashboard() {
    return (
        <div className='container'>
            <Sidebar/>
            <div className='main'>
                <div className='header'>
                <h1>Dashboard</h1>
                <div className='header-right'>
                    <input type='text' placeholder='Search...'/>
                    <img className='avtar' src={notification}/>
                    <img src={avtar} />
                    </div>
                </div>
                <div className='body'>
                    <div className='cards'>
                        
                            {content.map((value,key) =>{
                                return (
                                    <div className='card' key={key}>
                                        <img src={value.image}/>
                                        <p>{value.heading}</p>
                                        <h1>{value.amount}</h1>
                                        </div>
                                )
                            })}
                            
                        </div>
                        <div className='graph'>
                            <h1>Activities</h1>
                            <div className='graph-options'>
                                <select>
                                    <option>Jan-Feb 2021</option>
                                    <option>Jan-Feb 2021</option>
                                    <option>Jan-Feb 2021</option>
                                    <option>Jan-Feb 2021</option>
                                    <option>Jan-Feb 2021</option>
                                    <option>Jan-Feb 2021</option>
                                    <option>Jan-Feb 2021</option>
                                    <option>Jan-Feb 2021</option>
                                </select>
                                <ul>
                                    <li>Guest</li>
                                    <li>User</li>
                                </ul>
                            </div>
                            <Stream style={{height:"300px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Dashboard