import {connect} from 'react-redux';
import {toggleTodo} from '../action';
import TodoList from '../component/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(tt => !tt.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(tt => tt.completed);
        default:
            throw new Error(`unknow filter: ${filter}`);
    }
};

const mapStateToProps = state => {
    todos: getVisibleTodos(state.todos, state.visibilityFilter);
};

const mapDispatchToProps = {
    onTodoClick: toggleTodo,
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
