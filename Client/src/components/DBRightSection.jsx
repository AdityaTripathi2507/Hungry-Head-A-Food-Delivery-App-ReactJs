import React from "react";
import {
  DBHome,
  DBItems,
  DBOrders,
  DBUsers,
  DBheader,
  DBNewItem,
} from "../components";
import { Route, Routes } from "react-router-dom";
const DBRightSection = () => {
  return (
    <div className="flex flex-col px-12 py-12 flex-1 h-full ">
      <DBheader />
      <div className="flex flex-col flex-1 overflow-y-scroll scrollbar-none">
        <Routes>
          <Route path="/home" element={<DBHome />}></Route>
          <Route path="/orders" element={<DBOrders />}></Route>
          <Route path="/items" element={<DBItems />}></Route>
          <Route path="/newItem" element={<DBNewItem />}></Route>
          <Route path="/users" element={<DBUsers />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default DBRightSection;
