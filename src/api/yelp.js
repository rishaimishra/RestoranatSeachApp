import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer impmFi7VYlpld6BWrHgrPBJDrKF-W6TKY06RqQnpByRVpVjBnqv7aaWO7of57Jbm3Ld2WtNOkrk7p80pvq75Fqe2Bf23Mye4ohYqxUBqTtYj25EK1fpA62tOvFgRX3Yx'

    }
});