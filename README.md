<h1>📝 Dynamic To-Do List with Adjustable Container Height</h1>

<h3>📌 Overview:
This is a simple To-Do List web app where:</h3>

✅ You can add tasks dynamically by typing into an input box and clicking the "Add" button.

✅ Each task gets appended as a new list item with a delete (❌) button next to it.

✅ Clicking the delete button removes that task from the list.

✅ The height of the task container (.list div) increases when adding a task and shrinks when deleting a task.


<h3>🧱 Project Structure:</h3>

HTML Elements:

Input box: For entering task text (class .textbox).

Add Button: For submitting new tasks.

Unordered List : Where all tasks appear.

Div with class .list: The container whose height dynamically changes.

<h3>📜 JavaScript Functionality:</h3>

✅ Add Task: Grabs input value.
Creates a new li element with the task and a delete button (X).
Appends the task to the list.
Increases container height by 20px on every addition.

✅ Delete Task:
Listens for click events on the ul.
If the clicked target is a button, deletes the corresponding li.
Decreases container height by 20px on every deletion.
Also logs in the console which item was deleted.

✅ Example Flow:
Type a task → Click Add → Task appears → Container grows taller.
Click ❌ on any task → Task disappears → Container shrinks.

✅ Optional Improvements (Future Ideas):
Add localStorage support to save tasks.
Add animations on adding/removing.
Add input validation to avoid empty tasks.
Add task completion strikethrough feature.
