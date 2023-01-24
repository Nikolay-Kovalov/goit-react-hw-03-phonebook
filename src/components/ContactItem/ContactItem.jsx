import { Button, Text, Item } from "./ContactItem.styled"
import PropTypes from "prop-types"
export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
    return (
    <Item>
            <Text>{name}: <Text>{number}</Text></Text>
               <Button type="button" onClick={() => {onDelete(id)}}>Delete</Button>
        </Item>
     
   ) 
} 

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
