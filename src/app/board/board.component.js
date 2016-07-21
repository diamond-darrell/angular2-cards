import { Component } from '@angular/core';
import { RowComponent } from 'app/row/row.component';
import { AddRowBtnComponent } from 'app/add-row-btn/add-row-btn.component';
import { FlashMessageComponent } from 'app/flash-message/flash-message.component';
import { RowService } from 'service/row.service';
import { FlashMessageService } from 'service/flash-message.service';

@Component({
  selector: 'cards-board',
  providers: [RowService],
  directives: [
    RowComponent,
    AddRowBtnComponent,
    FlashMessageComponent,
  ],
  template: require('./board.component.html'),
  styles: [require('./board.component.css')],
})
export class BoardComponent {
  fmData = {};

  constructor(rowService: RowService, fmService: FlashMessageService) {
    this.rowService = rowService;

    this.subscription = fmService.showFleshMessage$.subscribe(
      params => {
        this.fmData = params;
      }
    );
  }

  ngOnInit() {
    this.rowService.getServerData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addRow() {
    this.rowService.addRow();
  }

  removeRow(row) {
    this.rowService.removeRow(row);
  }

  updateRowTitle({ row, title }) {
    this.rowService.updateRowTitle(row, title);
  }
}
