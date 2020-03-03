import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InputPlaygroundComponent extends Component {
  @tracked value1;
  @tracked value2;
  @tracked value2b;

  @action
  updateValue1(value) {
    this.value1 = value;
  }

  @action
  updateValue2(event) {
    this.value2 = event.target.value;
  }
}
