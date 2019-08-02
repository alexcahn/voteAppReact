import React from 'react';
import API from '../../utils/API';
import Card from '../organisms/Card'


class Home extends React.Component {
    state = {
        engineerList: [],
        count: 0
    }

    componentDidMount() {
        API.getEngineerInfo()
            .then((res) => {
                API.exportEngineerInfo(res.data)
            })
            .catch((err) => { console.log(err) })
    }

    render() {
        return <div>
            {
                this.state.engineerList.map(object => (
                    <Card guidArray={this.state.guidArray} engineer={object} />
                ))}
        </div>
    }

}

export default Home;