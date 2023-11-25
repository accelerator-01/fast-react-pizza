import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { deleteItem } from "./cartslice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

DeleteItem.propTypes = {
  pizzaId: PropTypes.number.isRequired,
};

export default DeleteItem;
