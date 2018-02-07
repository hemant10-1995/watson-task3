
import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import TextTab from './Tabs/Text';
import URL from './Tabs/URL';
import HTML from './Tabs/HTML';

import { 
	Container, 
	Header, 
	Left, 
	Body, 
	Right, 
	Button, 
	Icon, 
	Title,
	Footer,
	Thumbnail,
	StyleProvider,	
	Tabs,
	Tab 
} from 'native-base';

export default class Mainscreen extends Component<{}> {
  render() {
    return (
    	<StyleProvider style={getTheme(material)}>
	    	<Container>
	      		<Header style={{elevation: 0}}>
	      			<Left>
	      				<Button transparent>
	      					<Thumbnail source={ require('./pictures/logo.jpg') } />
	      				</ Button>              
	      			</ Left>
	      			<Body>
	      				<Text style={{fontWeight: 'bold'}}>Natural Language Classifier</ Text>
	      			</Body>
	      			<Right />
	      		</ Header>
	      		<Text />      		
				<Body style={{ backgroundColor: '#ccd2dd'}}>
					<Text style={{fontWeight: 'bold', color:'#661548'}}>Natural Language Understanding</Text>
					<Text note>
						Natural Language Understanding is a collection of APIs that offer text analysis through natural language processing. This set of APIs can analyze text to help you understand its concepts, entities, keywords, sentiment, and more.
					</ Text>
					<Tabs>
		      			<Tab heading="Text">
		      				<TextTab />
		          		</Tab>
		          		<Tab heading="URL">
		          			<URL />
		          		</Tab>
		          		<Tab heading="HTML">
		          			<HTML />
		          		</Tab>
		      		</ Tabs>
		      	</ Body>
	      	</ Container>
	    </ StyleProvider>
    );
  }
}

