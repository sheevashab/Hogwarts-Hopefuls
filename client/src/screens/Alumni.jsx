export default function Alumni(props) {
  const { students, spells, houses } = props;
  return (
    <div>
      <h3>Your Fellow Students</h3>
      {students.map((student) => (
        <div key={student.id}>
          <p>{student.user_id}</p>
          {/* <p>{users.find((user) => user.id === student.user_id)?.username}</p> */}
          <p>{houses.find((house) => house.id === student.house_id)?.name}</p>
          <p>{spells.find((spell) => spell.id === student.spell_id)?.name}</p>
          <p>{student.patronus}</p>
          <p>{student.pet}</p>
        </div>
      ))}
    </div>
  );
}
