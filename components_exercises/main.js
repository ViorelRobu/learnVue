Vue.component('message', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true,
        };
    },
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title }}
            <button type="button" @click="this.isVisible = false">x</button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `
});

Vue.component('modal', {
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p>
                        <slot></slot>
                    </p>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    `
});


new Vue({
    el: '#root',

    data: {
        showModal: false
    }
});