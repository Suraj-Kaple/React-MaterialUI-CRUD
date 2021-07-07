import axios from 'axios'

const url = "http://localhost:3002/users";

export const getPlayers = async (id) => {
    id = id || ''
    return await axios.get(`${url}/${id}`);
}

export const addPlayer = async (player) => {
    return await axios.post(url, player);
}

export const editPlayer = async (id, player) => {
    return await axios.put(`${url}/${id}`, player);
}

export const deletePlayer = async (id) => {
    return await axios.delete(`${url}/${id}`);
}