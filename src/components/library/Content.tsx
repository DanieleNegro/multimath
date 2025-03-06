import available from "../../assets/available.png";
import notAvailable from "../../assets/notAvailable.png";
import { useBookContext } from "../../context/BookContext";

const Content: React.FC = () => {
  const { books } = useBookContext();
  return (
    <div className="container-fluid mx-0 mt-3 px-5 d-flex justify-content-center flex-column">
      <div key="book" className="row d-flex text-center">
        <div className="col-4 bg-orange header border-end border-bottom">
          <h4>Title</h4>
        </div>
        <div className="col-4 bg-orange header border-end border-bottom">
          <h4>Author</h4>
        </div>
        <div className="col-2 bg-orange header border-bottom">
          <h4>Category</h4>
        </div>
        <div className="col-2 bg-orange header border-bottom">
          <h4>Available</h4>
        </div>
      </div>
      {books.map((book, index) => {
        return (
          <div key={`book${index}`} className="row d-flex highlight">
            <div className="col-4 border-bottom py-2">{book.title}</div>
            <div className="col-4 border-bottom py-2">{book.author}</div>
            <div className="col-2 border-bottom py-2 text-center">
              {book.category}
            </div>
            <div className="col-2 border-bottom py-2 text-center">
              {book.available ? (
                <img height="20" width="20" src={available} alt="available" />
              ) : (
                <img
                  height="20"
                  width="20"
                  src={notAvailable}
                  alt="not available"
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
