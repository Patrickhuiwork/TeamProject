import { useState } from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import styles from '@/styles/Quiz.module.css';
import { Main } from 'next/document';

const questions = [
  {
    id: 1, 
    question: 'Which of the following is the most common cause of electric fires?', 
    questionoptions: 'A: Faulty wiring B: Poor ventilation', 
    options: ['A', 'B'], 
    imageSrc: '/Logo/horizontal logo v2.svg', 
    answer: 'A', 
    explanation: 'Faulty wiring is the leading cause of electrical fires due to electrical arcing or overloading.',
     
  },
  {
    id: 2, 
    question: 'What is the best way to stop an electrical fire?' , 
    questionoptions: 'A: Use water to put out the flames B: Turn off the power source and use a fire extinguisher', 
    options: ['A', 'B'], 
    imageSrc: '/Logo/horizontal logo v2.svg', 
    answer: 'B', 
    explanation: 'Turning off the power source or using a fire extinguisher eliminates the source of the fire which water cannot.' 
  },
  {
    id: 3, 
    question: 'How can you prevent electrical fires in your home?', 
    questionoptions: 'A: Use extension cords as a permanent solution instead of fixed wiring B: Keep flammable materials away from outlets and cords', 
    options: ['A', 'B'], 
    imageSrc: '/Logo/horizontal logo v2.svg', 
    answer: 'B', 
    explanation: 'Keeping flammable materials away from outlets and cords reduces the risk of ignition due to heat generated by electrical components.' 
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].answer;
    const answerObject = {
      question: questions[currentQuestion].question,
      answer,
      isCorrect,
      explanation: isCorrect ? questions[currentQuestion].explanation : questions[currentQuestion].inccorectexplanation,
    };
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerObject;
    setAnswers(newAnswers);
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const handlePreviousQuestion = () => {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion >= 0) {
      setCurrentQuestion(previousQuestion);
    }
  };

  const { question, options, imageSrc, questionoptions } = questions[currentQuestion];

  return (
    <div className={styles.main}>
      {currentQuestion > 0 && (
        <Button onClick={handlePreviousQuestion}>Previous Question</Button>
      )}
      <h1>Electrical Fires</h1>
      <p className={styles.question}>{question}</p>
      <p className={styles.questionoptions}>{questionoptions}</p>
      <Button onClick={() => handleAnswer(options[0])}>{options[0]}</Button>
      <Button onClick={() => handleAnswer(options[1])}>{options[1]}</Button>
      <img className={styles.illustration}  src={imageSrc} /> 
      {currentQuestion === questions.length - 1 && (
        <Link href={`/results1?score=${score}&totalQuestions=${questions.length}&answers=${JSON.stringify(answers)}`}>
          See Results
        </Link>
      )}
    </div>
  );
}