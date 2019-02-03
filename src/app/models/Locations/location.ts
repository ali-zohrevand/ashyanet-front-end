export class Location {
  public Id: string;
  public  DisplayName: string;
  public Name: string;
  public Parent: string;
  public Devices: string[];
  public Description: string;
  public Latitude: string;
  public Longtitude: string;
  public Users: string[];

  constructor(Id: string, DisplayName: string, Name: string, Parent: string, Devices: string[], Description: string, Latitude: string, Longtitude: string, Users: string[]) {
    this.Id = Id;
    this.DisplayName = DisplayName;
    this.Name = Name;
    this.Parent = Parent;
    this.Devices = Devices;
    this.Description = Description;
    this.Latitude = Latitude;
    this.Longtitude = Longtitude;
    this.Users = Users;
  }
}
