import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NiraSnackBarService } from 'nira-snack-bar';
import * as XLSX from 'xlsx';

@Directive({
  selector: '[exportExcelTable]',
})
export class ExportExcelTableDirective {
  constructor(
    private niraSnackBar: NiraSnackBarService,
    private el: ElementRef
  ) {}

  @HostListener('click') onMouseUp() {
    this.exportExcel();

    this.niraSnackBar.show('با موفقیت کپی شد', {
      statusClass: 'success',
      duration: 3000,
    });
  }
  exportExcel() {
    let element = document.getElementById('coreTable');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }
}
