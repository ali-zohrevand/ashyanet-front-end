export class DeviceData {
  public name: string;
  public value_type: string;
  public dsc: string;
  public topic: string;

  constructor(name: string, value_type: string, dsc: string, topic: string) {
    this.name = name;
    this.value_type = value_type;
    this.dsc = dsc;
    this.topic = topic;
  }
}
