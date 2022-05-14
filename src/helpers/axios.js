import axios from 'axios';

const baseUrl = 'https://randomuser.me/api/?';

export const fetchApi = ( endpoint,  data,  method = 'GET' ) => {

    const url = `${baseUrl}${endpoint}`;

    return axios( { method , url , data } );

};