import { store } from './index';
import { connect } from 'react-redux';
import * as React from 'react';
import { addImage } from './actions';

class WorkSpace extends React.Component {

    render() {
        return (
            <div className="workSpace">
                {this.props.items.map((item, index) => (
                    <div className="contentItem"><img key={index} src={item.src} style={{ width: '10em' }} /></div>
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