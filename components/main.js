Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{task.description}}</task>
        </div>
    `,
    data() {
        return {
            tasks: [
                { description: 'Go to store', completed: true },
                { description: 'Learn Vue', completed: false },
                { description: 'Become Vue master', completed: false },
                { description: 'Build awesome Vue app', completed: false },
                { description: 'Build awesome Laravel App', completed: true },
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});