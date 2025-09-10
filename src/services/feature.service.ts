import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagService {
  getFlags$() {
    return new Observable<{ newHome: boolean }>((observer) => {
      setTimeout(() => {
        observer.next({ newHome: Math.random() > 0.5 });
        observer.complete();
      }, 1000);
    });
  }

  getFlagsPromise(): Promise<{ newHome: boolean }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ newHome: Math.random() > 0.5 });
      }, 1000);
    });
  }

  getFlags(): { newHome: boolean } {
    return { newHome: true };
  }
}
