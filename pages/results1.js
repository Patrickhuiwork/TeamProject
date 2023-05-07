import { useRouter } from 'next/router';
import styles from '@/styles/results.module.css';
import Button from '@/components/Button';
import Link from 'next/link';
import Redbutton from '@/components/Redbutton';

export default function Results() {
  const router = useRouter();
  const { score, totalQuestions, answers } = router.query;

  if (!score || !totalQuestions || !answers) {
    return <div>Loading...</div>;
  }

  const parsedAnswers = JSON.parse(answers);

  const scoreRatio = score / totalQuestions;

  let message = '';
  if (scoreRatio >= 1) {
    message = 'Congratulations, you got a perfect score!';
  } else {
    message = 'Sorry, you did not pass the quiz. Please review the learning material.';
  }

  return (
    <div className={styles.main}>
      <div className={styles.box}>

        <h1 className={styles.title}>Results</h1>
        <p className={styles.score}>Your score is {score} out of {totalQuestions}!</p>
        <p className={styles.message}>{message}</p>
        <div className={styles.resultscontainer}>
        {parsedAnswers.map((answer, index) => (
            <div key={index}>
              <p className={styles.question}>{answer.question}</p>
              <p>Your answer: {answer.answer}</p>
              {answer.isCorrect ? (
                <p className={styles.correct}>Correct! {answer.explanation}</p>
              ) : (
                <p className={styles.incorrect}>Incorrect! {answer.explanation}</p>
              )}
            </div>
          ))}
        </div>

        {scoreRatio >= 1 ? (
          <Link href='/Quizzes'>
            <Redbutton>Take Another Quiz</Redbutton>
          </Link>
        ) : (
          <Link href='/ReviewElectric'>
            <Button>Review</Button>
          </Link>
        )}
        
      </div>
    </div>
  );
}