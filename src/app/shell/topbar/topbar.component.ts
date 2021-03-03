import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakPointService } from 'src/app/_core/services';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  public hidden = false;
  public isHandset$!: Observable<boolean>;
  @Output('toggleSideBar') clickMenu = new EventEmitter();

  constructor(private _route: ActivatedRoute, private _bpService: BreakPointService) {}

  ngOnInit(): void {
    this.isHandset$ = this._bpService.isHandset();
    // TODO GEt current route and match to hide topbar
    console.log(this._route.children);
    
  }

}
