import axios from 'axios';

export default {
    getEngineerInfo: function () {
        return axios.get('https://coding-assignment.g2crowd.com/');
    }
}

// store local storage, stor key as image url and value as count.