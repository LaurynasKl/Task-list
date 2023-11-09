export class Todo{
    constructor(selector ,columns){
        this.selector = selector
        this.columns = columns;
        this.DOM = null;
        this.columnsDOM = [];
        this.tasks = [];
        this.lastUsedTaskId = 0;


        this.init();
    }
    init(){
        this.updateDOMelement();
        this.render();
    }
    updateDOMelement(){
        if(typeof this.selector !== 'string' || this.selector === ''){
            throw new Error('Netinkamas selektorius')
        }

        this.DOM = document.querySelector(this.selector)
    }

    render() {
        let HTML = '';
        
        for(const column of this.columns){
            HTML += `
            <div class="column">
                <h2 class="title">${column}</h2>
                <ul class="task-list"></ul>
            </div>`
        }


        this.DOM.classList.add('todo');
        this.DOM.innerHTML = HTML;
        this.DOM.style.gridTemplateColumns = `repeat(${this.columns.length}, 1fr)`;

        this.columnsDOM = this.DOM.querySelectorAll('.task-list');
    }

    addTask(task) {
        this.tasks.push({
            ...task,
            isDeleted: false,
        });
        const taskID = ++this.lastUsedTaskId;
        let tagsHTML = '';

        for(const tag of task.tags){
            tagsHTML += `<div class="tag" style="color:${tag.color};">${tag.text}</div>`
        }

        // <button class="fa fa-pencil"></button>
        const HTML = `
            <li id="task_${taskID}" class="task-card">
                <div class="task-action">
                <button class="fa fa-trash"></button>
                </div>
                <div class="task-title">${task.title}</div>
                <div class="task-desc">${task.desc}</div>
                <div class="task-tags">${tagsHTML}</div>
                <div class="task-deadline">${task.deadLine}</div>
            </li>`;

        this.columnsDOM[task.columnIndex].insertAdjacentHTML('beforeend', HTML);

        const taskDOM = document.getElementById(`task_${taskID}`);
        const deleteButtomDOM = taskDOM.querySelector('.fa-trash');

        deleteButtomDOM.addEventListener('click', () => {
            this.tasks[taskID - 1].isDeleted = true;
            taskDOM.remove()
        })
    }
}
