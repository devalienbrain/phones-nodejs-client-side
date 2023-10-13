import { useLoaderData } from "react-router-dom";
import Phone from "./Phone";

const Phones = () => {
  const phones = useLoaderData();
  return (
    <>
      <div>Phones Loaded from My NodeJS Server: {phones.length}</div>
      <div>
        {phones.map((phone) => (
          <Phone key={phone.id} phone={phone} />
        ))}
      </div>
    </>
  );
};

export default Phones;
