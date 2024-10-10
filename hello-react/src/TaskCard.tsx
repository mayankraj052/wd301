import PropTypes from 'prop-types';
import './TaskCard.css';

const TaskCard = ({ title, due, assignee, completed }) => {
    return (
      <div className='TaskItem'>
        <h2 className='text-xl font-bo'>{title}</h2>
        <p>Due on: {due}</p>
        <p>Completed on: {completed}</p>
        <p>Assignee: {assignee}</p>
      </div>
    );
  };

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  due: PropTypes.string,
  assignee: PropTypes.string.isRequired,
  completed: PropTypes.string,
};

export default TaskCard;