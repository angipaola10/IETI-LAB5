
const tasks = [

    {
        description: "Implement Login View",
        responsible: {
            name: "angi",
            email: "angi@mail.com"
        },
        status: "Completed",
        dueDate: new Date(2021, 2, 25)
    },

    {
        description: "Implement Main View",
        responsible: {
            name: "angi",
            email: "angi@mail.com"
        },
        status: "Completed",
        dueDate: new Date(2021, 2, 25)
    },

    {
        description: "Implement Login Controller",
        responsible: {
            name: "paola",
            email: "paola@mail.com"
        },
        status: "Ready",
        dueDate: new Date(2021, 2, 25)
    },

    {
        description: "Facebook Integration",
        responsible: {
            name: "paola",
            email: "paola@mail.com"
        },
        status: "In progress",
        dueDate: new Date(2021, 2, 25)
    }
];

export const addTask = (newTask) =>{
    tasks.push(newTask);
}

export const getTasks = () => {
    return tasks;
}