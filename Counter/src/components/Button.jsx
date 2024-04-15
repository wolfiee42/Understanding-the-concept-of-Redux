import PropTypes from "prop-types"
const Button = ({ children, type, handler }) => {
    const style =
        type === "danger"
            ? "bg-red-600 text-white px-3 py-2 rounded shadow hover:bg-red-700 hover:cursor-pointer transition-colors duration-150"
            : "bg-blue-600 text-white px-3 py-2 rounded shadow hover:bg-blue-700 hover:cursor-pointer transition-colors duration-150"
    return (
        <div className={style} onClick={handler}>
            {children}
        </div>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    handler: PropTypes.func,
    type: PropTypes.string
}

export default Button;