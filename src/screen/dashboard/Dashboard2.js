import React, { useState } from "react";
import List from "../../components/dashboard2/List/List";
import store from "../../utils/store";

const Dashboard2 = () => {
  const [data, setData] = useState(store);

  return (
    <div>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List key={listId} list={list} />;
      })}
    </div>
  );
};

export default Dashboard2;
