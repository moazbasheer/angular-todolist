import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [FormsModule, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  products: any
  constructor(private router: Router, private service: ProductsService) {
    this.service.get_all_products().subscribe((data: any) => {
      this.products = data.products;
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  delete_product(id: any) {
    this.service.delete_product(id).subscribe((data: any) => {
      console.log(data);
      window.location.reload();
    });
  }
}
