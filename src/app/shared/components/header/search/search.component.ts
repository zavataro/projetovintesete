import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { RouterModule } from '@angular/router';
import { SvgIconsComponent } from '../../svg-icons/svg-icons.component';
import { FeatherIconsComponent } from '../../feather-icons/feather-icons.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-search',
    imports: [RouterModule, SvgIconsComponent,
        FeatherIconsComponent, FormsModule, TranslateModule, CommonModule],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  @Input() data : boolean;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor( public searchService: SearchService){

  }

  close(item:boolean){
     item = false;
    this.newItemEvent.emit(item);
  }
}
