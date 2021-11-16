import React from 'react';
import { Grid, Image, Input, Icon } from 'semantic-ui-react';
import DatePicker from '../_Components/DatePicker';
import Logo from '../../images/logo.jpg';

const Header = ({
  dateValue,
  onDateChange,
  onBillToChange,
  onTaxChange,
  address,
  invoiceNumber
}) => (
  <Grid columns="equal" container>
    <Grid.Column>
      <Image src={Logo} size="small" wrapped />
    </Grid.Column>
    <Grid.Column width={6} />
    <Grid.Column>
      <h1>INVOICE</h1>
      <Input
        onChange={evt => onTaxChange(evt.target.value)}
        style={{ marginBottom: '2rem' }}
        iconPosition="left"
        placeholder="Invoice Number"
      >
        <Icon name="hashtag" />
        <input value={invoiceNumber} />
      </Input>
     <br/> Date: <DatePicker dateValue={dateValue} onDateChange={onDateChange} />
    </Grid.Column>
  </Grid>
);

export default Header;
