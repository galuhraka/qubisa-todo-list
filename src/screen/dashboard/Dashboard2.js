import React, { useState } from "react";
import List from "../../components/dashboard2/List/List";
import store from "../../utils/store";
import StoreApi from "../../utils/storeApi";

const Dashboard2 = () => {
  const [data, setData] = useState(store);

  const addMoreCard = (title) => {
    console.log(title);
  };
  return (
    <StoreApi.Provider value={{ addMoreCard }}>
      <div>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List key={listId} list={list} />;
        })}
      </div>
    </StoreApi.Provider>
  );
};

export default Dashboard2;
