'use stict';

class Thermostat {

  constructor(){
    this.temperature = 20
  }

  getCurrentTemperature(){
    return this.temperature;
  };

  up(){
    this.temperature ++;
  }

  down(){
    this.temperature --;
  }

}