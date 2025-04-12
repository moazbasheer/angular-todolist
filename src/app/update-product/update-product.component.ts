import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-product',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  id: any
  categories: any
  form: FormGroup
  constructor(private route: ActivatedRoute, private service: ProductsService, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.categories = this.service.get_products_categories().subscribe(data => {
      this.categories = data;
    });
    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
    this.service.get_product(this.id).subscribe((data: any) => {
      console.log(data);
      this.form = new FormGroup({
        title: new FormControl(data.title),
        description: new FormControl(data.description),
        category: new FormControl(data.category)
      });
    });
    
  }
  
  submit(id: any) {
    this.service.update_product(id, this.form.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['']);
    });
  }
}
