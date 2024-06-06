const Person = ({ name, age, image }) => {
  return (
    <article>
      <img src={image} alt={name} style={{ width: '100px', height: '100px' }} />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  );
};
export default Person;
