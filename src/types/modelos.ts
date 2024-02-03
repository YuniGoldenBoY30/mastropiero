export const API_BASE = {
  url: 'https://jsonplaceholder.typicode.com',
};

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
