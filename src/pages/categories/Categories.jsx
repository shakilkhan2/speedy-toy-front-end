import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryOne from "../categoryOne/CategoryOne";
import CategoryTwo from "../categoryTwo/CategoryTwo";

const Categories = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Train</Tab>
          <Tab>Car </Tab>
        </TabList>

        <TabPanel>
          <CategoryOne />
        </TabPanel>
        <TabPanel>
          <CategoryTwo/>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
