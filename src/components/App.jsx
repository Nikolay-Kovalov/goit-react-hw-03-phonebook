import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout";


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  
  }

  addContact = (name, number) => {
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) 
    {
      alert(`${name} is already in contacts`)
    return}
    this.setState(prevState => ({ contacts: [...prevState.contacts, {id: nanoid(), name, number }] }))
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  changeFilter = (evt) => {
    this.setState({filter: evt.currentTarget.value})
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts})
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) 
      {localStorage.setItem('contacts', JSON.stringify(this.state.contacts))}
  }
 
  render() {
    const { contacts, filter } = this.state
    
        const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    return (
      <Layout>
        <h1>Phonebook</h1>
  <ContactForm onSubmit={this.addContact}/>

  <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          items={filteredContacts}
           onDelete={this.deleteContact}/>
      </Layout>
  )
  }
}