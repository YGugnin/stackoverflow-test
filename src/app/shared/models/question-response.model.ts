import { QuestionModel } from "./question.model";
import { DeserializableModel } from "./deserializable.model";
import {OwnerModel} from "./owner.model";

export class QuestionResponseModel implements DeserializableModel {
  has_more!:        boolean;
  items!:           QuestionModel[];
  quota_max!:       number;
  quota_remaining!: number;

  deserialize(response: any): this {
    Object.assign(this, response);
    this.items = [];
    response.items.forEach((question: QuestionModel) => {
      this.items.push(new QuestionModel().deserialize(question));
    });
    return this;
  }
}
