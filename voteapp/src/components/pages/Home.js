import React from 'react';
import API from '../../utils/API';
import Card from '../organisms/Card'


class Home extends React.Component {
    state = { engineerList: [] }

    componentDidMount() {
        API.getEngineerInfo().then((res) => {
            this.setState({ engineerList: res.data })
        }).catch((err) => { console.log(err) })
    }

    render() {
        return <div>
            <Card list={this.state.engineerList} />
        </div>
    }



}



export default Home;