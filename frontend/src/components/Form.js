import React from 'react';


class Form extends React.Component {
    removeName = (name) => {
        this.props.updateTitles(name);
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.titles.map((name) => {
                            if (name !== 'maddam') {
                                return <li onClick={ (e) => {this.removeName(name) }}> { name } </li>;
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Form;