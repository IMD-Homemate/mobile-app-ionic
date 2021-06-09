import { Injectable } from '@angular/core';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication-service';

export interface MyData {
  name: string;
  filepath: string;
  // uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  // Upload Task 
  task: AngularFireUploadTask;

  // Progress in percentage
  percentage: Observable<number>;

  // Snapshot of uploading file
  snapshot: Observable<any>;

  // Uploaded File URL
  public UploadedFileURL: Observable<string>;

  //Uploaded Image List
  images: Observable<MyData[]>;

  //File details  
  fileName:string;

  //Status check 
  isUploading:boolean;
  isUploaded:boolean;

  private imageCollection: AngularFirestoreCollection<MyData>;
  constructor(private storage: AngularFireStorage, private database: AngularFirestore, private authService: AuthenticationService) {
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>('profileImages');
    this.images = this.imageCollection.valueChanges();
  }


  uploadFile(event: FileList) {
    

    // The File object
    const file = event.item(0)

    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') { 
     console.error('unsupported file type :( ')
     return;
    }


    this.fileName = file.name;

    // The storage path
    const path = `profileImages/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'Freaky Image Upload Demo' };

    //File reference
    const fileRef = this.storage.ref(path);

    // The main task
    this.storage.upload(path, file, { customMetadata }).then( res => {
      
    // Get uploaded file storage path
    this.UploadedFileURL = fileRef.getDownloadURL();
    
    
    this.UploadedFileURL.subscribe(resp=>{
      this.addImagetoDB({
        name: file.name,
        filepath: resp,
        // uid: this.authService.uuid
      });
    },error=>{
      console.error(error);
    })}
  );
  }

  addImagetoDB(image: MyData) {
    //Create an ID for document
    // const id = this.database.createId();
    const id = this.authService.uuid;
    //Set document id with value in database
    this.imageCollection.doc(id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }


}