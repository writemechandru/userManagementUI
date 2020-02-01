import { Component } from '@angular/core';
import { UserService} from './user-service.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Management';
  users :User[];

  constructor(private userService:UserService){
    this.userService.getUsers().subscribe(resp =>{
      this.users=resp;
      console.log(resp);
    });

  }


  
}
