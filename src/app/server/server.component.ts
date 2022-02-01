 import { Component } from "@angular/core";
import { withLatestFrom } from "rxjs";
 
 @Component({
     selector: 'app-server',
     templateUrl: './server.component.html',
     styles: [`.online {
                color: white;
                }
    `]
 })
 export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "";

    constructor() {
        this.serverStatus= Math.random()>0.5 ? "offline" : "online";
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() : string {
        return this.serverStatus=="offline" ? "red" : "green";
    }
 }