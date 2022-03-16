import Score from "./Score";

const Student = (props) => {
  return (
    <div>
      {props.students.map((student, idx) =>
        <div key={idx}>
          <h1>Name: {props.students[idx].name}</h1>
          <p>Biography: {props.students[idx].bio}</p>
          <Score students={props.students} idx={idx} />
        </div>
      )}
    </div>
  );
}

export default Student;