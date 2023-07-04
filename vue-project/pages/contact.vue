<template>
    <main>
        <CustomHeader></CustomHeader>
        <h1>GET IN TOUCH</h1>
        <form>
            <div>
                <label for="name" id="name">Name(*)</label>
                <input type="text" id="iname" required>

                <label for="email" id="email">Email Adress(*)</label>
                <input type="email" id="iemail" required>

                <label for="compny" id="company">Company</label>

                <label for="name" id="message">The Message</label>
                <textarea id="message1"></textarea>
            </div>
        
        </form>
        <CustomFooter></CustomFooter>
    </main>
</template>

<style scoped>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>