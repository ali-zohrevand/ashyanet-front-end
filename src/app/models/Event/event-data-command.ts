import {Condition} from './condition';

export class EventDataCommand {
  public data_name: string;
  public command_name: string;
  public condition: Condition;
  public command_type: Command_type;
}

enum Command_type {
  MqttEvent = 0,
  SmsEvent= 1,
  MailEvent = 2
}
