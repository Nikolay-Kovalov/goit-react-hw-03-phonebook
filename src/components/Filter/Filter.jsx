import PropTypes from "prop-types"
import { Field, Label } from "./Filter.styled"

export const Filter = ({value, onChange}) => (
    <Label>
       Find contacts by name
      <Field
         type="text"
         value={value}
         onChange={onChange}/>
   </Label>)


Filter.propTypes = {
   value: PropTypes.string,
   onChange: PropTypes.func.isRequired
}