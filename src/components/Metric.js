import React from 'react';
import PropTypes from 'prop-types';

const Metric = ({color,title,value,icon}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2^`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
/* aca para q los componentes tengan tipo de valor string o number y si alguno sea obligatorio required */
Metric.propTypes = {
    title : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
    value : PropTypes.number.isRequired,
    icon : PropTypes.string.isRequired,
}

/* esto es para agregar por default color, title icon o valor q quiera si me falta alguno */
Metric.defaultProps = {
    color : "danger"
}

export default Metric;
