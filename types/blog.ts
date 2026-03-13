export interface Author {
  name: string;
  avatar: string;
}

export interface Category {
  name: string;
  slug: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: Author;
  categories: Category[];
}
