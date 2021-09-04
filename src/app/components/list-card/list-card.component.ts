import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  fruits : any = [] ;
  constructor(private FruitsService: FruitsService) { }

  ngOnInit(): void {
    this.FruitsService.getFruits().subscribe((fruits)=> { 
        console.log(fruits);
        
      this.fruits= fruits
    })
  }

}
