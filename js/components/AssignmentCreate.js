export default {
    template: `
        <form @submit.prevent="add" class="mt-4 ">
            <div class="border border-gray-600 text-black flex  ">
                <input  v-model="newAssignment" placeholder="New assignment..." class="p-2 w-72 rounded-lg" /> 
                <button type="submit" class="bg-white p-2 border-l ml-2 rounded-lg hover:bg-yellow-300 ">Add</button>
            </div>
        </form> 
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }
}
