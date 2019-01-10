export class DeviceCommand {
  public name: string;
  public value: string;
  public dsc: string;
  public topic: string;

  constructor(name: string, value: string, dsc: string, topic: string) {
    this.name = name;
    this.value = value;
    this.dsc = dsc;
    this.topic = topic;
  }
}
