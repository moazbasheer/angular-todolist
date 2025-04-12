import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup
  
  constructor(private service: UsersService, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  submit() {
    this.form.value.username = this.form.value.email;
    this.service.login(this.form.value).subscribe((data: any) => {
      localStorage.setItem('token', data.accessToken);
      this.router.navigate(['']);
    });
  }
}
