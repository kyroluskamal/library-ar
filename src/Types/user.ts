// export type Admin = { type: 'admin'; Payload: IUserResponse };
// export type Hr = { type: 'hr'; Payload: IUserResponse };
// export type Guest = { type: 'guest'; Payload: IUserResponse };
// export type User = Admin | Hr | Guest;

export class User {
  id: number = 0;
  firstName: string = 'John';
  lastName: string = 'Doe';
  email: string = 'JonhDoe@gmail.com';
  role: string = 'admin';
}

// export class Admin extends User {
//   constructor() {
//     super('admin', 'Hello Admin', 'bg-red');
//   }
// }

// export class Hr extends User {
//   constructor() {
//     super('hr', 'Hello HR', 'bg-blue');
//   }
// }

// export class Guest extends User {}

// export interface IUserResponse {
//   getResponse(): string;
// }

// export class AdminResponse implements IUserResponse {
//   getResponse() {
//     return 'Hello Admin';
//   }
// }

// export class HrResponse implements IUserResponse {
//   getResponse() {
//     return 'Hello HR';
//   }
// }

// export class GuestResponse implements IUserResponse {
//   getResponse() {
//     return 'Hello Guest';
//   }
// }
