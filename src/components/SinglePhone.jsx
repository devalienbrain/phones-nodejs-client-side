import { useLoaderData } from "react-router-dom";

const SinglePhone = () => {
  const singlePhone = useLoaderData();
  return (
    <>
      <div> Phone Number {singlePhone.id} Specifications:</div>
      <div className="border p-7">
        <img className="mx-auto" src={singlePhone.image} />
        <div>
          <p>{singlePhone.name}</p>
          <h3>{singlePhone.price}</h3>
          <small>{singlePhone.description}</small>
        </div>
      </div>
    </>
  );
};

export default SinglePhone;
