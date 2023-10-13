const Phone = ({ phone }) => {
  const { id, name, price, image } = phone;
  return (
    <>
      <div>Phone: {id}</div>
      <div className="border p-7">
        <img className="mx-auto" src={image} />
        <div>
          <p>{name}</p>
          <h3>{price}</h3>
        </div>
      </div>
    </>
  );
};

export default Phone;
