<template>
<li v-bind:class="{'editing': editing}">
    <div class="view" v-show="!editing">
        <input class="toggle" type="checkbox" v-model="isComplete"/>
        <label class="label" @dblclick="editItem">{{data.title}}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" v-show="editing" v-model="editTitle" @keyup="changedTitle"/>
    
</li>
</template>
<script>
export default {
    name: '', 
    data() {
        return {
            editing: false
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
        },
        changedTitle(event) {
            console.log(event.key);
            if(event.key === "Escape") {
                this.editing = false;
            } else if(event.key === "Enter") {
                
                this.$store.commit('updateTodoItem', {
                    target: this.data,
                    title: this.editTitle
                })
            }
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