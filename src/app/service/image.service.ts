import { Injectable } from '@angular/core';
import { getDownloadURL, listAll, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})

export class ImageService { 

  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/${name}`); 
    uploadBytes(imgRef, file)
      .then((response: any) =>{
        this.getImages();
      })
      .catch((error: any) =>{
        console.log(error);
      })
  }

  getImages(){
    const imagesRef = ref(this.storage, 'imagen');
    listAll(imagesRef)
    .then(async (response: any) =>{
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log(this.url);
      }
    })
    .catch((error: any) =>{
      console.log(error);
    })
  }
}