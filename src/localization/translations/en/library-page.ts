import { Category } from "../../../shared/Category";

export const libraryPage = {
  title: "Library",
  labels: {
    inputSearch: "Search Book",
    search: "Search",
    available: "Available",
    filterBy: "Filter by category",
  },
  defaultCategory: "All",
  categories: {
    [Category.Algebra]: "Algebra",
    [Category.Calculus]: "Calculus",
    [Category.Geometry]: "Geometry",
    [Category.Statistics]: "Statistics",
    [Category.Trigonometry]: "Trigonometry",
  },
  columns: {
    title: "Title",
    author: "Author",
    category: "Category",
    available: "Available",
  },
};
