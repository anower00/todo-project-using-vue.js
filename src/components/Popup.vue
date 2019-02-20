<template>
    <v-dialog max-width="600PX">
        <v-btn flat slot="activator" class="success">Add New Project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a new projecr</h2>
            </v-card-title>

            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
                    <v-menu>
                        <v-text-field :value="formateedDate" slot="activator" label="Due Date" prepend-icon="date_range" :rules="inputRules"></v-text-field>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-btn class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
                </v-form>
            </v-card-text>

        </v-card>
    </v-dialog>
</template>
<script>
import format from 'date-fns/format'
export default {
    data(){
        return {
            title: '',
            content: '',
            due:null,
            inputRules: [
                v => v.length >=3 || 'Minimun Length is three character'
            ]
        }
    },
    methods:{
        submit(){
            if(this.$refs.form.validate()){
                console.log(this.title, this.content)
            }
            
        }
    },
    computed: {
        formateedDate(){
            return this.due ? format(this.due,'Do MMM YYYY') :''
        }
    }
}
</script>
