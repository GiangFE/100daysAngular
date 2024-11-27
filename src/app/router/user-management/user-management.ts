export class ItemData {
  id?: any;
  name?: string;
  age?: string;
  address?: string;
}

export interface UserModel {
  userId: string;
  name: string;
  password: string;
  email: string;
  role: string;
  isActivce: boolean;
}
