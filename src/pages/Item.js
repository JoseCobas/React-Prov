import React, { useState, useEffect} from 'react'
import '../originals-components/styles/CreateItem.css'
import { useHistory } from 'react-router';


function Item(props){
    const history = useHistory()
    console.log(props.match.params.id)
    const [ data, setData ] = useState([]);
    useEffect(() => {
        fetchItems(props.match.params.id);
    }, [props.match.params.id])

    const fetchItems = async (id) => {
        try{
            let res = await fetch('http://localhost:5000/movies')
            let data = await res.json()
           const movieData = data.filter(item => item._id === id)
           console.log(movieData[0]);
            setData(movieData[0])
        }catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="container">    
        <button onClick={() => history.goBack()}>Go Back</button>
              <div className="movie-card"
              /*  style={{
                //backgroundImage:`url(${circlesImg}), 
                linear-gradient(to right, #ffeaa7, #ff7675)`, height:"200px"
              }} */
              >
                <div className="text">
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  <p>{data.year}</p>
                  <p>{data.genre}</p>
                </div>                       
              </div>  
          </div>
        
    )

}

export default Item

// checking git hub