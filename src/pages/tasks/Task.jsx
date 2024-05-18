/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Task = ({ boardId }) => {
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get(`http://localhost:5000/boards/${boardId}/tasks`);
        setTasks(response.data);
    };

    const addTask = async () => {
        const response = await axios.post(`http://localhost:5000/boards/${boardId}/tasks`, {
            title: taskTitle,
            description: taskDescription,
        });
        setTasks([...tasks, response.data]);
        setTaskTitle('');
        setTaskDescription('');
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        fetchTasks();
    };

    return (
        <div>
            <h2>Tasks</h2>
            <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="New Task Title" />
            <input value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder="New Task Description" />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        {task.title}: {task.description}
                        <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task;*/
/*(correct one)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Task = ({ boardId }) => {
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editingTaskTitle, setEditingTaskTitle] = useState('');
    const [editingTaskDescription, setEditingTaskDescription] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get(`http://localhost:5000/boards/${boardId}/tasks`);
        setTasks(response.data);
    };

    const addTask = async () => {
        const response = await axios.post(`http://localhost:5000/boards/${boardId}/tasks`, {
            title: taskTitle,
            description: taskDescription,
        });
        setTasks([...tasks, response.data]);
        setTaskTitle('');
        setTaskDescription('');
    };

    const updateTask = async () => {
        const response = await axios.put(`http://localhost:5000/tasks/${editingTaskId}`, {
            title: editingTaskTitle,
            description: editingTaskDescription,
        });
        setTasks(tasks.map(task => (task._id === editingTaskId ? response.data : task)));
        setEditingTaskId(null);
        setEditingTaskTitle('');
        setEditingTaskDescription('');
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        fetchTasks();
    };

    return (
        <div>
            <h2>Tasks</h2>
            <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="New Task Title" />
            <input value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder="New Task Description" />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        {editingTaskId === task._id ? (
                            <>
                                <input value={editingTaskTitle} onChange={(e) => setEditingTaskTitle(e.target.value)} />
                                <input value={editingTaskDescription} onChange={(e) => setEditingTaskDescription(e.target.value)} />
                                <button onClick={updateTask}>Update</button>
                            </>
                        ) : (
                            <>
                                {task.title}: {task.description}
                                <button onClick={() => {
                                    setEditingTaskId(task._id);
                                    setEditingTaskTitle(task.title);
                                    setEditingTaskDescription(task.description);
                                }}>Edit</button>
                                <button onClick={() => deleteTask(task._id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task;*/
// client/src/components/Task.js
// client/src/components/Task.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../boards/Board.css'; // Import the CSS file for consistent styling

const Task = ({ boardId }) => {
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editingTaskTitle, setEditingTaskTitle] = useState('');
    const [editingTaskDescription, setEditingTaskDescription] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get(`http://localhost:5000/boards/${boardId}/tasks`);
        setTasks(response.data);
    };

    const addTask = async () => {
        const response = await axios.post(`http://localhost:5000/boards/${boardId}/tasks`, {
            title: taskTitle,
            description: taskDescription,
        });
        setTasks([...tasks, response.data]);
        setTaskTitle('');
        setTaskDescription('');
    };

    const updateTask = async () => {
        const response = await axios.put(`http://localhost:5000/tasks/${editingTaskId}`, {
            title: editingTaskTitle,
            description: editingTaskDescription,
        });
        setTasks(tasks.map(task => (task._id === editingTaskId ? response.data : task)));
        setEditingTaskId(null);
        setEditingTaskTitle('');
        setEditingTaskDescription('');
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        fetchTasks();
    };

    return (
        <div>
            <h2>Tasks</h2>
            <div className="task-input">
                <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder="New Task Title" />
                <input value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder="New Task Description" />
                <button className="add" onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        {editingTaskId === task._id ? (
                            <>
                                <div>
                                <div>
                                    <input 
                                        value={editingTaskTitle} 
                                        onChange={(e) => setEditingTaskTitle(e.target.value)} 
                                        placeholder="Edit Task Title"
                                    />
                                </div>
                                <div>
                                    <input 
                                        value={editingTaskDescription} 
                                        onChange={(e) => setEditingTaskDescription(e.target.value)} 
                                        placeholder="Edit Task Description"
                                    />
                                </div>
                                <div>
                                    <button className="edit" onClick={updateTask}>Update</button>
                                </div>
                            </div>
                                
                            </>
                        ) : (
                            <>
                                {task.title}: {task.description}
                                <button className="edit" onClick={() => {
                                    setEditingTaskId(task._id);
                                    setEditingTaskTitle(task.title);
                                    setEditingTaskDescription(task.description);
                                }}>Edit</button>
                                <button className="delete" onClick={() => deleteTask(task._id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task;

/*<input value={editingTaskTitle} onChange={(e) => setEditingTaskTitle(e.target.value)} /><br/><br/>
                                <input value={editingTaskDescription} onChange={(e) => setEditingTaskDescription(e.target.value)} />
                                <button className="edit" onClick={updateTask}>Update</button>*/