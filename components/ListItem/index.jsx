import React from 'react';

export default class ListItem extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    text: React.PropTypes.string,
  };
  
  static defaultProps = {
    className: '',
    text: '',
  };

  render() {
    return (
      <li className={this.props.className}>
        {this.props.text}
      </li>
    );
  }

}
