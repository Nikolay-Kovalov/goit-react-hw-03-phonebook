import PropTypes from "prop-types"
import { ContactItem } from "components/ContactItem/ContactItem";

export const ContactList = ({items, onDelete}) => {
        return (
            <ul>
                {items.map(item => <ContactItem key={item.id} contact={item} onDelete={onDelete} />)}
            </ul>
        )
    }

    ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape),
  onDeleteContact: PropTypes.func,
};
