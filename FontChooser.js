class FontChooser extends React.Component {

    constructor(props) {
        super(props);
        var isBold = false;
        if(this.props.bold == 'true')
            isBold=true;

        /* Error Handling
        1.If the “min” property has a value of 0 or a negative number,
        its value should be treated as 1 for limiting the smallest font size

        2.If the “min” property is greater than the “max” property, 
        then “min” and “max” should both be treated as the larger of the two, i.e. the “min” property

        3.If the “size” property is less than the “min” property, 
        the initial value should be treated as the same as the “min” property, or treated as 1 if “min” is 0 or negative

        4.If the “size” property is greater than the “max” property, 
        the initial value should be treated as the same as the “max” property
        */

        //1
        var defaultMin = 1;
        if(Number(this.props.min)>0)
            defaultMin = Number(this.props.min);
        //3
        var defaultSize = Number(this.props.size);
        if(defaultSize < defaultMin)
            defaultSize = defaultMin;

        //4
        var defaultMax = Number(this.props.max);
        if(defaultSize > defaultMax)
            defaultSize = defaultMax;

        var defaultHidden = true;
        if(this.props.hidden!=undefined)
            defaultHidden=this.props.hidden;
        
        this.state = { isHidden: defaultHidden, bold: isBold, size: defaultSize, beginSize: defaultSize, color:'black', min: defaultMin, max:defaultMax };
    }
    
    /*
    When the checkbox, buttons, and “fontSizeSpan” element are hidden and the user clicks on the text that 
    the component is displaying in the HTML page, the checkbox, buttons, and “fontSizeSpan” element should appear to the left of the text.

    When the checkbox, buttons, and “fontSizeSpan” element are shown and the user clicks on the text that 
    the component is displaying in the HTML page, the checkbox, buttons, and “fontSizeSpan” element should disappear, i.e. become hidden again.
    */
    handleTextClick(){
        this.setState({isHidden: !this.state.isHidden});
    }

    /*
    If the React component’s “bold” property is set to “true” when the component is initially created, 
    the checkbox should be selected/checked when it is first displayed. If the “bold” property is set to “false,” 
    the checkbox should be unselected/unchecked.

    If the checkbox is unselected/unchecked and then the user checks it, the text should immediately change to bold.

    If the checkbox is selected/checked and then the user unchecks it, the text should immediately change to normal font weight.
    */
    handleCheckboxClick(){
        if(this.state.bold)
            this.setState({bold: false});
        else
            this.setState({bold: true});
    }
    
    /*When the user clicks the “decreaseButton” (the one with the “—” sign on it), 
    the value in the “fontSizeSpan” should decrement and the font size of the text
    should immediately decrease by one as well. However, the value in the “fontSizeSpan” 
    may not be smaller than the React component’s “min” property. 
    If the value in the “fontSizeSpan” equals the “min” property and the user clicks the “decreaseButton,” there should be no change.
    */
    decreaseSize(){

        if(this.state.size>Number(this.state.min))
            this.setState({size: this.state.size-1});
    }

    /*Likewise, when the user clicks the “increaseButton” (the one with the “+” sign on it),
    the value in the “fontSizeSpan” should increment and the font size of the text should 
    immediately increase by one as well. However, the value in the “fontSizeSpan” may not be 
    larger than the React component’s “max” property. If the value in the “fontSizeSpan” equals 
    the “max” property and the user clicks the “increaseButton,” there should be no change.*/
    increaseSize(){
        if(this.state.size<Number(this.state.max))
            this.setState({size: this.state.size+1});
    }

    /*When the text in the “fontSizeSpan” is double-clicked, 
    its value should become equal to the initial value set as the component’s initial “size” property, 
    and the font size of the text that is displayed should immediately change to that value as well.*/
    resetSize(){
        this.setState({size: Number(this.state.beginSize)});
    }


    render() {

        var formHidden = this.state.isHidden? 'none':'';
        var myHidden= this.state.isHidden? 'true':'false';
        var myWeight=this.state.bold?'bold':'normal';
        var mySize = this.state.size;
        var myColor = this.state.color;
        
        if(this.state.size==this.state.max || this.state.size==this.state.min)
            myColor='red';
        else
            myColor='black';

        return(
               <div>
                      

            <div style={{display:formHidden}}>

                     <input type="checkbox" id="boldCheckbox" onClick={this.handleCheckboxClick.bind(this)}   checked={this.state.bold} defaultChecked={this.state.bold}/>
	                 <button id="decreaseButton"  onClick={this.decreaseSize.bind(this)} >-</button>
	                 <span style={{color:myColor}} id="fontSizeSpan" onDoubleClick={this.resetSize.bind(this)} >{mySize}</span>
	                 <button id="increaseButton" onClick={this.increaseSize.bind(this)} >+</button>
	
           </div>                  
                     <span style={{fontWeight:myWeight, fontSize:mySize}}
                     id="textSpan" onClick={this.handleTextClick.bind(this)}>{this.props.text}</span>   

	           </div>
	          );
     }

     
}

