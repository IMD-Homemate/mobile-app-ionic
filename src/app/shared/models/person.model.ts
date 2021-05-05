export class Person {
    id: number;
    firstname : string;
    lastname :  string;
    birthdate : number;
    gender : Gender;
    photo : string;

}

enum Gender {
    male = "M",
    female = "F"
  }