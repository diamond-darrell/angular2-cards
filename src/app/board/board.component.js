import { Component } from '@angular/core';
import { RowComponent } from 'app/row/row.component';
import { AddRowBtnComponent } from 'app/add-row-btn/add-row-btn.component';
import { FlashMessageComponent } from 'app/flash-message/flash-message.component';
import { RowService } from 'service/row/row.service';
import { FlashMessageService } from 'service/flash-message.service';
import { Row } from 'model/row/row.model';

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
  fmData: {type: string, message: string} = {};

  constructor(rowService: RowService, fmService: FlashMessageService): void {
    this.rowService = rowService;

    this.subscription = fmService.showFleshMessage$.subscribe(
      (params: {type: string, message: string}) => {
        this.fmData = params;
      }
    );
  }

  ngOnInit(): void {
    this.rowService.getServerData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addRow(): void {
    this.rowService.addRow();
  }

  removeRow(row: Row): void {
    this.rowService.removeRow(row);
  }

  updateRowTitle({ row, title }: { row: Row, title: string }): void {
    this.rowService.updateRowTitle(row, title);
  }
}
