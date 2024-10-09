import { Category } from "../shared/Category";
import { IBook } from "../models/Book";
import { IBeBook } from "../models/BeBook";

interface BadRequest {
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

export function useBooksService() {
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

  const getAllBooks = async () => {
    const url = `${BASEURI}/books`;
    const options = {
      method: "GET",
    };
    const data = await fetch(url, options).then((response) =>
      responseHandler(response),
    );
    return data;
  };

  const buildBookList = async (callback: (list: IBook[]) => void) => {
    const list = await getAllBooks().then((data) => {
      const list: IBook[] = [];
      if (Array.isArray(data)) {
        data.forEach((element) => {
          const beCatory = element.category;
          list.push({
            title: element.title,
            author: element.author,
            available: element.available.toLowerCase() === "y",
            category: Category[beCatory],
          });
        });
      }
      return list;
    });
    callback(list);
  };

  return { buildBookList };
}
