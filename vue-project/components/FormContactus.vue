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
<!--<div class="errors" v-show="errors.length >0">
                <li v-for="(error ,index) in errors" :key="index">{{ error }}</li>
            </div>-->
            <div>
                <div>
                <label for="name" id="name">Name(*)</label>
                <input type="text" id="iname" v-model="name" required >
            </div>
            <div>
                <label for="email" id="email">Email Adress(*)</label>
                <input type="email" id="iemail" v-model="email" required >
            </div>
            <div>
                <label for="company" id="company">Company</label>
                <input type="text" id="iname" v-model="company">
            </div>
            <div>
                <label for="name" id="message">The Message</label>
                <textarea id="message1"></textarea>
            </div>
                <button type="submit">Send</button>
            </div>
        </form>
    </main>
</template>

<style scoped>
 .contactus{
        background-color: #5BC0BE ;
      
        text-align: left;
        display: flex;
        margin-left: auto;
        margin-right: 200px;
        margin-bottom: 100px;
        padding: 40px;
        width: 400px;
        height: fit-content;
        font-family:'Cambay', sans-serif;
        
        
        
        
    }
 

input{
    max-width: fit-content;
    display: block;
    width: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
}

textarea{
    display: block;
}
button{
    font-family: 'Crushed', sans-serif;
    display:block;
    text-align: center;
    background-color:#1c2541 ;
    font-size: x-large;
    color: white;
    margin: 20px;
    width:350px;
}
textarea{
    max-width: auto;
    width:400px;
    height:100px;
}



@media only screen and (max-width: 768px){
    .contactus{
        background-color:  #5BC0BE  ;
        margin-left: auto;
        margin-bottom: 100px;
        text-align: left;
        display: flex;
        margin-right: auto;
        padding: 40px;
        width: 400px;
        height: fit-content;
        font-family:'Cambay', sans-serif;
        
        
        
        
    }
 
}

</style>