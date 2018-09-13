import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import SideDrawer from "./SideDrawer";
import { Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

class Header extends Component {
  state = {
    sideDrawerOpen: false,
    headerTransparent: true
  };
  toggleSideDrawer = () =>
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });

  handleScroll = e => {
    if (window.scrollY > 0) {
      this.setState({ headerTransparent: false });
    } else {
      this.setState({ headerTransparent: true });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  //   componentWillUnmount() {
  //     window.removeEventListener("scroll");
  //   }

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerTransparent
            ? "transparent"
            : "#2f2f2f",
          padding: "10px 0"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous .header_logo_venue" />
            <div className="header_logo_title">Event</div>
          </div>
          <IconButton onClick={this.toggleSideDrawer} aria-label="Menu">
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
        </Toolbar>
        <SideDrawer
          open={this.state.sideDrawerOpen}
          onClose={() => this.toggleSideDrawer()}
        />
      </AppBar>
    );
  }
}

export default Header;
