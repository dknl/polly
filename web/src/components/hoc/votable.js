
// => Make default compoment voteable

const Votable = (Wrapped) => {
  return (
    <Wrapped { ...props } />
  );
}

export default Votable;
