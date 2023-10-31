import React,{ useState, useEffect } from "react";
import '../css/estilos.css'
function Testimonio(props){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const ingredientes = [];
    useEffect(() => {
    // Definir la URL de la API que deseas consumir
    //const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=Corba'; https://www.themealdb.com/api/json/v1/1/search.php?s=Corba
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Corba';
    // Usando 'fetch'
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
          
         // Almacena los datos en el estado
        setLoading(false); // Cambia el estado de carga a falso
        // Accede a los ingredientes y medidas
        
        

    })
    .catch((error) => console.error('Error al obtener datos:', error));
    }, []);
    if (loading) {
        return <div className="alert alert-primary" role="alert">PORFA ESPERA UNOS MOMENTOS....</div>;
    }else{
        for (let i = 1; i <= 20; i++) {
            const ingrediente = data.meals[0][`strIngredient${i}`];
            const medida = data.meals[0][`strMeasure${i}`];
          
            if (ingrediente) {
              // Verifica si el ingrediente está definido
              const textoIngrediente = medida ? `${medida} ${ingrediente}` : ingrediente;
              ingredientes.push(textoIngrediente);
            }
          }
          return (
            <div className="recipe-card">
              {data.meals.map((meal) => (
                <li key={meal.idMeal}>
                  <h2 className="recipe-title">{meal.strMeal}</h2>
                  <div className="recipe-image">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                  </div>
                  <div className="recipe-details">
                    <p className="recipe-category">Categoría: {meal.strCategory}</p>
                    <p className="recipe-area">Área: {meal.strArea}</p>
                  </div>
                  <div className="recipe-instructions">
                    <h3 className="instruction-title">Instrucciones</h3>
                    <p>{meal.strInstructions}</p>
                  </div>
                  <div className="recipe-video">
                    <iframe
                      width="560"
                      height="315"
                      src={meal.strYoutube}
                      title="Video de YouTube"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="recipe-ingredients">
                    <h3 className="ingredient-title">Ingredientes</h3>
                    <ul className="ingredient-list">
                      {ingredientes.map((ingrediente, index) => (
                        <li key={index} className="ingredient">{ingrediente}</li>
                      ))}
                      <li>{meal.strIngredient1}</li>
                    </ul>
                  </div>
                </li>
              ))}
            </div>
          );
          
          
    }
    
}
export default Testimonio;
/*
return(
            <div className="card" > 
            <div className="card-body" style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)', border: '2px solid red' }}>
                {data.meals.map((meal) => (
                  <li key={meal.idMeal}>
                    <h2 className="card-title mitxt">{meal.strMeal}</h2>
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="imga" />
                    <p>Categoría: {meal.strCategory}</p>
                    <p>Área: {meal.strArea}</p>
                    <p>Instrucciones: {meal.strInstructions}</p>
                    <iframe
                        width="560"
                        height="315"
                        src={meal.strYoutube}
                        title="Video de YouTube"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <h2>Ingredientes</h2>
                    <ul>
                        {ingredientes.map((ingrediente, index) => (
                        <li key={index}>{ingrediente}</li>
                        ))}
                        <li>{meal.strIngredient1}</li>
                    </ul>
                    
                    
                  </li>
                ))}
            </div>
            </div> 
            );








return(

    <pre>{JSON.stringify(data, null, 2)}</pre>
        <div className="card" >
       
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    );
 */