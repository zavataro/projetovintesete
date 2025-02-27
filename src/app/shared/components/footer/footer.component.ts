import { Component } from '@angular/core';
import { LanguageComponent } from './language/language.component';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';


@Component({
    selector: 'app-footer',
    imports: [LanguageComponent, FeatherIconsComponent],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  public year = new Date().getFullYear()

}
