'use stict';

class Thermostat {

  constructor(){
    this.MINIMUM_TEMPERATURE = 10;
    this.POWERSAVING_MAX_TEMPERATURE = 25;
    this.MAX_TEMPERATURE = 32;
    this.DEFAULT_TEMPERATURE = 20;
    this.LOW_ENERGY_USAGE = 17;
    this.MEDIUM_ENERGY_USAGE = 25;
    this.maximumTemperature = this.POWERSAVING_MAX_TEMPERATURE;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSaving = true;
  }

  getCurrentTemperature(){
    return this.temperature;
  };

  isMinimumTemperature(){
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemperature(){
    return this.temperature === this.maximumTemperature;
  }

  up(){
    if (this.isMaximumTemperature()) {
      throw Error('Cannot get any hotter than this!');
    }
    this.temperature ++;
  }

  down(){
    if (this.isMinimumTemperature()) {
      throw Error('Cannot get any colder than this!');
    }
    this.temperature --;
  }

  togglePowerSavingOn(){
    this.powerSaving = true;
    this.setMaxTemperature();
  }

  togglePowerSavingOff(){
    this.powerSaving = false;
    this.setMaxTemperature();
  }

  setMaxTemperature(){
    this.maximumTemperature = this.powerSaving ? this.POWERSAVING_MAX_TEMPERATURE : this.MAX_TEMPERATURE;
  }

  resetTemperature(){
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.temperature <= this.LOW_ENERGY_USAGE) {
      return 'low-usage';
    } else if (this.temperature <= this.MEDIUM_ENERGY_USAGE && this.temperature > this.LOW_ENERGY_USAGE){
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }

}