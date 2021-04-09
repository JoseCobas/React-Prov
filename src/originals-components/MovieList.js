import React from 'react'
import CreateItem from './CreateItem'

function MovieList({filmer, deleteMovie}) {
  return (
    <div>
      {
        filmer.map((film) =>{
            return (
                <CreateItem 
                    key={film['_id']}
                    id={film['_id']}
                    title={film.title}
                    description={film.description}
                    year={film.year}
                    genre={film.genre}
                    deleteMovie={deleteMovie}                
                />
            )
        })
      }
      
    </div>
  )
}

export default MovieList



