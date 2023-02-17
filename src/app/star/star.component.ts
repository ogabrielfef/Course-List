import { Component, Input, OnChanges } from "@angular/core";

@Component({
  // selector é usada quando iremos usar o component como 'tag' 
  // ou seja é uma nomeclatura para o mesmo
  selector: 'app-star',
  // templateUrl é para linkar o component.ts ao seu respectivo template component.html
  templateUrl: './star.component.html',
  // styleUrls é usado para linkar uma estilização especifica diretamente ao component
  styleUrls: ['./star.component.css'],
})

export class StarComponent implements OnChanges {

  @Input()
  rating: number = 0;

  starWidth!: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 74 / 5;
  }

}