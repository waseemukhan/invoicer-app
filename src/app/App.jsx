import React from 'react';
import moment from 'moment';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import Header from '../Modules/Header/component';
import Items from '../Modules/ProductList/component';

const baseURL = 'https://fakestoreapi.com/products';

class App extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get(baseURL).then(response => response.data)
      .then((data) => {
        this.setState({ products: data })
        console.log(this.state.products)
      })
  }


  handleAddFiled = () => {
    this.setState((prevState, props) => {
      return {
        products: this.state.products.concat({
          title: '',
          category: '',
          price: 0
        })
      };
    });
  };

  handleRemoveField = idx => {
    this.setState((prevState, props) => {
      return {
        products: this.state.products.filter((s, sidx) => idx !== sidx)
      };
    });
  };

  handleItemTitleChange = idx => evt => {
    const newItemArray = this.state.products.map((product, sidx) => {
      if (idx !== sidx) return product;
      return { ...product, title: evt.target.value };
    });

    this.setState((prevState, props) => {
      return {
        products: newItemArray
      };
    });
  };

  handleItemCategoryChange = idx => evt => {
    const newItemArray = this.state.products.map((product, sidx) => {
      if (idx !== sidx) return product;
      return { ...product, category: evt.target.value };
    });

    this.setState((prevState, props) => {
      return {
        products: newItemArray
      };
    });
  };

  handleItemPriceChange = idx => evt => {
    const newItemArray = this.state.products.map((product, sidx) => {
      if (idx !== sidx) return product;
      return { ...product, price: evt.target.value };
    });

    this.setState((prevState, props) => {
      return {
        products: newItemArray
      };
    });
  };

  handleDateChange = date => {
    this.setState((prevState, props) => {
      return {
        date: moment(date)
      };
    });
  };

  handleBillToChange = data => {
    this.setState((prevState, props) => {
      return {
        to: data
      };
    });
  };

  handleTaxChange = data => {
    this.setState((prevState, props) => {
      return {
        number: data
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <Header
          dateValue={this.state.date}
          onDateChange={this.handleDateChange}
          onBillToChange={this.handleBillToChange}
          onTaxChange={this.handleTaxChange}
          address={this.state.to}
          invoiceNumber={this.state.number}
        />
        <Items
          fields={this.state.products}
          onAddFiled={this.handleAddFiled}
          onRemoveField={this.handleRemoveField}
          onTitleChange={this.handleItemTitleChange}
          onCategoryChange={this.handleItemCategoryChange}
          onPriceChange={this.handleItemPriceChange}
          loading={this.state.loading}
        />
      </React.Fragment>
    );
  }
}

export default App;
