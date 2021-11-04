export default function Alumni(props) {
  const { students, spells, houses, users } = props;
  return (
    <div>
      <h3>Your Fellow Students</h3>
      {students.map((student) => (
        <div key={student.id}>
          <img src={student.img_url} />
          <p>{users.find((user) => user[1] === student.user_id)[0]}</p>
          <p>{houses.find((house) => house.id === student.house_id)?.name}</p>
          <p>{spells.find((spell) => spell.id === student.spell_id)?.name}</p>
          <p>{student.patronus}</p>
          <p>{student.pet}</p>
        </div>
      ))}
    </div>
  );
}
