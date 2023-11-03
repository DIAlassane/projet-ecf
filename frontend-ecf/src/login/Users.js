import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Users = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/users', {
                    signal: controller.signal
                })
                .then(result => setUsers(result.data))
                .catch(err => console.log(err));
                isMounted && setUsers(response.data);
            } catch (err) {
                console.error(err)
            }
        }
        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

  return (
    <article>
        <h2>Users list</h2>
        {users?.length
            ? (<ul>
                {users.map((user, i) => <li>{user?.username}</li>)}
                </ul>
            ) : <p>No users to display</p>
        }
    </article>
  )
}
