import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userservice';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {

  professionals : User[]
  public ProfessionalUser: User = {
    role: 'PROFESSIONAL'
  }

  constructor(private UserService: UserService, private router: Router, private toastr: ToastrService){ 
    
  }

  ngOnInit(): void {
     this.fetchProfessionals(this.ProfessionalUser)

  
    
  }

  public fetchProfessionals(newUser: User): void{

    this.UserService.getUsers(newUser).then((response) => {
      if(response) {
        this.professionals= response as User[];
      } else {
        // this.toastr.error('Invalid Login Credentials !!!!', 'Login Failed');
      }
    });

  }

}
