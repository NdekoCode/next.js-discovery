import SingleTodo from "../components/SingleTodo";

const MyTodoPage = () => {
  return (
    <div className="container flex flex-wrap gap-3 mt-5">
      <SingleTodo />
      <SingleTodo />
    </div>
  );
};

export default MyTodoPage;
