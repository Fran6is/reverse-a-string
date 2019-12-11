import React from 'react';


function Input (props)
{
    return (
        <form className="form" onSubmit={props.handleExpression}>
            <input className="form__input" name="exp" type="text" placeholder={props.value}></input>
            <button className="button" type="submit">Reverse</button>
        </form>
    );
}
Input.defaultProps = {
    value: "Enter a string to reverse"
}

export default Input;