import React from 'react';
import { Grid, Input, Icon, Button } from 'semantic-ui-react';

const InputRow = ({
  fields, onRemoveField, onTitleChange, onCategoryChange, onPriceChange,
}) => (
  <Grid container>
    {fields.map((el, i) => (
      <React.Fragment key={i}>
        <Grid.Row>
          <Grid.Column width={9}>
            <Input value={el.title} style={{ width: '100%' }} onChange={onTitleChange(i)} />
          </Grid.Column>
          <Grid.Column width={2} textAlign="right">
            <Input value={el.category} style={{ width: '100%' }} onChange={onPriceChange(i)} />
          </Grid.Column>
          <Grid.Column width={2} textAlign="right">
            <Input value={el.price} style={{ width: '100%' }} onChange={onCategoryChange(i)} />
          </Grid.Column>
          <Grid.Column width={1} textAlign="right" verticalAlign="middle">
            <Button icon={<Icon name="close" />} onClick={() => onRemoveField(i)} />
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    ))}
  </Grid>
);

export default InputRow;
