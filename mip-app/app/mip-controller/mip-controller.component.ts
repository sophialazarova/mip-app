import { Component, OnInit } from '@angular/core';
import bluetooth = require('nativescript-bluetooth');
import { ActivatedRoute } from '@angular/router';

import { startAccelerometerUpdates, stopAccelerometerUpdates, AccelerometerData } from 'nativescript-accelerometer';

@Component({
  selector: 'mip-controller',
  moduleId: module.id,
  templateUrl: './mip-controller.component.html',
  styleUrls: ['./mip-controller.component.css']
})

export class MipControllerComponent implements OnInit {
  serviceUUID: string = 'ffe5';
  characteristicUUID: string = 'ffe9';
  deviceUUID: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.deviceUUID = this.route.snapshot.params['UUID'];
  }

  moveForward() {
    bluetooth.writeWithoutResponse({
      serviceUUID: this.serviceUUID,
      characteristicUUID: this.characteristicUUID,
      peripheralUUID: this.deviceUUID,
      value: new Uint8Array([0x71,0x20,0x40])
    })
  }

  moveBack() {
    bluetooth.writeWithoutResponse({
      serviceUUID: this.serviceUUID,
      characteristicUUID: this.characteristicUUID,
      peripheralUUID: this.deviceUUID,
      value: new Uint8Array([0x72,0x20,0x40])
    })
  }

  turnLeft() {
    bluetooth.writeWithoutResponse({
      serviceUUID: this.serviceUUID,
      characteristicUUID: this.characteristicUUID,
      peripheralUUID: this.deviceUUID,
      value: new Uint8Array([0x73,0x1E,0x20])
    })
  }

  turnRight() {
    bluetooth.writeWithoutResponse({
      serviceUUID: this.serviceUUID,
      characteristicUUID: this.characteristicUUID,
      peripheralUUID: this.deviceUUID,
      value: new Uint8Array([0x74,0x1E,0x20])
    })
  }
}
