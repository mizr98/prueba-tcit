import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from "./post-list/post-list.component";
import { PostFilterComponent } from "./post-filter/post-filter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostFormComponent, PostFormComponent, PostListComponent, PostFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'post-app';
}
