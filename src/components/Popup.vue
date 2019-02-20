<template>
    <v-dialog max-width="600PX">
        <v-btn flat slot="activator" class="success">Add New Project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a new projecr</h2>
            </v-card-title>

            <v-card-text>
                <v-form>
                    <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>
                    <v-btn class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
                </v-form>
            </v-card-text>

        </v-card>
    </v-dialog>
</template>
<script>
export default {
    data(){
        return {
            title: '',
            content: ''
        }
    },
    methods:{
        submit(){
            console.log(this.title, this.content)
        }
    }
}
</script>
