import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FullyComponent } from '../fully/fully.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FullyComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  firstname:string=''
lastname:string=''
  addres:string=''
  phone:string=''
  email:string=''
  password:string=''
  
  gender:string=''
  state:string=''
  regstatus:string=''
  nextofkin:string=''
  relationship:string=''
  nextphone:string=''
 websiteData: any []=[]
emanifestForm:any

realA=''
realB=''
realC=''

constructor(public dataService:DataService, public router: Router, public formbuilder:FormBuilder){
  this.emanifestForm = this.formbuilder.group({
    firstname: new UntypedFormControl ('', Validators.compose([Validators.required])),
    lastname: new UntypedFormControl ('', Validators.compose([Validators.required])),
    addres: new UntypedFormControl ('', Validators.compose([Validators.required])),
    phone: new UntypedFormControl ('', Validators.compose([Validators.required])),
    email: new UntypedFormControl ('', Validators.compose([Validators.required])),
    password: new UntypedFormControl ('', Validators.compose([Validators.required])),
    gender: new UntypedFormControl ('', Validators.compose([Validators.required])),
    state: new UntypedFormControl ('', Validators.compose([Validators.required])),
    regstatus: new UntypedFormControl ('', Validators.compose([Validators.required])),
    nextofkin: new UntypedFormControl ('', Validators.compose([Validators.required])),
    relationship: new UntypedFormControl ('', Validators.compose([Validators.required])),
    nextphone: new UntypedFormControl ('', Validators.compose([Validators.required])),
  });}

pushUp(){
  this.dataService.writeMe(
    this.emanifestForm.get('firstname').value,
    this.emanifestForm.get('lastname').value,
    this.emanifestForm.get('addres').value,
    this.emanifestForm.get('phone').value,
    this.emanifestForm.get('email').value,
    this.emanifestForm.get('password').value,
    this.emanifestForm.get('gender').value,
    this.emanifestForm.get('state').value,
    this.emanifestForm.get('regstatus').value,
    this.emanifestForm.get('nextofkin').value,
    this.emanifestForm.get('relationship').value,
    this.emanifestForm.get('nextphone').value
    
  
 )
console.log(
  this.emanifestForm.get('firstname').value,
  this.emanifestForm.get('lastname').value,
  this.emanifestForm.get('addres').value,
  this.emanifestForm.get('phone').value,
  this.emanifestForm.get('email').value,
  this.emanifestForm.get('password').value,
  this.emanifestForm.get('gender').value,
  this.emanifestForm.get('state').value,
  this.emanifestForm.get('regstatus').value,
  this.emanifestForm.get('nextofkin').value,
  this.emanifestForm.get('relationship').value,
  this.emanifestForm.get('nextphone').value
);}

ngOnInit(){
  this.getWebsiteData ()
}
getWebsiteData(){
  this.dataService.getWebsiteData().subscribe((res:any)=> {
    this.websiteData = res;
  //this.appService.updatedWebsiteData= res;
  console.log(this.websiteData);
  this.realA= this.getwebsiteText('fully-icon')
  this.realB= this.getwebsiteText('full-header')
  this.realC= this.getwebsiteText('full-subhead')
});
}

  getwebsiteText(desiredUid:any){
const myObject = this.websiteData.find((obj:any)=>obj.id === desiredUid)
if (myObject){
  return myObject.text;
} else{
  return null}}
}