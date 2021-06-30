import React from 'react';


class TypeInRealTime extends React.Component {
    handleChange(e) {
        this.props.updateActiveHeader(e.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={ (e) => { this.handleChange(e) } }></input>
                <h3> { this.props.activeHeader } </h3>
            </div>
        )
    }
}

export default TypeInRealTime;