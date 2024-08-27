import { Component } from '@angular/core';
import { User } from '../Types/user';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <table>
      <thead>
        <tr>
          @for(col of columns; track col){

          <th>{{ col }}</th>
          }
        </tr>
      </thead>
      <tbody>
        @for(user of users; track user.id; let i = $index; let isEven = $even;
        let isOdd = $odd; let isFirst = $first; let isLast = $last){
        <tr
          [class]="{
            striped: isOdd,
            first: isFirst,
            last: isLast
          }"
        >
          <td>{{ i + 1 }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
        </tr>
        }@empty {
        <tr>
          <td colspan="5" style="text-align: center;">No data found</td>
        </tr>
        } @for( i of [].constructor(repearCount); track i){

        <p>paragraph to repeat</p>
        }
      </tbody>
    </table>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Coding Bible library';
  currentUser: User = new User();
  repearCount = 7;
  columns = ['id', 'First name', 'Last name', 'Email', 'Role'];
  users: User[] = [
    // {
    //   id: 1,
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   email: 'JonhDoe@gmail.com',
    //   role: 'admin',
    // },
    // {
    //   id: 2,
    //   firstName: 'Jane',
    //   lastName: 'Smith',
    //   email: 'JaneSmith@gmail.com',
    //   role: 'user',
    // },
    // {
    //   id: 3,
    //   firstName: 'Michael',
    //   lastName: 'Johnson',
    //   email: 'MichaelJohnson@gmail.com',
    //   role: 'editor',
    // },
    // {
    //   id: 4,
    //   firstName: 'Emily',
    //   lastName: 'Brown',
    //   email: 'EmilyBrown@gmail.com',
    //   role: 'user',
    // },
    // {
    //   id: 5,
    //   firstName: 'David',
    //   lastName: 'Williams',
    //   email: 'DavidWilliams@gmail.com',
    //   role: 'moderator',
    // },
    // {
    //   id: 6,
    //   firstName: 'Sarah',
    //   lastName: 'Davis',
    //   email: 'SarahDavis@gmail.com',
    //   role: 'admin',
    // },
  ];
  trakByFn(index: number, user: User) {
    return user.id;
  }
}
