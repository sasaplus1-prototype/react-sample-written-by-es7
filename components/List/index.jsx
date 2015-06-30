import React from 'react';
import ListItem from '../ListItem/';

export default class List extends React.Component {

  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.object),
  };
  
  static defaultProps = {
    items: [],
  };

  render() {
    return (
      <section>
        <ul>
          {
            this.props.items.map(
              (item) => <ListItem {...item}/>
            )
          }
        </ul>
      </section>
    );
  }

}
