import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer anchor="right" open={props.open} onClose={() => props.onClose()}>
      <List component="nav">
        <ListItem button onClick={() => console.log("Event")}>
          Event begint in
        </ListItem>
        <ListItem button onClick={() => console.log("Venue")}>
          Plaats
        </ListItem>
        <ListItem button onClick={() => console.log("Hightlights")}>
          Hoogtepunten
        </ListItem>
        <ListItem button onClick={() => console.log("Pricing")}>
          Prijzen
        </ListItem>
        <ListItem button onClick={() => console.log("Location")}>
          Locatie
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
