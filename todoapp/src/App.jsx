import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Trash2 } from 'lucide-react';
import axios from 'axios';
import { useEffect } from 'react';
import TimeAgo from 'react-timeago';

const App = () => {

  const [taskInput, setTaskInput] = useState('');

  const [taskList, setTaskList] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5500/todo/getall');
      if (response.status === 200) {
        const data = response.data;
        console.table(data.reverse());
        setTaskList(data);
      } else {
        console.log(response.data);
        toast.error('Some Error Occured');
      }
    } catch (error) {
      console.log(error);
      toast.error('Some Error Occured');
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);


  const addToDatabase = async (task) => {
    try {
      const response = await axios.post('http://localhost:5500/todo/add', task)
      if (response.status === 201) {
        toast.success('Todo Added successfully');
        fetchTodos();
      } else {
        console.log(response.data);
        toast.error('Some Error Occured');
      }
    } catch (error) {
      console.log(error);
      toast.error('some error occured');
    }
  }

  const onTaskSubmit = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) {
      toast.error('Write task details to add');
      return;
    }
    const newTask = { title: taskInput };

    addToDatabase(newTask);

    // setTaskList([newTask, ...taskList]);
    setTaskInput('');
    // toast.success('New Task Added 🔥')
  }

  const deleteTask = (index) => {
    const temp = taskList;
    temp.splice(index, 1);
    setTaskList([...temp]);
    toast.success('Task Deleted 👍');
  }

  return (
    <div className='min-h-screen bg-gray-100 py-10'>
      <Toaster position='top-center' />
      <h1 className='text-center font-bold text-4xl'>TODO Webapp</h1>
      <div className='container mx-auto bg-white shadow-xl rounded-xl'>
        <form onSubmit={onTaskSubmit}>
          <div className='flex gap-5 p-5'>
            <input
              onChange={(e) => { setTaskInput(e.target.value) }}
              value={taskInput}
              className='block px-3 py-1 rounded border flex-grow'
              type="text" />

            <button
              className='bg-violet-500 hover:bg-violet text-white px-3 py-2 rounded-lg'
            >Submit</button>
          </div>
        </form>
        <div className='border-t p-5 h-[70vh] overflow-auto'>
          {/* tasks will be shown here */}
          {
            taskList.length == 0 ? (
              <p className='text-center font-bold text-3xl text-gray-400'>Nothing to Show Here 🥲</p>
            ) :
              taskList.map((task, index) => {
                return <div key={task._id} className='border border-gray-300 rounded mb-4 p-5'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <TimeAgo date={task.createdAt} />
                      <p>{new Date(task.createdAt).toLocaleDateString()} {new Date(task.createdAt).toLocaleTimeString()}</p>
                      <div className='flex gap-4'>
                        <input
                          onChange={(e) => {
                            const temp = taskList;
                            temp[index].completed = e.target.checked;
                            setTaskList([...temp]);
                          }}
                          value={taskList[index].completed}
                          className='scale-125'
                          type="checkbox" />
                        <p className={`font-bold ${task.completed ? 'line-through text-green-600' : ''}`}>
                          {task.title}
                        </p>
                      </div>

                    </div>

                    <button onClick={() => { deleteTask(index) }} className='bg-red-500 text-white p-2 rounded'>
                      <Trash2 />
                    </button>
                  </div>
                </div>
              })
          }
        </div>
      </div>

    </div>
  )
}

export default App;