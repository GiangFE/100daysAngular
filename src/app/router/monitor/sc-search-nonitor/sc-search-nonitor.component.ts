import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemData } from '../monitor';

@Component({
  selector: 'app-sc-search-nonitor',
  templateUrl: './sc-search-nonitor.component.html',
  styleUrls: ['./sc-search-nonitor.component.scss']
})
export class ScSearchNonitorComponent implements OnInit {

  listOfData: ItemData[] = [];
  sortAgeFn = (a: ItemData, b: ItemData): number => a.age - b.age;
  nameFilterFn = (list: string[], item: ItemData): boolean => list.some(name => item.name.indexOf(name) !== -1);
  filterName = [
    { text: 'Joe', value: 'Joe' },
    { text: 'John', value: 'John' }
  ];

  ngOnInit(): void {
    const data: ItemData[] = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M'
      });
    }
    this.listOfData = data;
  }

}
