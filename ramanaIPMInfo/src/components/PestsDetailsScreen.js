import React, { Component } from 'react';
import DetailsScreen from './DetailsScreen';
import * as actionCreator from "../store/actions/actions";

class PestsDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cropsDetails: []
        }
    }
    componentDidMount() {
        const _catposts = this.props.route.params._catposts;
        let getCropsDtls = [];
        _catposts.map(async (data) => {
            let getResult = await actionCreator.getCropsDetails(data._id);
            getCropsDtls.push(getResult);
            await this.setState({ cropsDetails: [...getCropsDtls] });
        })
    }
    render() {
        return (

            this.state.cropsDetails[0] === undefined ? (null) : (<DetailsScreen cropsDetails={this.state.cropsDetails[0]} myNav={this.props.navigation.navigate} _catposts={this.props.route.params._catposts} />)


        )
    }
}
export default PestsDetailsScreen;
