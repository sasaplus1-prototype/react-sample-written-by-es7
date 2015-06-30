import keymirror from 'keymirror';
import dispatcher from '../dispatcher';
import objectAssign from 'object-assign';

import { EventEmitter } from 'events';
import { ActionTypes as AddButtonActionTypes } from '../constants/AddButtonConstants';

let events = keymirror({
  click: null,
});

class ItemStore extends EventEmitter {

  items = [];
  dispatchToken = dispatcher.register(this.handleDispatch.bind(this));

  handleDispatch(action) {
    switch (action.type) {
      case AddButtonActionTypes.CLICK:
        let date = Date.now();

        this.items.push({
          className: (this.items.length % 2 === 0) ? 'odd' : 'even',
          key: String(date),
          text: String(date),
        });
        this.emitClick();

        break;
    }
  }

  getItems() {
    return this.items;
  }

  emitClick() {
    this.emit(events.click);
  }

  addClickListener(callback) {
    this.on(events.click, callback);
  }

  removeClickListener(callback) {
    this.removeListener(events.click, callback);
  }

}

export default new ItemStore()
