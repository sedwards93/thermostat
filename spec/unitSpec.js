'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Has a starting temperature of 20', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('Can increase the temperature with an up function', function() {
    thermostat.up()
    expect(thermostat.getCurrentTemperature()).toEqual(21)
  });

  it('Can decrease the temperature with a down function', function() {
    thermostat.down()
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });


})