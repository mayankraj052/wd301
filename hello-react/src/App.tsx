import React from 'react';
import TaskCard from "./TaskCard";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="header ml-28 mt-5">
        <h1 className="text-xl ">
          <b>Smarter Tasks</b>
        </h1>
        <p className="mt-2 mb-5">
          <strong>Project:</strong> Graduation Final Year Project (Revamp College Website)
        </p>
      </header>

      <div className="task-board flex gap-24 w-auto space-x-10 ml-28 mr-16">
        <div className="task-column pending flex-row border-2 border-grey rounded-lg ml-10 px-2 my-2">
          <h2 className="px-1 text-center mb-1">Pending</h2>
          <div className="border-2 border-grey rounded pt-2 pl-2 pr-2 pb-2 mt-2 mb-2">
            <TaskCard
              title="Build the website with static content"
              due="10th April"
              assignee="Rohit S"
            />
          </div>
          <div className="border-2 border-grey rounded pt-2 pl-2 pr-2 pb-2 mt-2 mb-2">
            <TaskCard
              title="Add a blog"
              due="22nd March"
              assignee="Rohit M"
            />
          </div>
          <div className="new-task border-2 border-grey rounded pt-2 pl-2 pr-2 pb-2 mt-2 mb-2 bg-slate-200">
            + New task
          </div>
        </div>

        <div className="task-column done flex-row border-4 border-grey rounded mr-10 ml-20 pl-2 pr-2 mt-2 mb-2">
          <h2 className="px-1 text-center mb-1">Done</h2>
          <div className="border-2 border-grey rounded pt-2 pl-2 pr-2 pb-2 mt-2 mb-2">
            <TaskCard
              title="Design the mockup"
              due="10th April"
              assignee="Rohit M"
              completed="Completed on 5th April"
            />
          </div>
          <div className="border-2 border-grey rounded pt-2 pl-2 pr-2 pb-2 mt-2 mb-2">
            <TaskCard
              title="Get the approval from principal"
              due="20th April"
              assignee="Ajay S"
              completed="Completed on 15th April"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
