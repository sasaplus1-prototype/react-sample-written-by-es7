import React from 'react';
import AddButtonAction from '../../actions/AddButtonAction';

export default class ListItem extends React.Component {

  static propTypes = {
    caption: React.PropTypes.string,
  };
  
  static defaultProps = {
    caption: 'add',
  };

  onClick() {
    AddButtonAction.click();
  }

  render() {
    return (
      <button type="button" onClick={this.onClick}>{this.props.caption}</button>
    );
  }

}
