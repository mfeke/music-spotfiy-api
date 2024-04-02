import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';
import { EndpointService } from './service/endpoint.service';
import { TokenService } from './service/token.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  @Input() tokenData?:any

  ngOnInit() {
    
  } 
   constructor(private endpointService:EndpointService, private tokenService:TokenService){}

   getToken(){
    this.tokenService.getToken().subscribe({
      next:data=>{
        console.log(data)
        this.tokenService.saveToken(data.access_token)
      }
    })
   }
}
