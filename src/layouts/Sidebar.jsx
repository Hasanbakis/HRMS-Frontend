import React from 'react'
import { Link } from 'react-router-dom';
import {Menu,Icon} from "semantic-ui-react";



export default function Sidbar() {
    return (
        <div>
        <Menu fluid compact icon="labeled" vertical>
       <Menu.Item as={Link} to={"/"}>
        <Icon name='paste' />
        Job Postings
      </Menu.Item>
      <Menu.Item as={Link} to={"/employers"}>
        <Icon name='factory' />
        Employers
      </Menu.Item>
      <Menu.Item as={Link} to={"/candidates"}>
        <Icon name='user' />
        Candidates
      </Menu.Item>
      </Menu>
        </div>
    )
}