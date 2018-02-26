// Counter example 1
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }

    incrementCount() { //callback function
        this.setState({ count: this.state.count+1 });
    }

    render() // invoked when setState is called
    {
        return(
            <div> 
            Count: {this.state.count}
              <button onClick={this.incrementCount.bind(this)} type="button" 
                  >Click</button>
           </div>
        );
              }
};

// Like Toggle example 2
class LikeButton extends React.Component{

    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    toggle(){
        this.setState({liked: !this.state.liked});
    }

    render(){
        var name = this.props.name;
        var txt = this.state.liked ? 'Unlike' : 'Like';
        var myColor = this.state.liked ? 'red' : 'black';
        var weight = this.state.liked ? 'bold' : 'normal';
        return(
            <p>
            <span style={{color:myColor,fontWeight:weight}}>
            {name}
            </span>

            <span onClick={this.toggle.bind(this)}>
            {'\ud83d\udc4d' + txt}
            </span>
            </p>
            );
}
};


// Example 3 - multiple events binding
            class MyText extends React.Component{

                constructor(props){
                    super(props);
                    this.state={ bold: false, color: 'black'};
                }

                handleMouseOver(){
                    this.setState({bold: true});
                }

                handleMouseOut(){
                    this.setState({bold: false});
                }
    
                handleClick(){
                    if(this.state.color=='red')
                        this.setState({color:'black'});
                    else
                        this.setState({color:'red'});
                }

                render(){
                    var myColor=this.state.color;
                    var weight=this.state.bold?'bold':'normal';
                    return(
                        <span style={ {color:myColor, fontWeight:weight} }
                          onClick={this.handleClick.bind(this)}
                onMouseOver={this.handleMouseOver.bind(this)}
                    onMouseOut={this.handleMouseOut.bind(this)}
                        >
                        {this.props.text}
                        </span>
                        );
                }
            };
