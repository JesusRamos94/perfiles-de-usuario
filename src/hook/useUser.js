import React from "react";
import { fetchApi } from "../helpers/axios.js";

export const useFilter = ( ) => {
    const [users, setUsers] = React.useState([]);

    const getAllUsers = async () => {
        try {
            const getUsers = await fetchApi( 'results=15', 'GET' );
            setUsers(getUsers.data.results);
        } catch (error) {}
    };

    const handlerFilter = ( target )=>{
        const reg = new RegExp( target ,'ig')
        return users.filter(user => reg.test(user.name.first) ||  reg.test(user.name.last) )
    }

    const deleteUsers = (email) => {
       const deleteUser = users.filter(user => user.email !== email);
        setUsers(deleteUser);
    }

    React.useEffect(() => {
     getAllUsers();
    }, []);

    return [handlerFilter, deleteUsers];
}