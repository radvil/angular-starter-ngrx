import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BreakPointService } from 'src/app/_core/services';
import { menuList } from '../menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy {
  public menuList = menuList;
  private isHandset!: boolean;
  private _destroy$ = new Subject();
	@Output('toggleSideBar') onToggled = new EventEmitter<any>();

  constructor(private _bpService: BreakPointService) {
    this._bpService
      .isHandset()
      .pipe(
        takeUntil(this._destroy$)
      )
      .subscribe(isHandset => this.isHandset = isHandset);
  }

  closeOnClicked(): void {
    if (this.isHandset) this.onToggled.emit();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
  
}
