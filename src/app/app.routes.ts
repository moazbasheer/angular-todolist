import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { authGuardGuard } from './gaurds/auth-guard.guard';
import { notAuthGuard } from './gaurds/not-auth.guard';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent, canActivate: [notAuthGuard]},
    {path: "", component: IndexComponent, canActivate: [authGuardGuard]},
    {path: "register", component: RegisterComponent, canActivate: [notAuthGuard]},
    {path: "add-product", component: AddProductComponent, canActivate: [authGuardGuard]},
    {path: "edit-product/:id", component: UpdateProductComponent, canActivate: [authGuardGuard]}
];
