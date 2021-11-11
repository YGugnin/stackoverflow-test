import { DeserializableModel } from "./deserializable.model";

export class OwnerModel implements DeserializableModel{
  account_id!:    number;
  reputation!:    number;
  user_id!:       number;
  user_type!:     string;
  profile_image!: string;
  display_name!:  string;
  link!:          string;

  deserialize(owner: any): this {
    Object.assign(this, owner);
    return this;
  }
}
