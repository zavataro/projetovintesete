import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, debounceTime, fromEvent, takeUntil } from 'rxjs';

export interface Menu {
  headTitle1?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  level?: number;
  children?: Menu[];
}

@Injectable({
  providedIn: 'root',
})

export class NavService {

  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  public collapseSidebar: boolean = window.innerWidth < 1200 ? true : false;
  private unsubscribe: Subject<any> = new Subject();

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize")
      .pipe(debounceTime(0), takeUntil(this.unsubscribe))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 1200) {
          this.collapseSidebar = true;
        } else {
          this.collapseSidebar = false;
        }
      });
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    {
      headTitle1: "Pages",
    },
    {
      level: 1,
      title: "Pages",
      icon: "sample-page",
      type: "sub",
      active: true,
      children: [
        { path: "/pages/first-page", title: "First Page", type: "link" },
        { path: "/pages/second-page", title: "Second Page", type: "link" },
      ],
    },
    { level: 1, path: "/single-page", title: "Single Page", icon: "sample-page", type: "link" },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}


