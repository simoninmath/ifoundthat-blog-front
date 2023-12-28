import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ArticleService } from '../../articles/article-service.service';
import { Article } from '../../articles/article';

@Component({
  selector: 'app-search-smart',
  templateUrl: './search-smart.component.html',
  styleUrls: ['./search-smart.component.scss']
})

export class SearchSmartComponent implements OnInit {
  searchTerms = new Subject<string>();  // Subject is an RxJS library Object
  articles$: Observable<Article[]> | undefined;  // For create a flow with user's terms in a Table

  constructor(
    private router: Router,
    private articleService: ArticleService
    ) {
  }

  ngOnInit() { // Firstable, clean up the user search expression
    // {..."a"."ab"..."abz"."ab"...."abc"......}
    this.articles$ = this.searchTerms.pipe(
      debounceTime(300),
    // {......"ab"...."ab"...."abc"......}
      distinctUntilChanged(),
    // {......"ab"............"abc"......}
      switchMap((term) => this.articleService.searchArticleList(term)) // Then, call the server
    // {......articleList(ab).......articleList(abc).....}
      );
  }

  search(term: string) {
    this.searchTerms.next(term); // If a user search a term, this Method push the result of Subject
  }

  goToDetailArticle(article: Article) {
    const link = ['/articles', article.id]; // Construct the link where the user will be redirected according to article id
    this.router.navigate(link); // Redirect the user with Angular Router
  }

}
