import React from 'react'
import buttonImg from '../image/add.png'
import './styles/addButton.css'
import { Link } from 'react-router-dom'


const AddButton = () => (
    <Link to="/allmovies/newmovie">
        <img src={buttonImg} className="add-button" alt="addbutton"/>
    </Link>

)

export default AddButton