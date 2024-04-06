import { StatusEnum } from "../../enums";

export interface IPayloadReducer<T> {
  status: StatusEnum;
  error: string | null;
  data: T;
}