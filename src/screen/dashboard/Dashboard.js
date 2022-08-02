/* eslint-disable react-hooks/exhaustive-deps */
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { ActionButton, TodoList } from "../../components/rootcomponents";

// export class Dashboard extends Component {
//   render() {
//     const { lists } = this.props;
//     return (
//       <div style={styles.listContainer}>
//         {lists.map((list) => (
//           <TodoList key={list.id} title={list.title} cards={list.cards} />
//         ))}
//         <ActionButton list />
//       </div>
//     );
//   }
// }

// const styles = {
//   listContainer: {
//     display: "flex",
//     flexDirection: "row",
//   },
// };

// const mapStateToProps = (state) => ({
//   lists: state.lists,
// });

// export default connect(mapStateToProps)(Dashboard);

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { ActionButton, TodoList } from "../../components/rootcomponents";
import { getPosts } from "../../store-redux/features/postSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={styles.listContainer}>
        {posts.map((list) => (
          <TodoList key={list.id_post} title={list.title} cards={list.cards} />
        ))}
        <ActionButton list />
      </div>
    </DragDropContext>
  );
};

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

export default Dashboard;
