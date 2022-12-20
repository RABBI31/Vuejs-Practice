<template>
<div class="h-full grid place-items-center" >
  <section v-show=" inCompletedAssaignment.length ">
    <h2 class="font-bold mb-2">In progress</h2>
    <ul>
      <li v-for= "assignment in inCompletedAssaignment" :key="assignment.id">
        <label>
          {{ assignment.name }}

          <input type="checkbox" v-model="assignment.completed" >
        </label>
        </li>
    </ul>
    
  </section>

  <section v-show="completedAssaignment.length" class="mt-8">
    <h2 class="font-bold mb-2">Complete Task</h2>
    <ul>
      <li 
      v-for= "assignment in completedAssaignment"
      :key="assignment.id"
      >
        <label>
          {{ assignment.name }}

          <input type="checkbox" v-model="assignment.completed" >
        </label>
        </li>
    </ul>
    
  </section>
  <h3>Nothing will show</h3>

</div>
 
</template>


<script>

export default {
  name: 'App', 
  data(){
    return{
      assignments :[
        {
          id: 1, name:"Finish Project" , completed: false
        },
        {
          id: 2, name:"Read chapter 4" , completed: false
        },
        {
          id: 3, name:"make a simple project" , completed: false
        }
      ]
      
    }
  },
  computed:{
    completedAssaignment(){
      return this.assignments.filter(assignment => assignment.completed)
    },
     inCompletedAssaignment(){
      return this.assignments.filter(assignment => ! assignment.completed)
    }

  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.notSoldOut{
  color: green;
}
.soldOut{
  color: red;
}
.blackTicket{
  color: aquamarine;
}
</style>
