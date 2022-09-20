import React from 'react'
import {FaTimes, FaCheckCircle} from 'react-icons/fa'
import {Link} from "react-router-dom"

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`}>
            <h3>{task.text} <FaCheckCircle style={{color: "green", cursor: 'pointer'}} onClick={() => onToggle(task.id)} /><FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
            <p><Link to={`/task/${task.id}`}>View Details</Link></p>
        </div>
    )
}

export default Task

