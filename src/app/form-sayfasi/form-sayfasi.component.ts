import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-sayfasi',
  templateUrl: './form-sayfasi.component.html',
  styleUrls: ['./form-sayfasi.component.css']
})
export class FormSayfasiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
nodeForm=new FormGroup({
  baslik: new FormControl(''),
  icerik:new FormControl(''),
  kategori:new FormControl(''),
  tarih:new FormControl('')
});
deneme(){
  console.log(this.nodeForm.value)
}
}
