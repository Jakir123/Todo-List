var args = arguments[0] || {};
id = args.id || '';
var todos = Alloy.Collections.todo;
alert(id);

if (id) {
	var todo = todos.get(id);
	Ti.API.info('todo' + JSON.stringify(todo));
	$.itemField.value = todo.get('item');
}
function addItem() {
	if (id) {
		todo.set({
			"item" : $.itemField.value,
		}).save();
	} else {

		// Create a new model for the todo collection
		var task = Alloy.createModel('Todo', {
			item : $.itemField.value,
			done : 0
		});

		// add new model to the global collection
		todos.add(task);

		// save the model to persistent storage
		task.save();
}
		// reload the tasks
		todos.fetch();

		closeWindow();
	
}

function focusTextField() {
	$.itemField.focus();
}

function closeKeyboard(e) {
	e.source.blur();
}

function closeWindow() {
	$.addWin.close();
}