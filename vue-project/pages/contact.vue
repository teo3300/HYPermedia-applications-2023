<template>
    <main>
        <CustomHeader></CustomHeader>
        <h1>GET IN TOUCH</h1>
        <form @submit="submitForm">
            <div class="errors" v-show="errors.length >0">
                <li v-for="(error ,index) in errors" :key="index">{{ error }}</li>
            </div>
            <div>
                <label for="name" id="name">Name(*)</label>
                <input type="text" id="iname" v-model="name" required>

                <label for="email" id="email">Email Adress(*)</label>
                <input type="email" id="iemail" v-model="email" required>

                <label for="company" id="company">Company</label>
                <input type="text" id="iname" v-model="company" required>

                <label for="name" id="message">The Message</label>
                <textarea id="message1"></textarea>

                <button type="submit">Submit</button>
            </div>
        
        </form>
        <CustomFooter></CustomFooter>
    </main>
</template>

<script>
export default {
    data() {
        return{
            form: {
                name: '',
                email:'',
                company:'',
                message1:'',
            },
            errors:[]
        };
    },
    methods:{
        submitForm(event){
            event.preventDefault();

            this.errors =[]
            if(!this.name ){
                this.errors.push("name is empty")
            }
            if(!this.email){
                this.errors.push("name is empty")
            }


            if(this.$refs.form.checkValidity()){
                console.log('Form submitted');
            }else{
                console.log('Form validation failed');
            }
        },
    },
};
</script>

<style scoped>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>