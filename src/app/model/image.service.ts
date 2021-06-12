import { Injectable } from '@angular/core';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication-service';

export interface MyData {
  name: string;
  filepath: string;
  uuid: string;
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

  id : string;

  //Status check 
  isUploading:boolean;
  isUploaded:boolean;

  private imageCollection: AngularFirestoreCollection<MyData>;
  constructor(private storage: AngularFireStorage, private database: AngularFirestore, private authService: AuthenticationService) {
    //Set collection where our documents/ images info will save
    // this.imageCollection = database.collection<MyData>('profileImages');
    // this.images = this.imageCollection.valueChanges();
  }


  async uploadFile(event: FileList, typeOfDatabase: string){
    this.imageCollection = this.database.collection<MyData>(typeOfDatabase);
    this.images = this.imageCollection.valueChanges();

    // The File object
    const file = event.item(0)

    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') { 
     console.error('unsupported file type :( ')
     return;
    }


    this.fileName = file.name;

    // The storage path
    const path = `${typeOfDatabase}/${new Date().getTime()}_${file.name}`;

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
        uuid: this.authService.uuid
      }, typeOfDatabase);
    },error=>{
      console.error(error);
    })}
  );
  }

  addImagetoDB(image: MyData, typeOfDatabase: string) {
    //Create an ID for document
    // const id = this.database.createId();
    
    if (typeOfDatabase == 'profileImages'){
      this.id = this.authService.uuid;
      //Set document id with value in database
      this.imageCollection.doc(this.id).set(image).then(resp => {
        console.log(resp);
      }).catch(error => {
        console.log("error " + error);
      });
    }
    if (typeOfDatabase == 'residenceImages'){
      this.id = this.database.createId();
      //Set document id with value in database
      this.imageCollection.doc(this.id).set(image).then(resp => {
        console.log(resp);
      }).catch(error => {
        console.log("error " + error);
      });
    }
  }


}