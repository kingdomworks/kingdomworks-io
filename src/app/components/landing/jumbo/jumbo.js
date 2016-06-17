import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class JumboComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
        this.updateLoadingState = this.updateLoadingState.bind(this);
    }

    componentDidMount() {
        const that = this;
        const images = [
            ReactDOM.findDOMNode(this.refs.bgimg),
            ReactDOM.findDOMNode(this.refs.mgimg),
            ReactDOM.findDOMNode(this.refs.fgimg),
        ];
        imagesLoaded( images, { background: true }, function() {
            that.updateLoadingState();
        })
    }

    updateLoadingState() {
        this.setState({
            loading: false
        })
    }
 
    render() {
        const myClassNames = classNames({
            'jumbo': true,
            'loading': this.state.loading
        })
        return (
            <section className={myClassNames}>
                <div className='blur'></div>
                <div ref="bgimg" className='bg'></div>
                <div className='logo-area'>
                    <img className='gear' src='/assets/img/gear.svg' alt='loading affordance'/>
                    <img className='logo' src='/assets/img/light_logo.svg' alt='company logo'/>
                </div>
                <div ref="mgimg" className='mg'></div>
                <div ref="fgimg" className='fg'></div>
            </section>
        )
    }
}

export default JumboComponent;
