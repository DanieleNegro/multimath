import React, { createContext, ReactNode, useContext, useState } from "react";

interface IMessageContext {
  text: string;
  setText: (value: string) => void;
}

interface Props {
  children?: ReactNode;
}

export const MessageContext = createContext<IMessageContext | undefined>(
  undefined,
);

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

export const useMessageContext = (): IMessageContext | undefined => {
  const context = useContext(MessageContext);
  return context;
};
