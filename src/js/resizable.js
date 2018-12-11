import { connect } from 'react-redux';
import { changeItemWidth } from './actions';
import * as React from 'react';

class Resizable extends React.Component {

    constructor(props) {
        super(props);

        this.el = React.createRef();
        this.handleResizerMove = this.handleResizerMove.bind(this);
    }

    componentDidMount() {
/*        let element = this.el.current;

        element.addEventListener('mousedown', (event) => this.getInitialPosition(event));
        element.addEventListener('mouseup', (event) => this.setNewPosition(event));*/
    }

    render() {
        return (
            <div className="resizable" style={{ width: `${this.props.width + 2}em` }} ref={this.el}>
                {this.props.children}

                <div className="fn-resizer resizer top-left" onMouseMove={this.handleResizerMove}></div>
                <div className="fn-resizer resizer top-right" onMouseMove={this.handleResizerMove}></div>
                <div className="fn-resizer resizer bottom-right" onMouseMove={this.handleResizerMove}></div>
                <div className="fn-resizer  resizer bottom-left" onMouseMove={this.handleResizerMove}></div>
            </div>
        )
    }

    handleResizerMove(event) {
        let newWidth = this.props.width + 1;

        this.props.changeItemWidth(this.props.id, newWidth)
    }

    getInitialPosition(event) {
        if (!event.target.classList.contains('fn-resizer')) {
            return;
        }

        window.addEventListener('mousemove', (event) => this.resizeElement(event));
        window.addEventListener('mouseup', (event) => this.stopElementResizing(event));
    }

    setNewPosition(event) {

    }

    resizeElement(event) {

    }

    stopElementResizing(event) {

    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    changeItemWidth: (id, width) => dispatch(changeItemWidth(id, width))
});

export default connect(mapStateToProps, mapDispatchToProps)(Resizable);