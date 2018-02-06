import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import "./Timeline.css";



class Timeline extends React.Component{
  
       Myfunction(){
        var str=document.getElementById('myID').value;
        console.log(str);
        var poststr={
          "value":str
        }
        var headers = {
            'Content-Type': 'application/json'
        }
        axios.post('https://app.boiling91.hasura-app.io/',poststr,headers).then(
            function(response){
            console.log(JSON.stringify(response)); 
            document.getElementById('respId').style.display="block";


            if(response.data){
                
            document.getElementById('respId2').innerHTML='Data:  '+'Language:  '+JSON.stringify(response.data.language);
            document.getElementById('respId3').innerHTML='Data:  '+'Keywords:  '+JSON.stringify(response.data.keywords).replace(/"/g,'');
            document.getElementById('respId4').innerHTML='Data:  '+'Entities:  '+JSON.stringify(response.data.entities).replace(/"/g,'');
            document.getElementById('respId5').innerHTML='Data:  '+'Categories:  '+JSON.stringify(response.data.categories).replace(/"/g,'');
            document.getElementById('respId6').innerHTML='Data:  '+'Concepts:  '+JSON.stringify(response.data.concepts).replace(/"/g,'');
            document.getElementById('respId7').innerHTML='Data:  '+'Relations:  '+JSON.stringify(response.data.relations).replace(/"/g,'');
            document.getElementById('respId8').innerHTML='Data:  '+'Semantic Roles:  '+JSON.stringify(response.data.semantic_roles).replace(/"/g,'');
            document.getElementById('unit').innerHTML='Data:  '+'Usage-TextUnit:  '+JSON.stringify(response.data.usage.text_units);
            document.getElementById('char').innerHTML='Data:  '+'Usage-TextCharacters:  '+JSON.stringify(response.data.usage.text_characters);
            document.getElementById('feature').innerHTML='Data:  '+'Usage-Features:  '+JSON.stringify(response.data.usage.features);
            }
            
            }
        );
      };

    render()
    {    
  
    return (
    
    <div style={{padding: 0, width:"100%"}}> 
        
        <Paper  style={{ 
         width : "100%",
        height: 73,
        margin: "0rem",
        backgroundColor:'white'}}>
        <p style={{color: "black", fontSize: 25,fontWeight:20,  display: 'flex',
         justifyContent: 'center',
          position: 'absolute', marginTop: 20, marginLeft: "2%"}} class="watsonBody"><b>Watson <sup><font size="1">TM</font></sup></b></p>
        </Paper>
          <Paper style={{ 
        width : "100%",
        height: "max-content",
        margin: "0rem",
        marginTop: -30,
        backgroundColor:'whitesmoke',}}>
        <p style={{
           color: "#562f72", 
           marginLeft: "18%", 
           paddingTop: "2%",
           fontSize:30}}> Natural Language Understanding</p>
           <p style={{ 
               marginLeft: "18%",
               width:"60%",
               lineHeight: '1.7em'
           }}>Natural Language Understanding is a collection of APIs that offer text analysis through natural language processing. 
           This set of APIs can analyze text to help you understand its concepts, usage, language, keywords, entities ,sentiments and more.
            </p> </Paper> 
     <Paper style={{ 
        width : "100%",
        paddingBottom: "1%",
        height: "max-content",
        margin: "0rem",
        backgroundColor:'white'}}>
        <p style={{
           marginLeft: "18%", 
           fontSize:22,
           paddingTop : "1.5%",
           marginTop: 0
           }}> Examine a news article or other content</p>
           <Paper style={{ width: "65%",
           height:"max-content",
           marginLeft:"18%",
           border: "solid",
           borderWidth: "1px",
           paddingBottom: "1%"
         }}>
         <ul>
            <li><a>Text</a></li>
            <li><a>URL</a></li>
            <li><a>HTML</a></li>
        </ul>
        
        <textarea class="mytext" id="myID" rows="5" ></textarea>
        <button class="button_fill"onClick={this.Myfunction} > <b>Analyze</b> </button>
        </Paper>

 
         <div class='DesplayResponse' id="respId">
         <p style={{ 
           fontSize:26,
           paddingTop : "1.5%",
           paddingLeft:"5%",
           marginTop: 0
           }}>Response for analyzed text :</p>
             <ul>
                 <li class="responseText" id="unit"></li><br/>
                 <li class="responseText" id="char"></li><br/>
                 <li class="responseText" id="feature"></li>
             </ul>

         <p class="responseText" id="respId2"></p>
         <p class="responseText" id="respId3" style={{background: "whitesmoke"}}></p>
         <p class="responseText" id="respId4"></p>
         <p class="responseText" id="respId5" style={{background: "whitesmoke"}}></p>
         <p class="responseText" id="respId6"></p>
         <p class="responseText" id="respId7" style={{background: "whitesmoke"}}></p>
         <p class="responseText" id="respId8"></p>
         </div>
        
         </Paper>
    
        </div>
        );
    }
}

export default Timeline ;