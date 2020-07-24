import React from 'react';

import { Cards, CountryPicker,Chart} from './components';
import { fetchData } from './api/';
import styles from './App.module.css';



class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
      
      <h1 className={styles.titlesty}><img src="/images/virusicon.png" className={styles.sym}/> COVID-19 TRACKER</h1>
      
        
        <Cards data={data} />
        <p className={styles.textsty}>Select Country: </p>
       <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
      
    );
  }
}

export default App;