export const getUsers = ( ) => {
    return  fetch('https://taskplanner1-ieti-default-rtdb.firebaseio.com/users.json')
    .then( res => {
        alert(res);
        if (!res.ok) throw new Error('Response is NOT ok');
        return res.json();
    })
}

export const getTasks = ( ) => {
    return  fetch('https://taskplanner1-ieti-default-rtdb.firebaseio.com/tasks.json')
    .then( res => {
        if (!res.ok) throw new Error('Response is NOT ok');
        return res.json();
    })
}

export const postTask = ( newTask ) => {
    return  fetch('https://taskplanner1-ieti-default-rtdb.firebaseio.com/tasks.json', {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(newTask)
            }).then( res => {
                if (!res.ok) throw new Error('Response is NOT ok');
            });
}

export const getUserByUserName = ( userName ) => {
    return  fetch(`https://taskplanner1-ieti-default-rtdb.firebaseio.com/users/${userName}.json`)
    .then( res => {
        if (!res.ok) throw new Error('Response is NOT ok');
        return res.json();
    })
}

export const putUser = ( user, userName ) => {
    return  fetch(`https://taskplanner1-ieti-default-rtdb.firebaseio.com/users/${userName}.json`, {
                method: 'PUT',
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }).then( res => {
                if (!res.ok) throw new Error('Response is NOT ok');
            });
}
