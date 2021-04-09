import React, { useState, useEffect} from 'react'
import Welcome from '../../originals-components/Welcome';
import MovieList from '../../originals-components/MovieList'; 
import AddButton from '../../originals-components/AddButton';
import { Link } from 'react-router-dom';

function ManageItems (){
    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        try{
            let res = await fetch('http://localhost:5000/movies')
            let data = await res.json()
            setData(data)
            console.log(data);
        }catch (error) {
            console.log(error);
        }
    }

    const deleteMovie = async (movieId) => {
        //console.log(movieId);
        try{
            await fetch('http://localhost:5000/movies/' + movieId, {
                method:'DELETE'
            });
        } catch(message){
            throw new Error(message);
        }
        fetchItems();
    }

    return(
        <div>
            <Link to='/clientPage'>Client Page</Link>
            <Welcome />

            <MovieList
            filmer={data}
            deleteMovie={deleteMovie}
            /> 
            <AddButton />
        </div>
    )

}

export default ManageItems