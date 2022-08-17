import React, { Component } from 'react'
import InputText from './InputText'
import DropdownSelect from './DropdownSelect'

class Main extends Component {
    state = {
        fields: [
            {
                input_type: "big_text",
                placeholder:"Name",
                name: "remaining_values",               
                required: true
            },
            {
                input_type: "text",
                placeholder: "Name",
                name: "remaining_values",    
                required: true
            },
            {
                input_type: "dropdown",
                placeholder: "Yurpose of loan",
                name: "YYame",      
                required: true,
                values :[
                    "Home",
                    "Business Loan",
                    "Others"
                ]               
            }
        ]}; 
    
    submitForm = event =>{
        const { fileds, ...inputFields } = this.state;
        console.log(inputFields);
        event.preventDefault();
    }

    _handleChange = event =>{
        this.setState({
            [event.currentTarget.name]: event.currentTarget.name
        });
    }
        

render() {
    const { fields } = this.state
    return(
        <form onSubmit={this.submitForm}>
            {fields.map(form => {
                if (form.input_type === "text"){
                    return(
                        <InputText
                            name={form.name}
                            placeholder={form.placeholder}
                            required={form.required}
                            key={form.placeholder}
                            _handleChange={this._handleChange}
                        />
                    );
                }
                // name, placeholder, required, val, _handleChange 
                if (form.input_type === "dropdown") {
                    return (
                        <DropdownSelect
                            name={form.name}
                            placeholder={form.placeholder}
                            required={form.required}
                            val={form.values}
                            key={form.placeholder}
                            _handleChange={this._handleChange}
                        />
                    );
                }
            })}
            
            <input type="submit" />
        </form>

    )
    
}

}
export default Main
