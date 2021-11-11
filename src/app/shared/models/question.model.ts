import { OwnerModel } from "./owner.model";
import { DeserializableModel } from "./deserializable.model";

export class QuestionModel implements DeserializableModel {
  tags!:               string[];
  owner!:              OwnerModel;
  is_answered!:        boolean;
  view_count!:         number;
  answer_count!:       number;
  score!:              number;
  last_activity_date!: number;
  creation_date!:      number;
  last_edit_date!:     number;
  question_id!:        number;
  content_license!:    string;
  link!:               string;
  title!:              string;
  body!:               string;

  deserialize(question: any): this {
    Object.assign(this, question);
    this.owner = new OwnerModel().deserialize(question.owner);
    return this;
  }
}
