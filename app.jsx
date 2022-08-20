class Calculator extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            equArr: ['0'],
            displayArr: []
        }
        this.equPusher =this.equPusher.bind(this);
        this.clearEqu = this.clearEqu.bind(this);
        this.solveEqu = this.solveEqu.bind(this);
        this.displayMan = this.displayMan.bind(this);
    }

    displayMan() {
        this.setState((state)=>{
            if(state.displayArr[0] == '0'){
                let newDisp = state.displayArr;
                newDisp.shift();
                return {
                    displayArr: newDisp
                }
            }
        });
    }

    equPusher (evt ){
        //preventing double .
        this.displayMan();
        if(this.state.displayArr.indexOf('.') > -1 && evt.target.textContent =='.'){
            return ;
        }else if(!isNaN(evt.target.textContent)){
            if(evt.target.textContent == '0' && this.state.displayArr.length == 0){
                
            }else{
                this.setState((state)=>{
                    if(state.displayArr.length != 0){
                    if(isNaN(state.displayArr[state.displayArr.length -1])&& state.displayArr[state.displayArr.length -1] != '.' && !isNaN(state.equArr[state.equArr.length-1]) ){
                        return {
                            equArr: state.equArr.concat(state.displayArr),
                            displayArr: [evt.target.textContent]
                        }
                    }else{
                        return {
                            displayArr: state.displayArr.concat(evt.target.textContent)
                        }
                    }
                }else{
                    return {
                        displayArr: state.displayArr.concat(evt.target.textContent)
                    }
                }
                    
                });
            }
        }else{
            if(evt.target.textContent == '.' ){
                this.setState(state =>{
                    return {
                        displayArr: state.displayArr.concat(evt.target.textContent)
                   }
                });
                console.log(this.state.displayArr.indexOf('.') > -1 )
            }else if(this.state.displayArr.length > 0 && isNaN(this.state.displayArr[this.state.displayArr.length-1]) && this.state.displayArr[this.state.displayArr.length-1] == '-' && isNaN(this.state.equArr[this.state.equArr.length-1]) ){
                this.setState(state=>{
                    return{
                        equArr: state.equArr.slice(0,state.equArr.length-1),
                        displayArr:  state.displayArr.slice(0,state.displayArr.length-1).concat(evt.target.textContent)
                    }
                });

            }else if(this.state.equArr.length == 1 && evt.target.textContent == '-' && this.state.displayArr.length == 0){
               this.setState({
                displayArr: [evt.target.textContent]
               }); 
            }else if(this.state.displayArr.length > 0 && !isNaN(this.state.displayArr[this.state.displayArr.length-1])){
                this.setState(state =>{
                    return {
                        equArr: state.equArr.concat(...state.displayArr),
                        displayArr: [evt.target.textContent]
                   }
                }); 

            }else if( this.state.displayArr.length == 0 && !isNaN(this.state.equArr[this.state.equArr.length-1]) ){
                this.setState(state =>{
                    return {
                        displayArr: state.displayArr.concat(...state.displayArr)
                   }
                }); 
            }else if(this.state.displayArr.length > 0 && isNaN(this.state.displayArr[this.state.displayArr.length-1]) && evt.target.textContent != '-') {
                this.setState(state=>{
                    return{
                        displayArr:  state.displayArr.slice(0,state.displayArr.length-1).concat(evt.target.textContent)
                    }
                });
            }else if(this.state.displayArr.length > 0 && isNaN(this.state.displayArr[this.state.displayArr.length-1]) && evt.target.textContent == '-') {
                this.setState(state=>{
                    return{
                        equArr: state.equArr.concat(...state.displayArr),
                        displayArr:  [evt.target.textContent]
                    }
                });
            }
        }
    }
    
    clearEqu (){
        this.setState(
            {
                equArr: [],
                displayArr: [0]
            }
        )
    }

    solveEqu(){
        this.setState(state=>{
            if(!isNaN(state.displayArr[state.displayArr.length-1])){
                let num = state.equArr;
                num = num.concat(state.displayArr);
                let i =0;
                for (const el of num) {
                    
                    if (el != 0){
                        break;
                    }else if(el == 0 && i != num.length-1){
                        num.shift();
                    }
                    i++;
                }

            return{
                equArr: [],
                displayArr: [eval(num.join(''))]
            }
        }
        })

        console.log(this.state.equArr);
    }
    
    render(){
        return (
            <div className="row col-sm-5">
        <div className="col-sm-6 text-center">
            <div className="row btn-row">
                <div className="col-sm-8"><button onClick={this.clearEqu} className="btn btn-danger form-control sEqu" id="clear">AC</button></div>
                <div className="col-sm-4"><button onClick={this.equPusher} className="btn btn-default form-control equ" id="divide">/</button></div>
            </div>
            <div className="row btn-row">
                <div className="col-sm-4"><button onClick={this.equPusher} className="btn btn-default form-control num" id="seven">7</button></div>
                <div className="col-sm-4"><button onClick={this.equPusher} className="btn btn-default form-control num" id="eight">8</button></div>
                <div className="col-sm-4"><button onClick={this.equPusher} className="btn btn-default form-control num" id="nine">9</button></div>
            </div>
            <div className="row btn-row">
                <div className="col-sm-4"><button onClick={this.equPusher} className="btn btn-default form-control num" id="four">4</button></div>
                <div className="col-sm-4"><button onClick={this.equPusher} className="btn btn-default form-control num" id="five">5</button></div>
                <div className="col-sm-4"><button onClick={this.equPusher} className="btn btn-default form-control num" id="six">6</button></div>
            </div>
            <div className="row btn-row">
                <div className="col-sm-4"><button onClick={this.equPusher} className="btn btn-default form-control num" id="one">1</button></div>
                <div className="col-sm-4"><button onClick={this.equPusher} className="btn btn-default form-control num" id="two">2</button></div>
                <div className="col-sm-4"><button onClick={this.equPusher} className="btn btn-default form-control num" id="three">3</button></div>
            </div>
            <div className="row btn-row">
                <div className="col-sm-8"><button onClick={this.equPusher} className="btn btn-default form-control num" id="zero">0</button></div>
                <div className="col-sm-4"><button onClick={this.equPusher} className="btn btn-default form-control" id="decimal">.</button></div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="row display-wrap text-end">
                <div className="col-sm-12 text-warning" id="predisplay">{this.state.equArr.join('')}</div>
                <div className="col-sm-12 display-6 text-light" id="display">{this.state.displayArr.join('')}</div>
                </div>
            <div className="row btn-row">
            <div className="col-sm-6"><button onClick={this.equPusher} className="btn btn-default form-control equ" id="add">+</button></div>
            <div className="col-sm-6"><button onClick={this.equPusher} className="btn btn-default form-control equ" id="subtract">-</button></div>
            </div>
            <div className="row btn-row">
            <div className="col-sm-6"><button onClick={this.equPusher} className="btn btn-default form-control equ" id="multiply">*</button></div>
            <div className="col-sm-6"><button onClick={this.solveEqu} className="btn btn-primary form-control sEqu" id="equals">=</button></div>
            </div> 
        </div>
        </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Calculator />
);