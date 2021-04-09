import React, { useState, useEffect } from 'react'
import ItemsList from '../originals-components/ItemsList';
import { Link } from 'react-router-dom';

function ClientPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        try {
            let res = await fetch('http://localhost:5000/movies')
            let data = await res.json()
            setData(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div>
            <div><Link to='/allmovies'>Admin Page</Link></div>
            {
                data.map((film) => {
                    return (
                        <ItemsList
                            key={film['_id']}
                            id={film['_id']}
                            title={film.title}
                            description={film.description}
                            year={film.year}
                            genre={film.genre}
                        />
                    )
                })
            }

        </div>
    )

}

export default ClientPage