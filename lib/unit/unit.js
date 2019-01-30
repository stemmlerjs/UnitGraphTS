module.exports = (function() {

  'use strict';

  class Unit {

    constructor(entity, properties, uniqid) {

      this.entity = entity + '';
      this.__uniqid__ = uniqid;

      this.load(properties || {});

    }

    load(properties) {

      let p = Object.create(null);

      Object.keys(properties).forEach(function(v) {

        p[v] = properties[v];

      });

      this.properties = p;

      return this;

    }

    set(property, value) {

      return this.properties[property] = value;

    }

    unset(property) {

      return delete this.properties[property];

    }

    has(property) {

      return Object.prototype.hasOwnProperty.call(this.properties, property);

    }

    get(property) {

      return this.properties[property];

    }

    toString() {

      return [this.constructor.name, ' (', this.entity, ' ', JSON.stringify(this.properties) ,')'].join('');

    }

    valueOf() {

      return this.toString();

    }

    toJSON() {

      return [
        this.entity,
        this.properties,
        this.__uniqid__
      ];

    }

  }

  return Unit;

})();
