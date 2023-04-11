import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayService {
  private songs: Array<any>;
  constructor() {
    this.songs = [
      {
        id: 1,
        name: 'Billie Jean',
        artist: 'Michael Jackson',
        src: 'https://www.youtube.com/embed/Zi_XLOBDo_Y',
      },
      {
        id: 2,
        name: "Livin' on a Prayer",
        artist: 'Bon Jovi',
        src: 'https://www.youtube.com/embed/lDK9QqIzhwk',
      },
      {
        id: 3,
        name: "Sweet Child o' Mine",
        artist: "Guns N' Roses",
        src: 'https://www.youtube.com/embed/1w7OgIMMRc4',
      },
      {
        id: 4,
        name: 'Take On Me',
        artist: 'a-ha',
        src: 'https://www.youtube.com/embed/djV11Xbc914',
      },
      {
        id: 5,
        name: 'Like a Virgin',
        artist: 'Madonna',
        src: 'https://www.youtube.com/embed/s__rX_WL100',
      },
    ];
   }

   getSongs() {
    return this.songs;
   }

   getSongsByArtist(artist: string) {
    return this.songs.filter(s => s.artist == artist);
   }

   addSongs(song: any) {
    song.id = this.songs.length;
    this.songs.push(song);
    console.dir(this.songs);
   }
}
