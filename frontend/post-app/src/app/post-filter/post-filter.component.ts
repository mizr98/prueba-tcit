import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostState } from '../store/post.reducer';
import { Post } from '../models/post.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-filter',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './post-filter.component.html',
  styleUrl: './post-filter.component.css'
})
// export class PostFilterComponent {
//   filter: string = '';

//   constructor(private store: Store<{ posts: PostState }>) {}

//   get filteredPosts(): Post[] {
//     let posts: Post[];
//     this.store.select(state => state.posts.posts).subscribe(p => posts = p);
//     return posts.filter(post => post.nombre.includes(this.filter));
//   }
// }

export class PostFilterComponent  {
  filter: string = '';
  filteredPosts: Post[] = [];
  private postsSubscription: Subscription | undefined;

  constructor(private store: Store<{ posts: PostState }>) {}

  ngOnInit() {
    // Suscribirse a las publicaciones y aplicar el filtro inicial
    this.postsSubscription = this.store.select(state => state.posts.posts).subscribe(posts => {
      this.applyFilter(posts);
    });
  }

  ngOnDestroy() {
    // Limpia la suscripción al destruir el componente
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

  updateFilter() {
    this.store.select(state => state.posts.posts).subscribe(posts => {
      this.applyFilter(posts);
    });
  }
  
  updateOnChangeFilter(newFilter: string){
    this.filter = newFilter;
    // Actualiza el filtro basado en el nuevo valor
    if(this.filter == ''){
      this.store.select(state => state.posts.posts).subscribe(posts => {
        this.applyFilter(posts);
      });
    }
    
  }

  private applyFilter(posts: Post[]) {
    if (this.filter.trim() || this.filter!='') {
      this.filteredPosts = posts.filter(post => post.nombre.toLowerCase().includes(this.filter.toLowerCase()));
    } else {
      // Si el campo de filtro está vacío, muestra todas las publicaciones
      this.filteredPosts = [];
    }
    // this.filteredPosts = posts.filter(post => post.nombre.toLowerCase().includes(this.filter.toLowerCase()));
  }
}
