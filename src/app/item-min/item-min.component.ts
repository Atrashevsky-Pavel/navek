import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-min',
  templateUrl: './item-min.component.html',
  styleUrls: ['./item-min.component.scss']
})
export class ItemMinComponent{
  @Input() item;
}
