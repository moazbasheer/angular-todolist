import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  categories: any
  form: FormGroup
  constructor(private service: ProductsService, private router: Router) {
    this.categories = this.service.get_products_categories().subscribe(data => {
      this.categories = data;
    });
    
    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }

  submit() {
    this.service.add_product(this.form.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['']);
    });
  }
}
