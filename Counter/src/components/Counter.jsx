import PropTypes from "prop-types";
import Button from "./Button";
import Count from "./Count";

const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <Count count={count} />
            <div className="flex space-x-3">
                <Button handler={onIncrement}>Increment</Button>
                <Button type="danger" handler={onDecrement}>Decrement</Button>
            </div>
        </div>
    );
};

Counter.propTypes = {
  count: PropTypes.number,
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
}

export default Counter;