import { Category } from "../../../shared/Category";

export const libraryPage = {
  title: "Biblioteca",
  labels: {
    inputSearch: "Cerca libro",
    search: "Cerca",
    available: "Disponibili",
    filterBy: "Filtra per categoria",
  },
  defaultCategory: "Tutti",
  categories: {
    [Category.Algebra]: "Algebra",
    [Category.Calculus]: "Calcolo",
    [Category.Geometry]: "Geometria",
    [Category.Statistics]: "Statistica",
    [Category.Trigonometry]: "Trigonometria",
  },
  columns: {
    title: "Titolo",
    author: "Autore",
    category: "Categoria",
    available: "Disponibile",
  },
};
