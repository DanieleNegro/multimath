import React from "react";
import { useMessageContext } from "../../context/MessageContext";

const Message: React.FC = () => {
  const { text } = useMessageContext();
  return (
    <div className="container-fluid d-flex mt-5">
      <div className="col-sm-2" />
      <div className="col-sm-10 ms-4">{text}</div>
    </div>
  );
};

export default Message;
