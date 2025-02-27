import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

export default [

  {
    path: "first-page",
    component: FirstPageComponent,
    data: {
      title: 'First page',
      breadcrumb: 'First page'
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

