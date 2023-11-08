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
        this.tasks.push(task);

        const HTML = `
            <li id="task_${++this.lastUsedTaskId}" class="task-card">
                <div>${task.title}</div>
                <div>${task.desc}</div>
                <div>${task.tags}</div>
                <div>${task.deadLine}</div>
            </li>`;

        this.columnsDOM[task.columnIndex].innerHTML += HTML;

    }
}
