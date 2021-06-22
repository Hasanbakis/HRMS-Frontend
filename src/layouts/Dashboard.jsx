import React from 'react';
import Sidebar from "./Sidebar";
import { Container,Grid } from "semantic-ui-react";
import JobAdvertismentList from '../pages/JobAdvertisementList';
import { Route } from "react-router-dom";
import EmployerList from '../pages/EmployerList';
import CandidateList from '../pages/CandidateList';
import JobAdvertisementDto from '../pages/JobAdvertisementDto';
import JobAdvertisementCreate from '../pages/JobAdvertisementCreate';


export default function Dashboard() {
    return (
        <div>
          <Container className="main">
         <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={JobAdvertismentList}/>
            <Route exact path="/JobAdvertisement" component={JobAdvertismentList}/>
            <Route exact path="/JobAds/:id" component={JobAdvertisementDto}/>
            <Route exact path="/employers" component={EmployerList}/>
            <Route exact path="/candidates" component={CandidateList}/>
            <Route exact path="/jobPostCreate" component={JobAdvertisementCreate}/>
           
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>
        </div>
    );
}