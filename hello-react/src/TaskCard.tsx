import './index.css';

// Define the type for the component's props
interface TaskCardProps {
    title: string;
    due?: string;         // Optional prop
    assignee: string;
    completed?: string;    // Optional prop
  }
  
  const TaskCard: React.FC<TaskCardProps> = ({ title, due, assignee, completed }) => {
    return (
      <div className='TaskItem'>
        <h2 className='text-xl font-bo'>{title}</h2>
        <p>Due on: {due}</p>
        <p>Completed on: {completed}</p>
        <p>Assignee: {assignee}</p>
      </div>
    );
  };
  

export default TaskCard;