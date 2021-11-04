export default function Alumni(props) {
  const { students } = props;
  return (
    <div>
      <h3>Your Fellow Students</h3>
      {students.map((student) => (
        <div key={student.id}>
          <p>{student.user}</p>
          <p>{student.house}</p>
          <p>{student.spell}</p>
          <p>{student.patronus}</p>
          <p>{student.pet}</p>
          <button>edit</button>
          <button>Avada Kadavra delete</button>
        </div>
      ))}
    </div>
  );
}
