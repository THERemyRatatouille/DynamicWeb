import {useState, useEffect} from 'react'
import cx from 'classnames'
import styles from './UI.module.css'
import CardPattern from './assets/moroccan-flower-dark.png'
import Bilbo from './assets/bilbo-baggins.png'
import Cameron from './assets/cameron-poe.png'
import Nikki from './assets/nikki-cage.png'
import Pollux from './assets/pollux-troy.png'
// Add a matched property to set to true once they have been matched!
const cardImages = [
  {src: Bilbo, matched: false},
  {src: Cameron, matched: false},
  {src: Nikki, matched: false},
  {src: Pollux, matched: false},
]

export default function Grid(props) {
  // create some state and setter to store our shuffled cards
  const [cards, setCards] = useState([])
  // keep track of our turns
  const [turns, setTurns] = useState(0)

  // Keep track of our choices
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // Create our shuffle function to double our array, shuffle it, and then store it in State
  const shuffleCards = () => {
    // spread all of our card images 2x so we have duplicated to match!
    const shuffledCards = [...cardImages, ...cardImages]
      // add the sort function whgich fires a function for each item in our new array
      // when number is negative, leave the item where it is
      // when positive, swap it with another item to shuffle
      .sort(() => Math.random() - 0.5)
      // now we map to add another function to add an ID to each item in our new array
      // first we spread the current properties, then we add an ID
      .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    console.log(card)
   
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    
  }

  
  useEffect(() => {
   
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              console.log('those cards match')
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        console.log('those cards do not match')
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(choiceOne, choiceTwo)

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
  }

  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      <div>Turns: {turns}</div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card) => (
            // update to take entire card not just img!
            // add flipped prop
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function Card(props) {
  const {card, handleChoice, flipped} = props

  const handleClick = (event) => {
    handleChoice(card)
  }

  return (
    <div className={styles.flip_card}>
      <div
        className={cx(styles.flip_card_inner, {[styles.flipped]: flipped})}
        onClick={handleClick}
      >
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card back" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={card.src} alt="card front" />
        </div>
      </div>
    </div>
  )
}