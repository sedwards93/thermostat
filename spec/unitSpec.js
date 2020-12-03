'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Has a starting temperature of 20', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('Up', () => {
    it('Can increase the temperature with an up function', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21)
    });
    it('Throws an error if user tries to increase above maximum temperature', () => {
      for (var i = 1; i < 6; i++) {
        thermostat.up()
      };
      expect( function(){ thermostat.up(); } ).toThrow(new Error('Cannot get any hotter than this!'));
    })
  })


  it('Can decrease the temperature with a down function', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('Has a minimum temperature of 10', function() {
    for (var i = 20; i > 10; i--) thermostat.down();
    expect( function(){ thermostat.down(); } ).toThrow(new Error('Cannot get any colder than this!'));
  })

  describe('togglePowerSavingOff', () =>  {
    it('Can switch between powerSaving to false', function(){
      thermostat.togglePowerSavingOff();
      expect(thermostat.powerSaving).toEqual(false);
    });
  
    it('Can switch between powerSaving to true', function(){
      thermostat.togglePowerSavingOff();
      thermostat.togglePowerSavingOn();
      expect(thermostat.powerSaving).toEqual(true);
    });

    it('Calls setMaxTemperature', function() {
      spyOn(thermostat, 'setMaxTemperature');
      thermostat.togglePowerSavingOff();
      expect(thermostat.setMaxTemperature).toHaveBeenCalled();
    });
  });

  describe('resetTemperature', () => {
    it('Calling resetTemperature will reset the temperature to 20 degrees', () => {
      thermostat.down();
      thermostat.down();
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20)
    });
  });

  describe('energyUsage', () => {

    it('Returns low-usage when the temperature is less than 18 degrees', () => {
      for (var i = 1; i < 5; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
    
    it('Returns medium-usage when the temperature is between 18 and 25 degrees', () => {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('Returns high-usage when the temperature is less than 18 degrees', () => {
      thermostat.togglePowerSavingOff();
      for (var i = 1; i < 7; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });

  })

})