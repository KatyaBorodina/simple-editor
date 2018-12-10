import * as React from 'react';

class Controls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            image: '',
            imageUrl: ''
        };

        this.handleImageChange = this.handleImageChange.bind(this);
    }

    render() {
        let imageUrl = this.state.imageUrl;

        return (
            <div>
                <form action="" noValidate={true}>
                    <div>
                        <label htmlFor="image">Add photo</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={this.handleImageChange}
                        />
                    </div>
                </form>
                {!!imageUrl && <img src={imageUrl} />}
            </div>
        )
    }

    handleImageChange(event) {
        event.preventDefault();

        let reader = new FileReader();
        let imageFile = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: imageFile,
                imageUrl: reader.result
            });
        };

        if (imageFile) {
            reader.readAsDataURL(imageFile);
        }
    }
}

export default Controls;