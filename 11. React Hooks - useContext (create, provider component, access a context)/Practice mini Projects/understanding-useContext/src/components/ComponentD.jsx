import React, { useContext } from "react";
import { MessageContext } from "../App";

const ComponentD = () => {
  const Message = useContext(MessageContext);

  return (
    <div className="">
      <div className="border-2 border-black rounded-md p-4">
        <h1 className="text-4xl text-center font-bold underline">
          Component D
        </h1>

        <p className="text-center">
          Finally get the message from the parents, <br></br> Message :{Message}

        </p>
      </div>
    </div>
  );
};

export default ComponentD;
