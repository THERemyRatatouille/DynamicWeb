import styles from './index.css'
import {useState} from 'react'
import cx from 'classnames'
import ImageQ1 from './assets/parrot-carrot.png'
import ImageQ2 from './assets/hyperrealistic-art.png'
import ImageQ3 from './assets/pope-coat.png'
import ImageQ4 from './assets/sushi-shiba.png'

//The question title header is always the same. Questions are stored as an image, and their corresponding answer

var quesno = 1;
var rightanswer = 0; // # of right answers a person gets
var wronganswer = 0; // # of wrong answers a person gets
const questions = [{image: ImageQ1,
                    choices: ['yes', 'no'],
                    answer: 'yes'},

                    {image: ImageQ2,
                    choices: ['yes', 'no'],
                    answer: 'no'},

                    {image: ImageQ3,
                    choices: ['yes', 'no'],
                    answer: 'yes'},

                    {image: ImageQ4,
                    choices: ['yes', 'no'],
                    answer: 'yes'}]

export default function Qgame() {

    const [activeImage, setActiveImage] = useState(0) // allows the active image to be changed to another image
    const [selectedAnswer, setSelectedAnswer] = useState('') //allows the active answers to be changed to another set of answers

    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)

    const [showResult, setShowResult] = useState(false) // to show results page or not


    const onClickNext = () => {

        if(activeImage != questions.length-1){
        setActiveImage((prev) => prev + 1)
        quesno += 1
        }
        else{
            setShowResult(true)
            setActiveImage(0)
        }

        if(selectedAnswer == true){
            rightanswer +=1
        }
        else{
            wronganswer +=1
        }

    }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if (answer === questions[activeImage].answer){
            setSelectedAnswer(true)
            //rightanswer +=1
        }
        else{
            setSelectedAnswer(false)
            //wronganswer +=1
        }

    }

    
    return(
    showResult ?(<div className = 'results-screen'>
                <h1>Results</h1> 
                <h2> Total Correct: {rightanswer}/{questions.length} </h2>
                </div>)
    
    
    :

   ( <div className='quiz-container'>
       <h1>Quiz</h1> 
       <h2>Question {quesno}: Is this image AI or not?</h2>
       <div>
        <img src = {questions[activeImage].image} width = "400" height = "400" className = 'image-style'/> 
       </div> 
       <ul>
        {questions[activeImage].choices.map((answer, index) => (<li onClick={() => onAnswerSelected(answer, index)} key={answer} className = {selectedAnswerIndex === index ? 'selected-answer' : null} >
          {answer}
        </li>))} 
       </ul>
       <button onClick={onClickNext} className='next-button'>{activeImage === questions.length - 1 ? 'Finish' : 'Next'}</button>
    </div>))
    
}