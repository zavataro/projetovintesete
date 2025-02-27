import { Routes } from "@angular/router";
import { SinglePageComponent } from "../../components/single-page/single-page.component";

export const content: Routes = [
    {
      path: 'pages',
      loadChildren: () => import('../../components/simple-page/simple-page.routes'),
      data: {
        title: "Pages",
        breadcrumb: "Pages",
      }
    },
    {
      path: 'single-page',
      component: SinglePageComponent,
      data: {
        title: 'Single Page',
        breadcrumb: 'Single Page'
      }
    },
  ]