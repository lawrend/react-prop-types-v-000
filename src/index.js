import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Order extends React.Component {
    render () {
        return (
            <div className="order">
              <p>Cone: {this.props.cone}</p>
              <p>Size: {this.props.size}</p>
            </div>
        )
    }
};

Order.defaultProps = {
    cone: true,
    size: 'regular'
};

Order.propTypes = {
    cone: PropTypes.bool,
    size: PropTypes.string,
    scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
    orderInfo: PropTypes.shape({
        customerName: PropTypes.string.isRequired,
        orderedAt: PropTypes.number.isRequired
        // We're using UNIX timestamps here
    }).isRequired
};

ReactDOM.render(
    <Order />, document.getElementById('root')
);
