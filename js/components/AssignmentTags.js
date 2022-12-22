export default{

    template:`
        <div>
        <button 
            @click="$emit('update:currentTag',tag)"
            v-for="tag in tags" 
            class="uppercase border px-3 text-xs hover:bg-white hover:text-black" 
            :class="{
                'border-blue-500 text-blue-500': tag === currentTag
            }"
        >
            {{tag}}
        </button>
        </div>
    `,
    props:{ 
        initialTags: Array,
        currentTag: String
    },
   
    computed: {
        
        tags() {

            return ['all', ...new Set(this.initialTags)]
        }
    }
}