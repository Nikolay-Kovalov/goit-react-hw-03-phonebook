import { AddButton, Form, Label, Input } from "./ContactForm.styled";
import PropTypes from 'prop-types'
import { Component } from "react";


export class ContactForm extends Component {
  
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    state = {
        name: '',
        number: '',
    };

        
  
    handleSubmit = evt => {
        evt.preventDefault();
        const { name, number } = evt.target.elements;
        this.props.onSubmit(name.value, number.value)
        evt.currentTarget.reset()
  

    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    /></Label>
                <Label>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    /></Label>
                <AddButton type="submit">Add contact</AddButton>
            </Form>
        )
    }
}
// export const ContactForm = ({ onSubmit }) => {
  
        
  
//     const handleSubmit = evt => {
//         evt.preventDefault();
//         const { name, number } = evt.target.elements;
//         onSubmit(name.value, number.value)
//         evt.currentTarget.reset()
  

//     }
//     return (
//         <Form onSubmit={handleSubmit}>
//             <label>
//                 Name
//                 <input
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//             /></label>
//             <label>
//                 Number
//                 <input
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 /></label>
//             <AddButton type="submit">Add contact</AddButton>
//         </Form>
//     )
// }