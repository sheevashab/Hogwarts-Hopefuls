export default function Alumni(props) {
  const { students } = props;
  return (
    <div>
      <h3>Your Fellow Students</h3>
      {students.map((student) => (
        <div key={student.id}>
          <img src={student.img_url} />
          <p>{student.user.username}</p>
          <p>{student.house.name}</p>
          <p>{student.spell.name}</p>
          <p>{student.patronus}</p>
          <p>{student.pet}</p>
        </div>
      ))}
    </div>
  );
}
