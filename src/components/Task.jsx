import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editTask(task.id, newDescription));
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
            ) : (
                <span>{task.description}</span>
            )}
            <button onClick={() => setIsEditing(true)}>Edit</button>
            {isEditing && <button onClick={handleEdit}>Save</button>}
        </div>
    );
};

export default Task;
