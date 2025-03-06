import { IBeBook } from "../models/BeBook";

export interface BadRequest {
  code: "bad_request";
  message: string;
}

type LibraryResponse =
  | (Omit<Response, "json"> & {
      status: 200;
      json: () =>
        | IBeBook
        | IBeBook[]
        | PromiseLike<IBeBook>
        | PromiseLike<IBeBook[]>;
    })
  | (Omit<Response, "json"> & {
      status: 400;
      json: () => BadRequest | PromiseLike<BadRequest>;
    });

const BASEURI = "/api/library";

const marshalResponse = (res: LibraryResponse) => {
  if (res.status === 200) return res.json();
  if (res.status === 400) return res.json();
  return Error("Unhandled response code");
};

const responseHandler = (response: Response) => {
  const res = response as LibraryResponse;
  return marshalResponse(res);
};

export const getAllBooks = async () => {
  const url = `${BASEURI}/books`;
  const options = {
    method: "GET",
  };
  const data = await fetch(url, options).then((response) =>
    responseHandler(response),
  );
  return data;
};

export const getAvailableBooks = async () => {
  const url = `${BASEURI}/books/available`;
  const options = {
    method: "GET",
  };
  const data = await fetch(url, options).then((response) =>
    responseHandler(response),
  );
  return data;
};

export const getBooksByCategory = async (category: number) => {
  const url = `${BASEURI}/search/${category}`;
  const options = {
    method: "GET",
  };
  const data = await fetch(url, options).then((response) =>
    responseHandler(response),
  );
  return data;
};

export const getBooksByTerm = async (term: string) => {
  const url = `${BASEURI}/search?term=${term}`;
  const options = {
    method: "GET",
  };
  const data = await fetch(url, options).then((response) =>
    responseHandler(response),
  );
  return data;
};
