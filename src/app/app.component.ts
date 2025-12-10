import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatIcon, MatFormField, MatLabel, MatSelect, MatOption, ReactiveFormsModule, NgForOf, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly title = signal('angular-20-remote');

  form = new FormControl<Status[]>([], {nonNullable: true});

  statuses = Object.values(Status);

  constructor() {
  }

  protected applyClicked() {
    console.log('clicked');
  }
}

export enum Status {
  Proposed = 'proposed',
  Active = 'active',
  Suspended = 'suspended',
  Inactive = 'inactive',
  EnteredInError = 'entered-in-error',
}
