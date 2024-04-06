export class Value {
  /** @type {string} */
  value;
  /** @type {string} */
  label;

  /**
   * @param {string} value 
   * @param {string?} label 
   */
  constructor(value, label) {
    this.value = value;
    this.label = label || value;
  }
}

export function value(value) {
  return new Value(value, null);
}

export class StateTransition {
  /** @type {string} */
  currentState;
  /** @type {Event} */
  event;
  /** @type {StateTransitionOutput} */
  output;
}

export class StateTransitionOutput {
  /** @type {string} */
  nextState;
  /** @type {string[]} */
  notifyEvents;
}

export class StateTransitions {
  invoke(currentState, invokeEvent) {}
}

export class EventType {
  /** @type {string} */
  value;
  /**
   * 
   * @param {string} value 
   */
  constructor(value) {
    this.value = value;
  }

  static invokeEvent = new EventType("invokeEvent")
  static linkedEvent = new EventType("linkedEvent")

}

export class Event {
  /** @type {EventType} */
  eventType;
  /** @type {string} */
  fromDomain;
  /** @type {string} */
  domainState;
  /** @type {Value} */
  name;
}

export class Domain {
  /** @type {Value} */
  name;
  /** @type {Value[]} */
  states;

  /** @type {Value[]} */
  invokeEvents;


  /**
   * 
   * @param {Value} name 
   * @param {Value[]} states 
   * @param {Value[]} invokeEvents 
   */
  constructor(name, states, invokeEvents) {
  }
}


export class DomainEntity {
  /** @type {string} */
  id;
  /** @type {string} */
  parentId;
}


export class DomainRepository {
  /**
   * 
   * @param {string} domainName 
   * @returns {Domain}
   */
  find(domainName) {
  }
}