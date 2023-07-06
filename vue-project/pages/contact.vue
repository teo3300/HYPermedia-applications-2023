<template>
    <main>
        <CustomHeader></CustomHeader>
        
        <h1>GET IN TOUCH</h1>
        <div class="form">
        <FormContactus></FormContactus>
    </div>
        <CustomFooter></CustomFooter>
    </main>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');
    
    h1{
        font-family: 'Crushed', sans-serif;
        text-align: left;
        padding-top:100px;
        padding-left:200px;
        font-size: 70px;

        display: inline-block;
        max-width: 50%;
        position: absolute;
       
       
    }
    .form{
        display: block;
        text-align:right;
       
    }
   
    @media only screen and (max-width: 768px) {
    
            h1{
                display:none;
            }
    
    }
   

</style>