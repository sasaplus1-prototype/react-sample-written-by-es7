import dispatcher from '../dispatcher/';
import { ActionTypes as AddButtonActionTypes } from '../constants/AddButtonConstants';

export default {

  click() {
    dispatcher.dispatch({
      type: AddButtonActionTypes.CLICK,
    });
  }

}
