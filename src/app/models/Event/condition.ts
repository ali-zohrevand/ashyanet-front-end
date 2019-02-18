export class Condition {
          public json_attribute_name: string;
          public condition_type: string;
          public attr: any[];
}
enum EnumCondtion_Type {
        LowerThan   = 0,
        GraterThan  = 1,
        Between     = 2,
        EqualeTo    = 3,
}
