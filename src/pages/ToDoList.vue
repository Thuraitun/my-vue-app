<template>
    <div class="flex flex-wrap justify-center">
        <div class="flex flex-col p-6 my-20 shadow-md bg-slate-200">
            <div class="my-5 text-2xl font-bold text-center">To Do List</div>
            <div class="flex content-center justify-center my-5">
                <input v-model="task" type="text" class="p-2 rounded-lg shawdow-sm" placeholder="Enter items">
                <button @click="submitTask" class="p-2 bg-blue-600 rounded-lg text-slate-100">Add</button>
            </div>
            <div v-for="(task,index) in tasks" :key="index" class="flex justify-center my-4">
                <div class="flex items-center mb-3 space-x-6">
                    <h2 :class="{'finished': task.status === 'finished'}">{{task.name}}</h2>
                    <button class="px-3 text-white bg-red-500 rounded-lg" @click="changeStatus(index)">{{task.status}}</button>
                    <h2 class="cursor-pointer " @click="editTask(index)"><span class="text-blue-600 fa fa-pen"></span></h2>
                    <h2 class="cursor-pointer" @click="deleteTask(index)"><span class="text-red-500 fa fa-trash"></span></h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       name: 'ToDoList',
        data(){
            return {
                task: '',
                editedTask: null,
                availableStatuses: ['to-do', 'in-progress', 'finished'],
                tasks: [
                    {
                        name: 'This is testing todolist',
                        status: 'to-do'
                    },
                    {
                        name: 'This is testing1 todolist',
                        status: 'in-progress'
                    },
                ]
            }
        },
        methods: {
            submitTask() {
                if(this.task.length === 0) return;
                
                if(this.editedTask === null){
                    
                    this.tasks.push({
                        name: this.task,
                        status: 'todo'
                    });
                } else {
                    this.tasks[this.editedTask].name = this.task;
                    this.editedTask = null;
                }
                
                this.task = '';
            },
            
            deleteTask(index){
                this.tasks.splice(index, 1);
            },

            editTask(index) {
                this.task = this.tasks[index].name;
                this.editedTask = index;
            },

            changeStatus(index) {
                let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
                if(++newIndex > 2) newIndex = 0;
                this.tasks[index].status = this.availableStatuses[newIndex]; 
            },
            
        }
    }
</script>

<style scoped>
    .finished {
        text-decoration: line-through;
    }
</style>