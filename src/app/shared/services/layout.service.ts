import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LayoutService {

  public customize : string = '';
  public margin = 0;

  constructor() { }
  
  public config = {
    settings: {
      layout_type: 'ltr',
      layout_version: 'dark-sidebar',
      sidebar_type: 'compact-wrapper',
    },
    color: {
      primary_color: '#009DB5',
      secondary_color: '#F94C8E',
    },
  };
}
