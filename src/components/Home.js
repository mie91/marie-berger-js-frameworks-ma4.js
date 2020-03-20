import React from 'react';
import Heading from "./Heading"
import RecipeList from "./RecipeList";

function Home() {
    return ( 
        <>
        <Heading title= "Recipes" />
        <RecipeList/>
        </>
    )
}


export default Home;