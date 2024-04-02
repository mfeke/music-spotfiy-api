import { Component } from '@angular/core';
import { EndpointService } from '../../service/endpoint.service';
import { TokenService } from '../../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-started',
  templateUrl: './started.component.html',
  styleUrl: './started.component.css'
})
export class StartedComponent {
  ngOnInit() {

    
  } 
   constructor(private endpointService:EndpointService, private tokenService:TokenService, private router:Router){}

   getToken(){
    this.tokenService.getToken().subscribe({
      next:data=>{
        console.log(data)
        this.tokenService.saveToken(data.access_token)
      this.router.navigate(['/home'])
      }
    })
   }

}
