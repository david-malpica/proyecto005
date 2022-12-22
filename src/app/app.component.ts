import { Component } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos:any;
  constructor(private articuloServicio: ArticulosService){}
  ngOnInit(){
    this.articuloServicio.retornar()
    .subscribe(result=> this.articulos=result);
  }
}
