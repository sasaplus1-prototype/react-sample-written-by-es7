import React from 'react';
import List from '../List/';
import AddButton from '../AddButton/';
import ItemStore from '../../stores/ItemStore';

export default class App extends React.Component {

  state = {
    items: ItemStore.getItems(),
  };

  click = () => {
    this.setState({
      items: ItemStore.getItems(),
    });
  }

  componentDidMount() {
    ItemStore.addClickListener(this.click);
  }

  componentWillUnmount() {
    ItemStore.removeClickListener(this.click);
  }

  render() {
    return (
      <section>
        <AddButton caption="add"/>
        <List items={this.state.items}/>
      </section>
    );
  }

}
