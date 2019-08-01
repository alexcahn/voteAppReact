import axios from 'axios';

export default {
    getEngineerInfo: function () {
        return axios.get('https://coding-assignment.g2crowd.com/');
    },
    exportEngineerInfo: function (engineerData) {
        console.log(engineerData)
        return axios.post("/api/engineers/createEngineers", engineerData)
            .then(res => console.log(res))
            .catch(err =>
                console.log(err))
    },
    updateCountTotal: function (engineerData) {
        return axios.put("/api/engineers/createEngineers");
    }
}