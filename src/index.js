import store from './store';
import { addTask, removeTask, taskCompleted } from './taks_module/action';


store.dispatch(addTask("Heelo"));
console.log(store.getState())

store.dispatch(taskCompleted(1));
console.log(store.getState())
