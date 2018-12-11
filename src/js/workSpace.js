import { connect } from 'react-redux';
import * as React from 'react';
import Resizable from './resizable';
import { addImage } from './actions';

class WorkSpace extends React.Component {

    render() {
        return (
            <div className="workSpace">
                {this.props.items.map((item, index) => (
                    <Resizable key={index} {...item} >
                        <div className="contentItem"><img src={item.src} style={{ width: item.width + 'em' }} /></div>
                    </Resizable>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state
});

const mapDispatchToProps = (dispatch) => ({
    addImage: (image) => dispatch(addImage(image))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkSpace);