<template>
<li v-bind:class="{'editing': editing}">
    <div class="view" v-show="!editing">
        <input class="toggle" type="checkbox" v-model="isComplete"/>
        <label class="label" @dblclick="editItem">{{data.title}}</label>
        <button class="destroy" @click="deleteTodoItem"></button>
    </div>
    <input class="edit" v-show="editing" v-model="title" @keyup="changeTitle"/>
    
</li>
</template>
<script>
export default {
    name: '', 
    data() {
        return {
            editing: false,
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
        changeTitle(event) {
            console.log(event.key);
            if(event.key === "Escape") {
                this.editing = false;
            } else if(event.key === "Enter") {
                
                this.$store.commit('updateTodoItem', {
                    target: this.data,
                    title: this.editTitle
                })
            }
        },
        deleteTodoItem() {
            this.$emit("deleteTodoItem", this.data);
        }
    },
    computed: {
        isComplete() {
            return this.data.isComplete;
        },
        editTitle() {
            return this.data.editTitle;
        }
    }
}
</script>