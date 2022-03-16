const Score = (props) => {
  return ( 
    <div>
      {props.students[props.idx].scores.map((score, idx) =>
        <div key={idx}>
          <p>Date: {props.students[props.idx].scores[idx].date}</p>
          <p>Score: {props.students[props.idx].scores[idx].score}</p>
        </div>
      )}
    </div>
  );
}
export default Score;