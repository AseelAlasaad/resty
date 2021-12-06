import React,{useState, useEffect} from 'react';

import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Result';
import axios from 'axios';
function App() {

  const [Data, setData]=useState(null);
  const [requestParams,setrequestParams]=useState({});


  const callApi =(formData) => {
  
    const Data = {
   
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
      // fruits:[
      //  {url:'https://fruit-api-301.herokuapp.com/getFruit'}, 
      //   {id:1,"name":"Apple","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg","price":35},
      //   {id:2,"name":"Banana","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg","price":12},
      //   {id:3,"name":"Grapes","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg","price":45},
      //   {id:4,"name":"Strawberry","image":"http://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/039/158/medium/shutterstock_142361884.jpg?2019","price":36},
      //   {id:5,"name":"Mango","image":"https://scitechdaily.com/images/Fresh-Mango.jpg","price":12},
      //   {id:6,"name":"Watermelon","image":"https://all-americaselections.org/wp-content/uploads/2019/06/Watermelon-Mambo.jpg","price":34},
      //   {id:7,"name":"Peach","image":"http://static1.squarespace.com/static/5602f08de4b0cb7ca5d4a933/56e5b8805f21e0489f531567/56e5ba715f21e0489f532ed2/1457896049909/Peaches.jpg?format=original","price":50},
      //   {id:8,"name":"Cherry","image":"https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/health_benefits_of_cherries_slideshow/1800ss_getty_rf_cherries_alone.jpg?resize=650px:*","price":50},
      //   {id:9,"name":"Orange","image":"https://todaynews7.com/wp-content/uploads/2021/02/Orange.jpg","price":16},
      //   {id:10,"name":"Plum","image":"https://chefsmandala.com/wp-content/uploads/2018/03/Plum.jpg","price":13},
      //   {id:11,"name":"Guava","image":"https://sob-prd-cdn-products.azureedge.net/media/image/product/en/medium/0000000004299.jpg","price":33}]
    };
    setData(Data);
    setrequestParams(formData);
  }

 
    return (
      <React.Fragment>
        <Header />
        <div  data-testid="Method-value">Request Method: {requestParams.method}</div>
        <div data-testid="URL-value">URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={Data} />
        <Footer />
      </React.Fragment>
    );

}

export default App;