import React from 'react';
import API from '../../utils/API';
import Card from '../organisms/Card'


class Home extends React.Component {
    state = {
        engineerList: [],
    }

    componentDidMount() {
        API.getEngineerInfo().then((res) => {
            this.setState({ engineerList: res.data })
        }).catch((err) => { console.log(err) })
    }

    render() {
        return <div>
            {this.state.engineerList.map(object => (
                <Card engineer={object} />
            ))}
        </div>
    }

}

export default Home;