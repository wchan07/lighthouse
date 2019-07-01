import {Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter} from '@angular/core';
import {IEmployee} from '../interfaces';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {
  searchTerm: string = '';
  @Input()
  searchList: IEmployee[];

  results: IEmployee[] = [];

  @Output()
  selectedItem = new EventEmitter();

  isVisible: boolean = false;

  @ViewChild('textInput') textInput: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  search() {
    this.results = this.getResults();
  }

  selectOption(item: IEmployee) {
    this.isVisible = false;
    this.textInput.nativeElement.value = (item.name);
    this.selectedItem.emit(item);
  }

  getResults(): IEmployee[] {
    const results = this.searchList.filter( item =>
      item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
        (item.first.toLowerCase() + ' ' + item.last.toLowerCase()).indexOf(this.searchTerm.toLowerCase()) > -1 );

    this.isVisible = !!(results && results.length);

    return results;
  }
}
