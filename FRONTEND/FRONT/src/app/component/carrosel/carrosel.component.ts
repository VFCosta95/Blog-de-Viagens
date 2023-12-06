import { Component } from '@angular/core';
import { ViagensPostService } from 'src/app/service/viagens-post.service';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css']
})
export class CarroselComponent {
  dados: any[] = [];

  constructor(private service: ViagensPostService){ }

  ngOnInit(): void {
    this.buscarDados();
  }

  buscarDados(){
    this.service.consumirDados().subscribe((data) => {
      this.dados = data
      console.log(this.dados)
    })
  }
}
