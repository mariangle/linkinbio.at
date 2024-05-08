export interface User {
  id: string;
  username: string;
  email: string;
  title?: string;
  image?: string;
  occupation?: string;
  location?: string;
  bio?: string;
  premium: boolean;
}
