import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutService } from '../../services/layout.service';
import { Menu, NavService } from '../../services/nav.service';
import { SearchService } from '../../services/search.service';
import { CommonSvgIconsComponent } from '../common-svg-icons/common-svg-icons.component';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';
import { SvgIconsComponent } from '../svg-icons/svg-icons.component';

@Component({
    selector: 'app-sidebar',
    imports: [RouterModule, CommonSvgIconsComponent, FeatherIconsComponent, CommonModule,
        SvgIconsComponent, TranslateModule, FormsModule],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

  public leftArrow: boolean = false;
  public rightArrow: boolean = true;
  public search_text: string = '';
  public width: number = window.innerWidth;
  public pinnedDataList: string[] = [];
  public menuItemsList = this.navService.MENUITEMS;
  public pinnedData: boolean = false;
  public itemsData: Menu[] = [];
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string;

  constructor(public navService: NavService,
    private router: Router,
    public layoutServices: LayoutService,
    public searchServices: SearchService
  ) {
    this.navService.items.subscribe((data) => {
      this.menuItemsList = data;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.menuItemsList.filter((items: Menu) => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) {
              return false;
            }
            items.children.filter((subItems: Menu) => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                return false;
              }
              subItems.children.filter((subSubItems: Menu) => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
              return;
            });
            return;
          });
        }
      });
    });
  }

  isPined(itemName: string | undefined): boolean {
    return itemName !== undefined && this.pinnedDataList?.includes(itemName);
  }

  pinned(title: string) {
    const index = this.pinnedDataList.indexOf(title);
    if (index !== -1) {
      this.pinnedDataList.splice(index, 1);
    } else {
      this.pinnedDataList.push(title);
    }
    if (this.pinnedDataList.length <= 0) {
      this.pinnedData = false;
    } else {
      this.pinnedData = true;
    }
  }

  toggleNavActive(item: Menu) {
    if (!item.active) {
      this.menuItemsList.forEach((a: Menu) => {
        if (this.menuItemsList.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: Menu) => {
          if (a.children?.includes(item)) {
            b.active = false;
          }
        });
        return;
      });
    }
    item.active = !item.active;
  }

  setNavActive(item: Menu) {
    this.menuItemsList.filter(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          } else {
            submenuItems.active = false;
          }
        });
      }
    });
  }

  closeMenu() {
    this.navService.collapseSidebar = !this.navService.collapseSidebar;
  }

  scrollToLeft() {
    this.rightArrow = true;
    if (this.layoutServices.margin != 0) {
      this.layoutServices.margin = this.layoutServices.margin + 500;
    }

    if (this.layoutServices.margin == 0) {
      this.leftArrow = false;
    }
  }

  scrollToRight() {
    this.leftArrow = true;
    if (this.layoutServices.margin != -3500) {
      this.layoutServices.margin = this.layoutServices.margin - 500;
    }
    if (this.layoutServices.margin == -3500) {
      this.rightArrow = false;
    }
  }
}
