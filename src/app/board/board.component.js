import { Component } from '@angular/core';
import { RowComponent } from 'app/row/row.component';
import { AddRowBtnComponent } from 'app/add-row-btn/add-row-btn.component';
import { FlashMessageComponent } from 'app/flash-message/flash-message.component';
import { RowService } from 'service/row.service';

@Component({
  selector: 'cards-board',
  providers: [RowService],
  directives: [
    RowComponent,
    AddRowBtnComponent,
    FlashMessageComponent
  ],
  template: require('./board.component.html'),
  styles: [require('./board.component.css')],
})
export class BoardComponent {
  static get parameters() {
    return [[RowService]]
  }

  constructor(rowService) {
    this.rowService = rowService;
  }

  ngOnInit() {
    this.rowService.getServerData();
  }

  addRow() {
    this.rowService.addRow();
  }

  removeRow(row) {
    this.rowService.removeRow(row);
  }

  updateRowTitle({row, title}) {
    this.rowService.updateRowTitle(row, title);
  }
}