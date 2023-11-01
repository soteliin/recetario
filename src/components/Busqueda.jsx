import React, { useEffect, useState } from 'react'

export default function Busqueda() {
    const [dataAPI, setData] = useState(null);
    const [search, setSearch] = useState('');
    useEffect(() => {
        if (search) {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                .then(response => response.json())
                .then(data => {
                    setData(data)
                })
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            setData(null);
        }
    }, [search]);
    const handleInputChange = event => {
        setSearch(event.target.value);
    };
    return (
    <div>
        <p>Buscar: </p><input type="text" value={search} onChange={handleInputChange}/>
        {dataAPI ? (
            <div>
                {dataAPI.meals.map((meal, index) => (
                    <p key={index}>{meal.strMeal}</p>
                ))}
            </div>
        ) : (
            <p>No hay datos</p>
        )}
    </div>
    );
}
