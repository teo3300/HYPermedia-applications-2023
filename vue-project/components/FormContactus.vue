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
        submitForm(){
            event.preventDefault();

            this.errors =[]
            if(!this.form.name ){
                this.errors.push("name is empty")
            }
            if(!this.form.email){
                this.errors.push("Email adress is empty")
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

<template>
    <main>
            <form @submit.prevent="submitForm" class="contactus">
            <div class="errors" v-show="errors.length >0">
                <li v-for="(error ,index) in errors" :key="index">{{ error }}</li>
            </div>
            <div>
                <div>
                <label for="name" id="name">Name(*)</label>
                <input type="text" id="iname" v-model="name" >
            </div>
            <div>
                <label for="email" id="email">Email Adress(*)</label>
                <input type="email" id="iemail" v-model="email" >
            </div>
            <div>
                <label for="company" id="company">Company</label>
                <input type="text" id="iname" v-model="company">
            </div>
            <div>
                <label for="name" id="message">The Message</label>
                <textarea id="message1"></textarea>
            </div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </main>
</template>

<style scoped>
 form{
        background-color: darkturquoise ;
        justify-content: flex-end;
        text-align: left;
        display: flex;
        width: 500px;
        height: 400px;
        font-family:'Cambay', sans-serif;
        margin-left: auto;
        margin-top: auto;
        
        
    }
.contactus{
    padding: 40px;
    display: inline-block;
    
    
}
input{
    max-width: fit-content;
    display: block;
    padding-left:250px;
    margin-top: 20px;
    margin-bottom: 20px;
}

textarea{
    display: block;
}
button{
    font-family: 'Crushed', sans-serif;
    display:block;
    background-color:#1c2541 ;
    color: white;
    margin: 20px;
}
textarea{
    max-width: auto;
    width:400px;
    height:50px;
}
</style>