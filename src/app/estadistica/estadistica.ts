import { Jugador } from "../jugador/jugador";

export class Estadistica {
    rival: number = 0;
    jornada: String = "";
    goles : number = 0;
    remates : number = 0;
    asistencias : number = 0;
    pases : number = 0;
    recuperaciones : number = 0;
    perdidas : number = 0;
    faltasCometidas : number = 0;
    faltasRecibidas : number = 0;
    Jugador : Jugador = new Jugador;

    constructor(){}
}