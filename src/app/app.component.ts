import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/components.component';
import { TransfereService } from './data.service';
import { Injectable } from '@angular/core';
import dataSet from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@Injectable({ providedIn: 'any' })
export class AppComponent implements OnInit {
  private _jsonURL = '../assets/data.json';

  public dataSource: any[] = [];

  public displayedColumns = ['Name', 'User Type', 'Entity', 'Status', 'Action'];

  public email: any;

  constructor(private http: HttpClient, public dialog: MatDialog, private transfereService: TransfereService) {
    // console.log(this.data);
  }

  ngOnInit() {
    this.getData().subscribe((data) => (this.dataSource = data));
    this.transfereService.myMethod$.subscribe((data) => {
      this.dataSource = [...this.dataSource, data];
    });
  }

  public getDataSharing() {}

  public getData(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  public editData(params: any) {
    const findData = this.dataSource.find((x) => x._id === params);

    const dia = this.dialog.open(ModalComponent, {
      width: '3000px',
      data: {
        data: findData,
      },
    });

    dia.afterClosed().subscribe((x) => console.log(x));
  }

  public openDialog(): void {
    const dia = this.dialog.open(ModalComponent, {
      width: '3000px',
    });

    dia.afterClosed().subscribe((x) => console.log(x));
  }

  public deleteData(param: any) {
    this.dataSource = this.dataSource.filter((x: any) => x._id !== param);
  }

  public searchData(param: any, field: any) {
    this.dataSource = dataSet;
    if (field === 'user_status') {
      this.dataSource = this.dataSource.filter((x) => x.user_status === param);
    }
    if (field === 'first_name') {
      this.dataSource = this.dataSource.filter((x) => x.first_name.toLowerCase().includes(param.target.value.toLowerCase()));
    }
  }
  public resetFilter() {
    this.dataSource = dataSet;
  }
}
