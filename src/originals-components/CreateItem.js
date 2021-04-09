import React from 'react'
import { Link } from 'react-router-dom';
import './styles/CreateItem.css'
import './styles/deleteBtn.css'


function CreateItem ({id,title, description, year, genre, deleteMovie}) {
console.log(id)
  const handleDeleteBtn = () => {
    console.log(id);
    deleteMovie(id)
  }

  
  return(
    <div className="container">    
          <div className="movie-card"
         
          >
          <Link to={'/movie/'+id}  >
            <div className="text">
              <h1>{title}</h1>
              <p>{description}</p>
              <p>{year}</p>
              <p>{genre}</p>
            </div> 
          </Link>     
            <button onClick={handleDeleteBtn} className="delete-btn">Delete</button>                        
          </div>  
      </div>
  )
}

export default CreateItem

/* 
class CreateItem extends Component {
  
  const handleDeleteBtn = () => {
    deleteMovie(film['_id'])
  }
  render() {
    const { title, description, year, genre } = this.props
    return (
      <div className="container">      
          <div className="movie-card"
           style={{
            backgroundImage:`url(${circlesImg}), 
            linear-gradient(to right, #ffeaa7, #ff7675)`, height:"200px"
          }}
          >
            <div className="text">
              <h1>{title}</h1>
              <p>{description}</p>
              <p>{year}</p>
              <p>{genre}</p>
            </div> 
           <button onClick={handleDeleteBtn}>Delete</button>                        
          </div>       
      </div>
    )
  }
}

export default CreateItem

 */
