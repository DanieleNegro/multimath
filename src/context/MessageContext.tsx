import React, { createContext, ReactNode, useContext, useState } from "react";

interface IMessageContext {
  text: string;
  setText: (value: string) => void;
}

interface Props {
  children?: ReactNode;
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
  const context = useContext(MessageContext);
  return context;
};
