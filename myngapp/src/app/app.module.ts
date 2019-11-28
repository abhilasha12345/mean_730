import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyserviceService } from './myservice.service'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
path:'',
component: PageComponent
},
{
path:'home',
component: PageComponent
},
{
path:'about',
component: AboutComponent
},
{
path:'contact',
component: ContactComponent
},
{
path:'service',
component: ServiceComponent
},
{
path:'register',
component: RegisterComponent
},
{
path:'login',
component: LoginComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    PageComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }








