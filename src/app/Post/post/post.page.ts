import { Component, OnInit } from '@angular/core';
import { ServicePostsService } from 'src/app/Servico/service-posts.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  post: any;
  public postArray: any[];
  private index: number = 0;
  private readonly offset: number = 10;
  valor = 0;



  constructor(private postService: ServicePostsService) {
    setTimeout(() => {
      this.valor += .05;
    }, 5000);
  }
  ngOnInit() {
  }

}
