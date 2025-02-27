import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
//import { FeatherIconsComponent } from '../../shared/components/feather-icons/feather-icons.component';

@Component({
    selector: 'app-login',
    imports: [RouterModule, ReactiveFormsModule], //FeatherIconsComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})

export class LoginComponent {

  public show: boolean = false;
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, public router: Router) {
    const userData = localStorage.getItem('user');
      if(userData?.length != null){
        router.navigate(['/dashboard/default'])
      }
      
    this.loginForm = this.fb.group({
      email: ["Test@gmail.com", [Validators.required, Validators.email]],
      password: ["test123", Validators.required],
    });

  }

  ngOnInit() { }

  showPassword() {
    this.show = !this.show;
  }

  login() {
    if (this.loginForm.value["email"] == "Test@gmail.com" && this.loginForm.value["password"] == "test123") {
      let user = {
        email: "Test@gmail.com",
        password: "test123",
        name: "test user",
      };
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["/dashboard/default"]);
    }
  }

}
