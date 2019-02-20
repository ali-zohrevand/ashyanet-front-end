export class Condition {
          public json_attribute_name: string;
          public condition_type: EnumCondtion_Type;
          public attr: any[];

  constructor() {
  }
}

enum EnumCondtion_Type {
        LowerThan   = 0,
        GraterThan  = 1,
        Between     = 2,
        EqualeTo    = 3,
}
