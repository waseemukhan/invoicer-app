import React from 'react';
import { Grid } from 'semantic-ui-react';

const ItemHeading = () => (
  <Grid container>
    <Grid.Row>
      <Grid.Column width={9}>
        <h4>Product Title</h4>
      </Grid.Column>
      <Grid.Column width={2}>
        <h4>Category</h4>
      </Grid.Column>
      <Grid.Column width={2}>
        <h4>Price</h4>
      </Grid.Column>
    </Grid.Row>
    <hr style={{ width: '100%' }} />
  </Grid>
);

export default ItemHeading;
