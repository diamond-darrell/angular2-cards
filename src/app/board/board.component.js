import { Component } from '@angular/core';
import { RowComponent } from 'app/row';
import { AddRowBtnComponent } from 'app/add-row-btn';
import { FlashMessageComponent } from 'app/flash-message';
import { RowService } from 'service/row';
import { FlashMessageService } from 'service/flash-message';
import { Row } from 'model/row';

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
