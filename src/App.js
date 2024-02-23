
import { useEffect, useState } from 'react';
import './App.css';
import video from './video.mp4';
import MyComponents from './MyComponents';


//'https://api.edamam.com/api/recipes/v2?type=public&q=lemon&app_id=4823fd90&app_key=c9035e111be8fdae2d0b0dfa1cb6ce46'



function App() {
  const MY_ID = "4823fd90";
  const MY_KEY = "c9035e111be8fdae2d0b0dfa1cb6ce46";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState ([]);
  const [wordSubmitted, setWordSubmitted] = useState("lemon");

useEffect (()=>{
  const getRecipe= async () =>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
    const data = await response.json();
    console.log(data.hits)
    setMyRecipes(data.hits);
  }
  getRecipe()
},[wordSubmitted])

const myRecipeSearch=(e)=>{
 setMySearch(e.target.value)

}
const finalSearch = (e) =>{
e.preventDefault()
setWordSubmitted(mySearch);
}


  return (
    <div className="App">
    <div className="container">
    <video autoPlay muted loop>
    <source src={video} type="video/mp4" />
    </video>
    <h1>FIND YOUR PERFECT RECIPE</h1>
  
    </div>
    <div className='container'>
      <form onSubmit = {finalSearch}>
          <input className='search' onChange={myRecipeSearch} value={mySearch}/>
    </form>
</div>

<div className='container'>
      <button onClick={finalSearch}>
          <img src="https://img.icons8.com/?size=64&id=42848&format=png"  alt="icon"/>
      </button>
</div>
{myRecipes.map ((element,index) =>(
  <MyComponents key={index}
  label={element.recipe.label} 
  image={element.recipe.image}
  diet={element.recipe.dietLabels} 
  calories={element.recipe.calories} 
  ingredients={element.recipe.ingredientLines}/>
))}
    </div>
  );
}
export default App;
