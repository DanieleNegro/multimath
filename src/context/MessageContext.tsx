import React, { createContext, useContext, useState } from "react";
import { Props } from "./Props";

interface IMessageContext {
  text: string;
  setText: (value: string) => void;
}

const DEFAULT_STATE: IMessageContext = {
  text: "",
  setText: () => {},
};

export const MessageContext = createContext<IMessageContext>(DEFAULT_STATE);

export function MessageProvider({ children, ...props }: Props) {
  const [text, setText] = useState<string>("");

  const provider = {
    text,
    setText,
  };

  return (
    <MessageContext.Provider value={provider}>
      {children}
    </MessageContext.Provider>
  );
}

export const useMessageContext = (): IMessageContext => {
  return useContext(MessageContext);
};
