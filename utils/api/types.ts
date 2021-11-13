export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginDto;

export type ResponseUser = {
  created_at: string;
  email: string;
  fullName: string;
  id: number;
  token: string;
  updated_at: string;
};