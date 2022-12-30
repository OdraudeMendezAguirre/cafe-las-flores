import { Usuario } from './usuario';

export class Envio{
  id_envio ? : number;
  direccion ? : string;
  municipio ? :string;
  estado ? : string;
  referencia_vivienda ? : string;
  realizado ? : boolean;
  usuario ? : Usuario;

}
