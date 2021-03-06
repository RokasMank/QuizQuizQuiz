import React, {useState} from 'react';
import { fetchQuizQuestions, QuestionState, fetchMyQuestions } from './API';
// Components
import QuestionCard from './QuestionCard';
//
//Types
import {Difficulty} from './API';

//
import { NavLink } from 'react-router-dom';

export type AnswerObject = {
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}

const TOTAL_QUESTIONS = 10;
const About = () => {
const[loading, setLoading] = useState(false);
const[questions, setQuestions] = useState<QuestionState[]>([]);
const[number, setNumber] = useState(0);
const[userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
const[score, setScore] = useState(0);
const[gameOver, setGameOver] = useState(true);

console.log(questions);

const startTrivia = async () =>{
  setLoading(true);
  setGameOver(false);

  // const newQuestions = await fetchQuizQuestions(
  //   TOTAL_QUESTIONS, Difficulty.EASY
  // );
  const newQuestions = await fetchMyQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  setQuestions(newQuestions);
  setScore(0);
  setUserAnswers([]);
  setNumber(0);
  setLoading(false);
};
const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) =>{
  if (!gameOver){
    const answer = e.currentTarget.value;
    const correct =  questions[number].correct_answer === answer;
  
    
    if (correct) {setScore(prev=> prev+1); e.currentTarget.className = "correctAnswer"}
     else if (!correct){e.currentTarget.className = "incorrectAnswer"}

    const answerObject = {
      question:questions[number].question,
      answer, 
      correct,
      correctAnswer:questions[number].correct_answer,
    }
    setUserAnswers(prev=>[...prev, answerObject]);
  }
};
const nextQuestion = ()=>{
  const nextQuestion = number+1;
  if (nextQuestion === TOTAL_QUESTIONS){
    setGameOver(true);
  }
  else setNumber(nextQuestion);
};


    return (
       <div className="quizPage">
         <div className="header"><h1>Get to know me!</h1> </div> 
         <div className="wrapper"> 
         <div className="quizCard">
         {gameOver ?(
         <button className="quizCardButton" onClick={startTrivia}>Start</button>
         ) : null}
         {userAnswers.length === TOTAL_QUESTIONS ?(
         <button className="quizCardButton" onClick={startTrivia}>Start over</button>  
        
         ) : null }
          {userAnswers.length === TOTAL_QUESTIONS ?(
         <NavLink className="navL" to="/prize">Claim prize</NavLink> 
        
         ) : null }

         {!gameOver ?<p className="score">Score: {score} </p> : null}
         {loading && <p>Loading questions ...</p>}
        {!loading && !gameOver && (
         <QuestionCard
         questionNumber = {number +1}
         totalQuestions = {TOTAL_QUESTIONS}
         question = {questions[number].question}
         answers = {questions[number].answers}
         userAnswer = {userAnswers?  userAnswers[number] :  undefined}
         callback = {checkAnswer}
         
         />
        )}
        {!gameOver && !loading && userAnswers.length === number+1 && number !== TOTAL_QUESTIONS-1 ?(
           <button className="quizCardButton" onClick={nextQuestion}>Next</button>
        ):null }
        </div>  
        </div>
       </div>
    );
}
 
export default About;