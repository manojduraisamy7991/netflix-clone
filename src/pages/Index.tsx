
import TaskList from "../components/TaskList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Task Manager</h1>
        <p className="text-xl text-gray-600">Manage your tasks with proper text overflow handling</p>
      </div>
      <TaskList />
    </div>
  );
};

export default Index;
