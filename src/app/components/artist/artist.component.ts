import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndpointService } from '../../service/endpoint.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {

  constructor( private route: ActivatedRoute,private endPointService: EndpointService){}
  ngOnInit(){
    this.agetArtist()
  }
  agetArtist():void{
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.endPointService.agetArtist(id).subscribe({
      next:data=>{
        console.log(data)
      }
    })

  }
  

}
