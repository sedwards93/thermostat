'use strict';


$(document).ready(function(){
  $('#power-saving-on').hide();

  var thermostat = new Thermostat();
  updateTemperature()

  $('#down').click(function() { 
    thermostat.down();
    updateTemperature()
  })

  $('#up').click(function() {
    thermostat.up();
    updateTemperature()
  })

  $('#reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature()
  })

  $('#power-saving-on').click(function() {
    thermostat.togglePowerSavingOn();
    $('#power-saving-status').text('On')
    updateTemperature();
    $('#power-saving-on').hide();
    $('#power-saving-off').show();
  })

  $('#power-saving-off').click(function() {
    thermostat.togglePowerSavingOff();
    $('#power-saving-status').text('Off')
    updateTemperature();
    $('#power-saving-off').hide();
    $('#power-saving-on').show();
  })
  
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

})