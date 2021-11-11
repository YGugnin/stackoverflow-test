import { OwnerModel } from "./owner.model";
import { DeserializableModel } from "./deserializable.model";

export class AnswerModel implements DeserializableModel {
  answer_id!:          number;
  content_license!:    string;
  creation_date!:      number;
  is_accepted!:        boolean;
  last_activity_date!: number;
  owner!:              OwnerModel;
  accept_rate!:        number;
  account_id!:         number;
  display_name!:       string;
  link!:               string;
  profile_image!:      string;
  reputation!:         number;
  user_id!:            number;
  user_type!:          string;
  question_id!:        number;
  score!:              number;
  body!:               string;

  deserialize(question: any): this {
    Object.assign(this, question);
    this.owner = new OwnerModel().deserialize(question.owner);
    return this;
  }
}
