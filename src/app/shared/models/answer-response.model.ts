import { AnswerModel } from "./answer.model";
import { DeserializableModel } from "./deserializable.model";
import { OwnerModel } from "./owner.model";

export class AnswerResponseModel implements DeserializableModel {
  has_more!:        boolean;
  items!:           AnswerModel[];
  quota_max!:       number;
  quota_remaining!: number;

  deserialize(response: any): this {
    Object.assign(this, response);
    this.items = [];
    response.items.forEach((question: AnswerModel) => {
      this.items.push(new AnswerModel().deserialize(question));
    });
    return this;
  }
}
