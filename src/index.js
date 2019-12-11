import  React          from 'react';
import  ReactDOM       from 'react-dom';
import  './style/App.css';
import  reverse        from './helper';
import  Header         from './components/Header';
import  Input          from './components/Input';
import  DisplayResult  from './components/DisplayResult';



class ReverseString extends React.Component{
    state = {
        answer: undefined,
    }
    handleExpression = (e) =>
    {
        e.preventDefault();
        let str = e.target.elements.exp.value.trimStart();

        this.setState({answer: reverse(str)});
    }
    render()
    {
        let title = "Reverse a string";
        return (<div>
                    <Header title={title}/>
                    <div className="container">
                    <Input handleExpression={this.handleExpression}/>
                    <DisplayResult answer={this.state.answer}/>
                    </div>
               </div>);
    }
}

ReactDOM.render(<ReverseString />, document.getElementById('root'));
