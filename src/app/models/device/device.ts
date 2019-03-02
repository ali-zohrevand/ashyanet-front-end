import {DeviceData} from './device-data';
import {DeviceCommand} from './device-command';

export class Device {
  public id: string;
  public devicename: string;
  public description: string;
  public type: string;
  public owner: string[];
  public key:string;
  public location: string;
  public publish: string[];
  public subscribe: string[];
  public pubsub: string[];
  public data: DeviceData[];
  public command: DeviceCommand[];
  public mqtt_password: string;

  constructor() {
    this.devicename ='';
    this.publish = [];
    this.subscribe = [];
    this.pubsub = [];
    this.data = [];
    this.command = [];
    this.owner = [];
  }

  /*constructor(
    id: string,
    devicename: string,
    description: string,
    type: string,
    owner: string[],
    location: string,
    publish: string[],
    subscribe: string[],
    pubsub: string[],
    data: DeviceData[],
    commands: DeviceCommand[],
    mqtt_password: string
  ) {
    this.id = id;
    this.devicename = devicename;
    this.description = description;
    this.type = type;
    this.owner = owner;
    this.location = location;
    this.publish = publish;
    this.subscribe = subscribe;
    this.pubsub = pubsub;
    this.data = data;
    this.commands = commands;
    this.mqtt_password = mqtt_password;
  }*/
}
