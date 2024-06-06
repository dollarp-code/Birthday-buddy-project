import Person from './Person';

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <section key={person.id}>
            <Person {...person} />
          </section>
        );
      })}
    </div>
  );
};
export default List;
