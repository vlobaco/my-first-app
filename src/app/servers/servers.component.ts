import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  createdServerStatus  = false;
  serverName="TestName";
  servers=["TestServer", "TestServer2"];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.createdServerStatus= true;
  }

  onServerNameUpdate(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
