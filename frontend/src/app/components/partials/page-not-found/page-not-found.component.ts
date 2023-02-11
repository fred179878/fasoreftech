import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  @Input()
  visible = false;

  @Input()
  notFoundMessage = "Aucun article trouvé!";

  @Input()
  resetLinkText = "Reset";

  @Input()
  resetLinkRoute = "/";


  ngOnInit(): void {

  }

}
