import { EtapaEnum } from "../../enums/etapa/etapa.enum";

export interface ITarefa {
  id: number,
  etapa: EtapaEnum,
  nome: string;
}