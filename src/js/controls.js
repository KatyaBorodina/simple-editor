import { connect } from 'react-redux';
import * as React from 'react';
import { addImage } from './actions';

class Controls extends React.Component {

    constructor(props) {
        super(props);

        this.handleImageChange = this.handleImageChange.bind(this);
    }

    render() {
        return (
            <div className="controls">
                <form action="" noValidate={true}>
                    <div>
                        <label htmlFor="image" className="btn">Add photo</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={this.handleImageChange}
                        />
                    </div>
                </form>
            </div>
        )
    }

    handleImageChange(event) {
        event.preventDefault();

        let reader = new FileReader();
        let imageFile = event.target.files[0];

        reader.onloadend = () => {
            this.props.addImage({
                src: reader.result
            });
        };

        if (imageFile) {
            reader.readAsDataURL(imageFile);
        }
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    addImage: (image) => dispatch(addImage(image))
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);