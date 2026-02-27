import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';

export interface IUser {
  id: number;
  name: string;
  password: string;
  email: string;
  role: 'admin' | 'user';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'user';

  private readonly users: IUser[] = [
    {
      id: 1,
      name: 'John Doe',
      password: '123',
      email: 'jhon@gmail.com',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Jane Smith',
      password: '456',
      email: 'jane@gmail.com',
      role: 'user',
    },
  ];

  login(email: string, password: string): Observable<IUser> {
    const user = this.users.find(
      (currentUser) =>
        currentUser.email === email && currentUser.password === password,
    );

    if (!user) {
      return throwError(() => new Error('Invalid email or password'));
    }

    localStorage.setItem(this.storageKey, JSON.stringify(user));
    return of(user);
  }

  getCurrentUser(): IUser | null {
    const userJson = localStorage.getItem(this.storageKey);

    if (!userJson) {
      return null;
    }

    try {
      return JSON.parse(userJson) as IUser;
    } catch {
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }
  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }
  isAdmin(): boolean {
    return this.getCurrentUser()?.role === 'admin';
  }
}
