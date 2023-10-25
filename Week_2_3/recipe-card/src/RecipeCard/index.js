import React from 'react'
import RECIPE_IMG from '../assets/ratatouilleimg.jpeg'
import RECIPE_IMG2 from '../assets/remyimg2.jpeg'
import {RECIPE} from './recipe-data'
import RecipeInfo from './RecipeInfo'
import styles from './recipecard.css'
import {useState} from 'react'
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'

export default function RecipeCard(){

  

    return(
    <Card>
    <RecipeImage imgSrc = {RECIPE.imgSrc} />
    <div>
   <RecipeInfo title={RECIPE.title} description={RECIPE.description}/>
    <IngredientsList ingredients = {RECIPE.ingredients}/>
    </div>
    <InstructionsList instructions = {RECIPE.instructions} />

    <button onClick={handleMinusClick}>[-]</button>
      <div>
        {/* Mapping over an array with count num slots and 
        render a span with a heart for each */}
        {[...Array(count)].map((star, i) => {
          return (
            <span className={styles.heart} key={i}>
              <Heart />
            </span>
          )
        })}
      </div>
      <button onClick={handlePlusClick}>[+]</button>

    </Card>
    )
}

function Card(props){
    return <div className="card">{props.children}</div>
}

function RecipeImage(props){
    const {imgSrc} = props

    return (
        <img src={imgSrc} alt="ratatouille"  className="img"/>
    )
}




function InstructionsList(props) {
    const {instructions} = props
    return (
      <div>
        <h3>Instructions</h3>
        <ol>
          {instructions.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ol>
      </div>
    )
  }


function IngredientsList(props) {
    const {ingredients} = props
    return(
        <div>
            <h3>Ingredients</h3>
    <ul>
        {RECIPE.ingredients.map((ingred,index) => (<li key={index}>{ingred}</li>))}
    </ul>
        </div>
    )

}

