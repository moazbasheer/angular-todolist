import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: FormGroup

  constructor(private _UsersService: UsersService, private router: Router) {
    this.form = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  submit() {
    this._UsersService.register(this.form.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/login']);
    });
  }
}
