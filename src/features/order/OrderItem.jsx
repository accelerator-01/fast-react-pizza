import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  console.log(isLoadingIngredients);
  console.log(ingredients);

  return (
    <li className="py-3">
      <div className="flex items-center justify-between text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  isLoadingIngredients: PropTypes.bool.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OrderItem;
