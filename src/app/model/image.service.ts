import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';


export interface imgFile {
    name: string;
    filepath: string;
    size: number;
  }
  

@Injectable({
  providedIn: 'root'
})

export class ImageService {

    // File upload task 
  fileUploadTask: AngularFireUploadTask;


  // Uploaded image collection
  files: Observable<imgFile[]>;

  // Image specifications
  imgName: string;


  private filesCollection: AngularFirestoreCollection<imgFile>;

  
  constructor(
    private afs: AngularFirestore, private afStorage: AngularFireStorage) {

    // Define uploaded files collection
    this.filesCollection = afs.collection<imgFile>('imagesCollection');
    this.files = this.filesCollection.valueChanges();
  }


  uploadImage(file) {
      

    // Image validation
    if (file.type.split('/')[0] !== 'image') { 
      console.log('File type is not supported!')
      return;
    }

    this.imgName = file.name;

    // Storage path
    const fileStoragePath = `filesStorage/${new Date().getTime()}_${file.name}`;

    // Image reference
    const imageRef = this.afStorage.ref(fileStoragePath);
    console.log(imageRef);
    // File upload task
    this.fileUploadTask = this.afStorage.upload(fileStoragePath, file);

  }

  storeFilesFirebase(image: imgFile) {
    const fileId = this.afs.createId();
    
    this.filesCollection.doc(fileId).set(image).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
    }
}