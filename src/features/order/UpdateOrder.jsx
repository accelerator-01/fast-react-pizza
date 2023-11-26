import { useFetcher } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../../ui/Button";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

UpdateOrder.propTypes = { order: PropTypes.node.isRequired };

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  UpdateOrder(params.orderId, data);
  return null;
}
