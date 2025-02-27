import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

export default [

  {
    path: "first-page",
    component: FirstPageComponent,
    data: {
      title: 'Dashboard',
      breadcrumb: 'dashboard'
    }
  },
  {
    path: "second-page",
    component: SecondPageComponent,
    data: {
      title: 'Second Page',
      breadcrumb: 'Second Page'
    }
  },
]

