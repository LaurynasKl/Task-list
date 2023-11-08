import { Todo } from "./Todo.js"

const kanban = new Todo('#kanban',['Backlog','Todo', 'In progress', 'Done']);

kanban.addTask({
    columnIndex: 1,
    title: 'Pirma uzduotis',
    desc: 'Pirmos uzduoties aprasas kuris labai labai labai labai labai... issamiai nusako ka  daryti  daryti daryti daryti',
    createdOn: '2023-11-08 11:25:00',
    deadLine: '2023:12:20 00:00:00',
    tags: ['Design']
});
kanban.addTask({
    columnIndex: 0,
    title: 'Antra uzduotis',
    desc: 'Antros uzduoties aprasas kuris labai labai issamiai nusako ka daryti daryti daryti daryti',
    createdOn: '2023-11-08 11:25:00',
    deadLine: '2023:11:20 00:00:00',
    tags: ['UX']
});
kanban.addTask({
    columnIndex: 0,
    title: 'Trecia uzduotis',
    desc: 'Trecios uzduoties aprasas kuris labai issamiai nusako ka daryti',
    createdOn: '2023-11-08 11:25:00',
    deadLine: '2023:11:29 08:50:00',
    tags: ['Development']
});

console.log(kanban);