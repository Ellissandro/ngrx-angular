export interface UserState {
  users: User[],
  user?: User,
}

export interface User {
  id: string;
  name: string;
  age: number
}