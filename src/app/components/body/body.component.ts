import { Component } from '@angular/core';
import { EndpointService } from '../../service/endpoint.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
   
  afrobeatArtist:any =[]
  newAlbums:any = []

  ngOnInit(){
    this.endPointService.agetrelateArtists().subscribe({
      next:data=>{
        this.afrobeatArtist = data.artists
        let artists:any = []
        artists = this.afrobeatArtist.map((artists:any)=>{
          let id = artists.id
          let name = artists.name
          let image = artists.images[1].url

          return {id , name , image}
        })
        console.log(data)
        this.afrobeatArtist = artists.slice(0,10)
      }
    })
    this.endPointService.agetNewRelase().subscribe({
      next:data=>{
        this.newAlbums = data.albums.items

        this.newAlbums = this.newAlbums.map((item:any)=>{
          let id = item.id
          let name = item.name
          let image = item.images[0].url
          let artists = item.artists
          return {id , name , image , artists}
        })
        // console.log(this.newAlbums)
      }
    })
  }

  constructor( private endPointService: EndpointService){}

 next():void{
  
 }

}
