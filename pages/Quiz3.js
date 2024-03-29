import { useState } from 'react';
import Link from 'next/link';
import Buttonv2 from '../components/Buttonv2';
import QuizButton from '../components/QuizButton';
import styles from '@/styles/Quiz.module.css'
import { questions } from '@/data/questionData3';
import ProgressBar from '@/components/ProgressBar';
import ReturnIcon from '@/components/returnIcon'

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswer = (answer) => {
    if (selectedAnswer !== answer) {
      setSelectedAnswer(answer);
      const isCorrect = answer === questions[currentQuestion].answer;
      const answerObject = {
        question: questions[currentQuestion].question,
        answer: answer,
        isCorrect,
        explanation: isCorrect ? questions[currentQuestion].explanation : questions[currentQuestion].explanation,
      };
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = answerObject;
      setAnswers(newAnswers);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer('');
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    answers.forEach((answer) => {
      if (answer && answer.isCorrect) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const { question, options, imageSrc, questionoptions, questionoptions1 } = questions[currentQuestion];

  return (
    <div className={styles.main}>

      <div className={styles.box}>
        <ProgressBar currentStep={currentQuestion + 1} totalSteps={questions.length} />
        <div className={styles.questioncontainer}>
          <h1 className={styles.quizTitle}>Ordinary Fires</h1>
          <p className={styles.question}>{question}</p>
          <div className={styles.options}>
            <p className={styles.questionoptions}>{questionoptions}</p>
            <p className={styles.questionoptions}>{questionoptions1}</p>
          </div>
          <img className={styles.illustration} src={imageSrc} />
          <div className={styles.buttons}>
            <Buttonv2 onClick={() => handleAnswer(options[0])} disabled={selectedAnswer !== ''}>Select {options[0]}</Buttonv2>
            <Buttonv2 onClick={() => handleAnswer(options[1])} disabled={selectedAnswer !== ''}>Select {options[1]}</Buttonv2>
          </div>
          {selectedAnswer !== '' && (
            <div className={styles.nextQuestion}>
              {currentQuestion !== 2 && <QuizButton onClick={handleNextQuestion}>Next Question</QuizButton>}
            </div>
          )}
          {currentQuestion === questions.length - 1 && selectedAnswer !== '' && (
            <div>
              <Link href={`/results3?score=${calculateScore()}&totalQuestions=${questions.length}&answers=${JSON.stringify(answers)}`}>
                <QuizButton>See Results </QuizButton>
                </Link>
              </div>
            )}

          </div>
      </div>
    </div>

  );
}