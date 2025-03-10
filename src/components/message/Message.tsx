import React, { useEffect, useState } from "react";
import { useMessageContext } from "../../context/MessageContext";

const Message: React.FC = () => {
  const { text } = useMessageContext();
  const [onOpen, setOnOpen] = useState(false);
  useEffect(() => {
    if (text.length > 0) {
      setOnOpen(true);
    } else {
      setOnOpen(false);
    }
  }, [text]);
  return (
    text.length > 0 && (
      <div
        className={`alert alert-primary alert-dismissible fade ${onOpen ? "show" : "hide"}`}
        role="alert"
      >
        {text}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => setOnOpen(!onOpen)}
        ></button>
      </div>
    )
  );
};

export default Message;
