<template>
<li v-bind:class="{'editing': editing}">
    <div class="view" v-show="!editing">
        <input class="toggle" type="checkbox" v-model="isComplete" @change="changeComplete"/>
        <label class="label" @dblclick="editItem">{{data.title}}</label>
        <button class="destroy" @click="deleteTodoItem"></button>
    </div>
    <input class="edit" v-show="editing" v-model="title" @keyup.enter="updateTitle" @keyup.escape="cancelEdit"/>
    
</li>
</template>
<script>
export default {
    name: '', 
    data() {
        return {
            editing: false,
            isComplete: this.data.isComplete,
            title: ""
        };
    },
    props: {
        data: {
            type: Object,
            default: null,
        },
    },
    methods: {
        editItem() {
            this.editing = true;
            this.title = this.data.title;
        },
        updateTitle() {
            this.$emit('updateTodoItem', {
                target: this.data,
                title: this.title
            });
            this.editing = false;
        },
        cancelEdit() {
            this.editing = false;
        },
        deleteTodoItem() {
            this.$emit("deleteTodoItem", this.data);
        },
        changeComplete() {
            this.$emit('updateTodoItemComplete', {
                target: this.data,
                isComplete: this.isComplete
            })
        },
        getComplete() {
            return this.isComplete;
        }
    },
}
</script>