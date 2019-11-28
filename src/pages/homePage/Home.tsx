import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/header';
import SourceCard from '../../components/sourceCard';
import * as Constants from '../../config/Constants';
import API from '../../config/AxiosBase';
import SourceCardObject from '../../modals/SourceCardInterface';


interface State {
  sourceCardData: Array<SourceCardObject>;  
}

export default class Home extends Component<{}, State> {
    state: State ={
        sourceCardData: []
   }
    componentDidMount(){
        this.getSourceCardData(Constants.CountryCode);
      
    }

    changeCountry = (countryCode:any) => {
        console.log("changeCountry", countryCode);
        this.getSourceCardData(countryCode);
      
    }

    getSourceCardData = (countryCode:any) => {
        API.get(`sources?country=${countryCode}&apiKey=${Constants.ApiKey}`)
      .then(res => {
        
        console.log('get res', res.data.sources);
        
        this.setState({
            sourceCardData: res.data.sources,
        });
      })
    }
    render() {
         
        return(
            <>
            <Header changeCountry = {this.changeCountry}/>
           {this.state.sourceCardData.map((sourceObject) => 
           <Container>
           <Row>
               <SourceCard sourceCardData ={sourceObject}/>
           </Row>
           </Container>
           )}
            
            
            </>
        );
    }
}