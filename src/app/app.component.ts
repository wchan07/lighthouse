import { Component } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { IEmployee, IPapaMeta, IPapaResult } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lighthouse';
  dataSet: IPapaResult;
  selectedEmployee: IEmployee;

  constructor(private papa: Papa) {}

  openCsv($event: any) {
    const files: FileList = $event.target.files;

    if (files && files.length > 0) {
      const file: File = files.item(0);

      const reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        const csv: string = reader.result as string;
        this.parseCsv(csv);
      };
    }
  }

  parseCsv(csvData: string) {
    this.papa.parse(csvData, {
      header: true,
      complete: (result: IPapaResult) => {
        this.dataSet = result;
        console.log('Parsed: ', this.dataSet);
      }
    });
  }

  onSelect(selected: IEmployee) {
    this.selectedEmployee = selected;
  }

  printSelected(): string {
    let output: string = '';
    Object.keys( this.selectedEmployee ).forEach( key => output += key + ': ' + this.selectedEmployee[key] + ', ');
    return output;
  }
}
