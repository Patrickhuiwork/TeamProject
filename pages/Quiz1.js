import { useState } from 'react';
import Link from 'next/link';
import { Main } from 'next/document';
import Buttonv2 from '../components/Buttonv2';
import QuizButton from '../components/QuizButton';
import styles from '@/styles/Quiz.module.css'


const questions = [
  {
    id: 1, 
    question: 'Which of the following is the most common cause of electric fires?', 
    questionoptions: 'A: Faulty wiring',
    questionoptions1: 'B: Poor ventilation', 
    options: ['A', 'B'], 
    imageSrc: '/illustrations/badventilation.svg', 
    answer: 'A', 
    explanation: 'Faulty wiring is the leading cause of electrical fires due to electrical arcing or overloading.',
     
  },
  {
    id: 2, 
    question: 'What is the best way to stop an electrical fire?' , 
    questionoptions: 'A: Use water to put out the flames',
    questionoptions1: 'B: Turn off the power source and use a fire extinguisher', 
    options: ['A', 'B'], 
    imageSrc: '/illustrations/fire extinguisher.svg', 
    answer: 'B', 
    explanation: 'Turning off the power source or using a fire extinguisher eliminates the source of the fire which water cannot.' 
  },
  {
    id: 3, 
    question: 'How can you prevent electrical fires in your home?', 
    questionoptions: 'A: Use extension cords as a permanent solution instead of fixed wiring',
    questionoptions1: 'B: Keep flammable materials away from outlets and cords',  
    options: ['A', 'B'], 
    imageSrc: '/illustrations/outlet.svg', 
    answer: 'B', 
    explanation: 'Keeping flammable materials away from outlets and cords reduces the risk of ignition due to heat generated by electrical components.' 
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === questions[currentQuestion].answer;
    const answerObject = {
      question: questions[currentQuestion].question,
      answer: answer,
      isCorrect,
      explanation: isCorrect ? questions[currentQuestion].explanation : questions[currentQuestion].inccorectexplanation,
    };
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerObject;
    setAnswers(newAnswers);
    if (isCorrect && score < 3) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer('');
    }
  };


  const { question, options, imageSrc, questionoptions, questionoptions1 } = questions[currentQuestion];

  return (
    <div className={styles.main}>
      <h1>Electrical Fires</h1>
      <div className={styles.question}>
        <p>{question}</p>
        <p>{questionoptions}</p>
        <p>{questionoptions1}</p>

      </div>
      <div>
        <Buttonv2 onClick={() => handleAnswer(options[0])} disabled={selectedAnswer !== ''}>Select {options[0]}</Buttonv2>
        <Buttonv2 onClick={() => handleAnswer(options[1])} disabled={selectedAnswer !== ''}>Select {options[1]}</Buttonv2>

      </div>
      {selectedAnswer !== '' && (
         <div>
         <p>You have selected option: {selectedAnswer}</p>
        {currentQuestion !== 2 && <QuizButton onClick={handleNextQuestion}>Next Question</QuizButton>}
       </div>
      )}
      {currentQuestion === questions.length - 1 && selectedAnswer === '' && (
        <p>Please select an answer before proceeding to the next question.</p>
      )}
      {((currentQuestion === questions.length - 1 && selectedAnswer !== '') || score === 3) && (
        <Link href={`/results1?score=${score}&totalQuestions=${questions.length}&answers=${JSON.stringify(answers)}`}>
          <QuizButton>See Results ⮞</QuizButton>
        </Link>
      )}
      <img className={styles.illustration} src={imageSrc} />
    </div>
  );
}