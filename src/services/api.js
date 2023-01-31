import axios from 'axios';


const userUrl  = 'http://localhost:3002/users';

export const getUsers = async (id) => {
    id = id || '';

    try {
        return await axios.get(`${userUrl}/${id}`);
    }catch(error){
        console.log('Error while calling getUsers api ', error);
    }
}

export const addUsers = async (user) => {
    return  await axios.post(`${userUrl}`, user);
}

export const deleteUsers = async (id) => {
    return await axios.delete(`${userUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${userUrl}/${id}`, user);
}