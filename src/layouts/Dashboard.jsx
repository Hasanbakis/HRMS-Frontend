import React from 'react';
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import JobAdvertismentList from '../pages/JobAdvertisementList';

export default function Dashboard() {
    return (
        <div>
         <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <JobAdvertismentList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    );
}
