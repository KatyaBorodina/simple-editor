import { connect } from 'react-redux';
import { changeItemWidth } from './actions';
import * as React from 'react';

class Resizable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            resizing: false
        };

        this.el = React.createRef();

        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    componentDidMount() {
        window.addEventListener('mousemove',this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
    }

    render() {
        return (
            <div className="resizable" ref={this.el} style={{ width: `${this.props.width + 2}em` }}>
                {this.props.children}

                <div className="fn-resizer resizer top-left"
                     onMouseDown={this.handleMouseDown}
                ></div>
                <div className="fn-resizer resizer top-right"
                     onMouseDown={this.handleMouseDown}
                ></div>
                <div className="fn-resizer resizer bottom-right"
                     onMouseDown={this.handleMouseDown}
                ></div>
                <div className="fn-resizer resizer bottom-left"
                     onMouseDown={this.handleMouseDown}
                ></div>
            </div>
        )
    }

    handleMouseUp() {
        this.setState({
            resizing: false
        });
    }

    handleMouseDown(event) {
        this.setState({
            resizing: true
        });
    }

    handleMouseMove(event) {
        if (!this.state.resizing || !event.target.classList.contains('fn-resizer')) {
            return;
        }

        console.log(event.clientX);
        console.log(this.el.current.offsetLeft);
        let newWidth = (event.clientX - this.el.current.offsetLeft) / 16;

        this.props.changeItemWidth(this.props.id, newWidth);
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    changeItemWidth: (id, width) => dispatch(changeItemWidth(id, width))
});

export default connect(mapStateToProps, mapDispatchToProps)(Resizable);