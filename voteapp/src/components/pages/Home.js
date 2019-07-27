import React from 'react';
import API from '../../utils/API';
import Card from '../organisms/Card'


class Home extends React.Component {
    state = {
        engineerList: [],
        guidArray: []
    }

    componentDidMount() {

        this.getGuid(window.navigator.userAgent.replace(/\D+/g, ''))

        API.getEngineerInfo().then((res) => {
            this.setState({ engineerList: res.data })
        }).catch((err) => { console.log(err) })
    }

    getGuid = (gd) => {
        let stateGuid = this.state.guidArray;
        if (!stateGuid.includes(gd)) {
            stateGuid.push(gd)
            localStorage.setItem('guid', gd)
        }
    }

    getLocal = () => {
        let stateGuid = this.state.guidArray;
        stateGuid.push(localStorage.getItem('guid'))
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