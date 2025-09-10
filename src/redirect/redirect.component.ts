import { Component, inject } from '@angular/core';
import { FeatureFlagService } from '../services/feature.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  standalone: false,
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.scss',
})
export class RedirectComponent {
  readonly featureSewrvice = inject(FeatureFlagService);
  readonly router = inject(Router);
  ngOnInit() {
    this.featureSewrvice.getFlags$().subscribe((flags) => {
      const target = flags.newHome ? 'new-home' : 'home';
      this.router.navigate([target]);
    });
  }
}
