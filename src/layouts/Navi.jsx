import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
        <Menu.Item  name="home" as={NavLink} to="/"/>
        <Menu.Item name="Job Posting" as={NavLink} to="/JobAdvertisement"/>
        <Menu.Item name="Candidates" as={NavLink} to="/candidates" />

        <Menu.Menu position="right" style={{ margin: '0.5em' }}>
            <Button primary as={Link} to={"/jobPostCreate"}>
              Add JobAdvert
            </Button>
            <Button.Group>
              <Button  to={"/login"}>Login</Button>
              <Button.Or />
              <Button positive  to={"/register"}>Register</Button>
            </Button.Group>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}