import React from 'react'
import { Link } from 'react-router-dom';
import './styles/CreateItem.css'


function ItemsList ({id,title, description, year, genre}) {
  
  return(
    <div className="container">    
        <Link to={'/movie/'+id}  >
          <div className="movie-card">
          
            <div className="text">
              <h1>{title}</h1>
              <p>{description}</p>
              <p>{year}</p>
              <p>{genre}</p>
            </div>                       
          </div>  
        </Link>     
      </div>
  )
}

export default ItemsList