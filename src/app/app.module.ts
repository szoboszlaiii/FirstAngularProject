import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PostCreateComponent } from './post-create/post-create.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
//import { MatButtonModule } from '@material/button';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostComponent,
    PostsComponent,
    ContactComponent,
    AboutComponent,
    PostCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPageScrollCoreModule.forRoot({ 
      duration: 1500 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
