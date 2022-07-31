import React, { Component } from "react";
import { connect } from "react-redux";
import { ActionButton, TodoList } from "../../components/rootcomponents";

export class Dashboard extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div style={styles.listContainer}>
        {lists.map((list) => (
          <TodoList key={list.id} title={list.title} cards={list.cards} />
        ))}
        <ActionButton list />
      </div>
    );
  }
}

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(Dashboard);
