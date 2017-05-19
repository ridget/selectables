import Component, { tracked } from '@glimmer/component';
export default class SelectionList extends Component {
  @tracked listItems: any;

  constructor(options) {
    super(options);
    this.loadListItems();
  }

  async loadListItems() {
    let request = await fetch('http://localhost:3000/activity_reasons.json');
    let json = await request.json();
    this.listItems = json;
  }
};
