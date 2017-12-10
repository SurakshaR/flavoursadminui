import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { rateService } from "../app.service";
@Component({
  selector: 'app-rate-admin',
  templateUrl: './rate-admin.component.html',
  styleUrls: ['./rate-admin.component.css']
})
export class RateAdminComponent implements OnInit {

  private addEntityForm: FormGroup; 
  private formValid: boolean = false;
  private rating;private msg="";
  private show=false;
 private feedback;
 private food ="";

 private ambiance ="";

 private service ="";

 private price ="";
 
constructor(private formBuilder: FormBuilder,private rateService : rateService) {
  this.ratingForm()
  
}

ratingForm(){

  this.addEntityForm = this.formBuilder.group({
  Name        : ["", [Validators.required, Validators.minLength(4), Validators.maxLength(80)]],
  DOB  : ["", [Validators.required]],
  feedback: ["", []],
  foodRate:["",[]],
  ambianceRate:["",[]],
  serviceRate:["",[]],
  priceRate:["",[]]
});
}



getRating(){
  this.rateService.getRating()
  .subscribe(
      (responseObject) => {
         // alert("thank you for your feed back")
            if(responseObject.statusCode==0)
            {
              console.log(responseObject.successResult[0].food)
              this.food=responseObject.successResult[0].food;
              this.ambiance=responseObject.successResult[0].ambiance;
              this.service=responseObject.successResult[0].service;
              this.price=responseObject.successResult[0].price;
        
           //   this.router.navigate(['thank']);
            }
            else
            {
              this.show = true;
              this.msg = "Please try again later"
            }
          
      },
      err => {
          
      }
  );
}
getFeedback(){
  this.rateService.getFeedback()
  .subscribe(
      (responseObject) => {
         // alert("thank you for your feed back")
            if(responseObject.statusCode==0)
            {
              
              this.feedback=responseObject.successResult
          
        
           //   this.router.navigate(['thank']);
            }
            else
            {
              this.show = true;
              this.msg = "Please try again later"
            }
          
      },
      err => {
          
      }
  );
}

ngOnInit() {
  this.getRating();
  this.getFeedback();
}

}
