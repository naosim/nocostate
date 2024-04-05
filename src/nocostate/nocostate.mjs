export class LabelAndValue {
  /** @type {string} */
  value;
  /** @type {string?} */
  label;

  /**
   * 
   * @param {string} value 
   * @param {string?} label 
   */
  constructor(value, label) {
    this.value = value;
    this.label = label;
  }
}

class StateTransition {
  event;
  currentState;
  nextState;
  notifyEvents;
}

class StateDef {
  /** @type {string} */
  name;
  /** @type {LabelAndValue[]} */
  states;

  transitionTable;

}