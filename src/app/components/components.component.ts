import { Component, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import data from '../../assets/data.json';
import swal from 'sweetalert2';
import { TransfereService } from '../data.service';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  providers: [MatDialogModule],
})
@Injectable({ providedIn: 'any' })
export class ModalComponent implements OnInit {
  public myForm!: FormGroup;
  public isEmailValid: boolean = false;

  public message: string = '';

  public dataGetOne: any = null;

  ngOnInit() {
    console.log(this.dataGet.email);
    this.myForm.patchValue({ email: this.dataGet.email });
  }

  constructor(public dialogRef: MatDialogRef<ModalComponent>, private myService: TransfereService, @Inject(MAT_DIALOG_DATA) public dataGet: any) {}

  public onClick() {
    this.dialogRef.close('Closed');
  }

  public checkEmail(value: any) {
    const filtered = data.filter((x) => x.email === value);
    const isAvailable = filtered.length === 1;
    if (isAvailable) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email Already Registered',
      });
    } else {
      this.isEmailValid = true;
      swal.fire('Great', 'Email is Available', 'success');
    }
  }
  public sendData(value: any) {
    const newData = {
      id: data.length + 1,
      email: value.email,
      civility: value.civility,
      first_name: value.first_name,
      last_name: value.last_name,
      company: {
        name: 'Company',
        user_type: value.user_type,
      },
      user_status: 'pending',
      count_document: 15,
    };
    this.myService.myMethod(newData);
    this.dialogRef.close('Pizza!');
  }
}
