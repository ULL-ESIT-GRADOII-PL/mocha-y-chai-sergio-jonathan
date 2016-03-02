(function(exports) {
  "use strict";

  function Medida(valor, tipo) {
    var value = valor;
    var type = tipo || "indefinido";

    this.getValue = function() {
      return value;
    };
    this.getType = function() {
      return type;
    }
  }

  function Temperatura(valor, tipo) {
    Medida.call(this, valor, tipo);

    this.toCelsius = function() {
      var result;
      var tipo = this.getType().toLowerCase();
      if ("fahrenheit".match(tipo))
        result = (this.getValue() - 32) * 5 / 9;
      if ("kelvin".match(tipo))
        result = this.getValue() - 273.15;
      else
        result = this.getValue();
      return result;
    };
    this.toFahrenheit = function() {
      var result;
      var tipo = this.getType().toLowerCase();
      if ("celsius".match(tipo))
        result = (this.getValue() * 9 / 5) + 32;
      if ("kelvin".match(tipo))
        result = (this.getValue() * 9 / 5) - 459.67;
      else
        result = this.getValue();
      return result;
    };
    this.toKelvin = function() {
      var result;
      var tipo = this.getType().toLowerCase();
      if ("celsius".match(tipo))
        result = this.getValue() + 273.15;
      if ("fahrenheit".match(tipo))
        result = (this.getValue() + 459.67) * 5 / 9;
      else
        result = this.getValue();
      return result;
    }
  }

  Temperatura.prototype = new Medida();
  Temperatura.prototype.constructor = Temperatura;

  function Celsius(valor) {
    Temperatura.call(this, valor, "Celsius");
  }

  Celsius.prototype = new Temperatura();
  Celsius.prototype.constructor = Celsius;

  function Fahrenheit(valor) {
    Temperatura.call(this, valor, "Fahrenheit");
  }

  Fahrenheit.prototype = new Temperatura();
  Fahrenheit.prototype.constructor = Fahrenheit;

  function Kelvin(valor) {
    Temperatura.call(this, valor, "Kelvin");
  }

  Kelvin.prototype = new Temperatura();
  Kelvin.prototype.constructor = Kelvin;

  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Fahrenheit = Fahrenheit;
  exports.Kelvin = Kelvin;

})(this);
