
import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput
} from 'react-native';
import { 
	Container, 	 
	Form,
	Label,
	Item,
	Content,
	Button,
	Body
} from 'native-base';



export default class URL extends Component<{}> {
	constructor(props) {
    	super(props);
    	this.state = {
      		text: '',
    	};
  	}
	render() {
    	return (
    		<Container>
    			<Content>
    			<Form>
            		<Item rounded last>
              			<View>
	       					<TextInput
	       						style={styles.textEdit}
	       						editable = {true}
	         					multiline = {true}
	         					numberOfLines = {3}
	         					placeholder = {'Put URL here!'}
	         					onChangeText={(text) => this.setState({text})}
	         					value={this.state.text}
	       					/>
     					</View>
            		</ Item>
            		<Body>
	            		<Button rounded style = {{backgroundColor : '#661548', width: 100}}>
	            			<Body>
	            				<Text style={{fontWeight: 'bold', color:'white'}}>Analyse!</ Text>
	            			</ Body>
	            		</ Button>
	            	</ Body>             		
          		</ Form>
          		</ Content>
    		</ Container>
   		);
  	}
}

const styles = StyleSheet.create(
{
	textEdit: {
    	width: 340,
    	
  }
});