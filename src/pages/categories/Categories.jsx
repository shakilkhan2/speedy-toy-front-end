import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryOne from "../categoryOne/CategoryOne";
import CategoryTwo from "../categoryTwo/CategoryTwo";
import CategoryThree from "../categoryThree/CategoryThree";

const Categories = () => {
  return (
    <div>
      <Tabs className=" ">
        <TabList className="text-center text-sky-500 font-bold bg-slate-300">
          <Tab>Sports Car</Tab>
          <Tab>Train</Tab>
          <Tab>Truck</Tab>
        </TabList>

        <TabPanel>
          <CategoryOne />
        </TabPanel>
        <TabPanel>
          <CategoryTwo />
        </TabPanel>
        <TabPanel>
          <CategoryThree />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
