import {Condition} from './condition';

export class EventDataCommand {
  public address_topic_name: string;
  public command_name: string;
  public condition: Condition;
  public command_type: Command_type;
  constructor(){}
}

enum Command_type {
  MqttEvent = 0,
  SmsEvent= 1,
  MailEvent = 2
}
