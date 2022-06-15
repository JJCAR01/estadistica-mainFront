export class Login implements Respuesta
{
    usuario:String ="";
    clave:String = "";

  constructor()
  {
    
  }
    valor!: String;
}
export interface Respuesta {
    valor:String;
}