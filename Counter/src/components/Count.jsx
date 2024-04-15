import PropTypes from "prop-types"
const Count = ({ count }) => {
    return <div className="text-2xl font-semibold"> {count} </div>
};

Count.propTypes = {
    count: PropTypes.number
}

export default Count;