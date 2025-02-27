import { Component } from '@angular/core';
import { NavService } from '../../../services/nav.service';
import { TranslateService } from '@ngx-translate/core';

interface languageList {
  language: string;
  code: string;
  type?: string;
  icon: string;
}

@Component({
    selector: 'app-language',
    imports: [],
    templateUrl: './language.component.html',
    styleUrl: './language.component.scss'
})

export class LanguageComponent {

  public isLanguage: boolean = false;
  public languages: languageList[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'Español',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'Français',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'Português',
    code: 'pt',
    type: 'BR',
    icon: 'pt'
  }]

  public selectedLanguage: languageList = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }

  constructor(public navServices: NavService, public translateService: TranslateService) { }

  changeLanguage(lang: languageList) {
    this.translateService.use(lang.code);
    this.selectedLanguage = lang;
    this.isLanguage = false;
  }


}
