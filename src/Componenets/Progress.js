function Progress({ index, questionNum, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={questionNum}
        value={index + Number(answer != null)}
      ></progress>
      <p>
        Question
        <strong>
          {index + 1}/{questionNum}
        </strong>
      </p>
      <p>
        Points
        <strong>
          {points}/{maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
