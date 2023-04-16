import { useRouter } from 'next/router';

export default function Results() {
  const router = useRouter();
  const { score, totalQuestions, answers } = router.query;

  if (!score || !totalQuestions || !answers) {
    return <div>Loading...</div>;
  }

  const parsedAnswers = JSON.parse(answers);

  return (
    <div>
      <h1>Results</h1>
      <p>Your score is {score} out of {totalQuestions}!</p>
      {parsedAnswers.map((answer, index) => (
        <div key={index}>
          <p>{answer.question}</p>
          <p>Your answer: {answer.answer}</p>
          {answer.isCorrect ? (
            <p>Correct! {answer.explanation}</p>
          ) : (
            <p>Incorrect! {answer.explanation}</p>
          )}
        </div>
      ))}
    </div>
  );
}