import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-donor',
  templateUrl: './show-donor.component.html',
  styleUrls: ['./show-donor.component.css']
})
export class ShowDonorComponent implements OnInit {

  constructor(private service:SharedService) { }

  DonorList:any=[];
  ModelTitle:string;
  //ModelTitle1:string;
  ActivateAddDonorComp:boolean=false;
  //ActivateAddDonorComp1:boolean=false;
  don:any;
  //don1:any;
  ngOnInit(): void {
    this.refreshDonorList();

  }
 

  addClick(){
    this.don={
      DonorId:0,
      DonorName:"",
      DonorMobile:"",
      DateOfJoining:""
    }
    this.ModelTitle="Add Donor"
    this.ActivateAddDonorComp=true

  }

  closeClick(){
    this.ActivateAddDonorComp=false
    this.refreshDonorList(); 
  }

  refreshDonorList(){
    this.service.getDonorList().subscribe(data=>{
      this.DonorList=data;
    })
  }

 
  
}
