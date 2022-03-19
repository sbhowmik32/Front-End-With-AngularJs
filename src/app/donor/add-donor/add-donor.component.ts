import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() don:any;
  DonorId:string;
  DonorName:string;
  DonorMobile:string;
  DateOfJoining:string;

  ngOnInit(): void {
    this.DonorId=this.DonorId;
    this.DonorName= this.DonorName;
    this.DonorMobile= this.DonorMobile;
    this.DateOfJoining= this.DateOfJoining;
  }

  addDonor(){
    var val={DonorId:this.DonorId,
      DonorName:this.DonorName,
      DonorMobile:this.DonorMobile,
      DateOfJoining:this.DateOfJoining};
      this.service.addDonor(val).subscribe(res=>{
        alert(res.toString());
      });
    }
  }

