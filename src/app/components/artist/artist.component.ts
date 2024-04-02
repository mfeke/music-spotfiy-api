import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndpointService } from '../../service/endpoint.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {
  artist: any = {}
  tracks:any= []

  constructor(private route: ActivatedRoute, private endPointService: EndpointService) { }
  ngOnInit() {
    this.agetArtist()
    this.agetArtistTopTrack()
    this.agetArtistRelated()
   
  }
  agetArtist(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.endPointService.agetArtist(id).subscribe({
      next: data => {
        this.artist.name = data.name
        this.artist.image = data.images[0].url
        this.artist.followers = data.followers.total
      }
    })

  }
  agetArtistTopTrack():void{
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.endPointService.agetArtistToptracks(id).subscribe({
      next:data=>{
        this.tracks = data.tracks
        let newtrack :any =[]
       newtrack = this.tracks.map((track:any)=>{
          let name = track.name
          let image = track.album.images[0].url
          return {name , image}
        })
        this.tracks = newtrack.slice(0,4)
      }
    })

  }
  agetArtistRelated():void{
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.endPointService.agetArtistRelated(id).subscribe({
      next:data=>{
        console.log(data)
      }
    })

  }


}
