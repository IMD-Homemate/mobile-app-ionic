export class Preferences {
    type: Type;
    pet: boolean;
    smoker: boolean;
    instrument: boolean;
    isOkWithPet: boolean;
    isOkWithSmoker: boolean;
    isOkWithInstrument: boolean;
    interests: Interests[];
    moreInterests: string;
    importentList: Importent[];
    biography: string;

}

enum Type {
    seeker = "Seeker",
    offerer = "Offerer"
  }

  enum Importent {
    tidyHouse = "Tidy house",
    healthyFood = "Healthy food",
    higherEducation = "Higher education",
    clearAgreements = "Clear agreements",
    privateBathroom = "Private bathroom"
  }

  enum Interests {
    sports = "Sports",
    gaming = "Gaming",
    hiking = "Hiking",
    music = "Music",
    films = "Films",
    food = "Food",
    vegan = "Vegan", 
    nature = "Nature"
  }