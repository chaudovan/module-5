import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './product/edit/edit.component';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    EditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
          timeOut: 1000,
          progressBar: true,
          progressAnimation: 'increasing',
          preventDuplicates: true
        })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
