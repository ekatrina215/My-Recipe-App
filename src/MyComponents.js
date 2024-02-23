function MyComponents ({label,image,diet,calories,ingredients}) {
    return (
        <div>
        <div className="container">
            <h2>{label}</h2>
            </div>
            <div className="container">
            <img className="pic" src={image}/>
            </div>
            <div className="container">
            <h3>{diet}</h3>
            </div>
            <ul className="container list">
            {ingredients.map((ingredient, index)=>(
                <li key={index}>
                    <img src="https://img.icons8.com/?size=40&id=41707&format=png" className="icon" alt="icon"/>
                    {ingredient}</li>
            ))}
        </ul>
        <div className="container">
            <h3>{calories.toFixed()} calories </h3>
            </div>
           
        </div>
        
    )
}

export default MyComponents;