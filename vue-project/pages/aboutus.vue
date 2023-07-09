<!--    About us page    -->
<template>
    <main>
        <CustomHeader />
        <div class="content-about-us">

            <div class="title">
                <h1>About us</h1>
            </div>

            <div class="our-group">
                <div class="subtitle">
                    <h2>Our group</h2>
                    <div class="bar"></div>
                </div>
                <div class="content">
                    <p>
                        We are a dynamic collective driven by a shared passion for innovation and growth.
                        With diverse expertise spanning finance, technology, and strategy, we bring a
                        multifaceted approach to every endeavor. Guided by a commitment to excellence,
                        we collaborate seamlessly, leveraging our collective strengths to identify and
                        seize promising investment opportunities. Our group thrives on adaptability and
                        forward-thinking, constantly seeking new horizons to shape the future of capital ventures. <br>
                        Together, we form a formidable force, poised to make a lasting impact in the world of investment.
                    </p>
                    <img src="../images/group-work.jpeg" alt="photo of our group work" id="img-group-work" />
                </div>
            </div>

            <div class="history">

                <div class="subtitle">
                    <h2>Our history</h2>
                    <div class="bar"></div>
                </div>

                <div class="content">
                    <p>
                        In February 2021, four ambitious individuals came together and brought
                        our company to life. It was a humble beginning, but their shared vision
                        and determination fueled their drive to create something new and learn
                        together. With a shared goal in mind, they embarked on a journey to
                        build a company that would make a difference.
                        The group quickly started to expand, welcoming new minds and fresh
                        perspectives into their midst.
                    </p>
                </div>

                <div class="founder-component">
                    <div class="first-part">
                        <img src="../images/members/benjaminPatel.jpg" alt="picture of Benjamin Patel"
                            class="profile-picture" />
                        <div class="middle">
                            <div class="left">
                                <h3>Benjamin PATEL</h3>
                                <p>Founder & Investment analyst</p>
                            </div>
                            <div class="right">
                                <h3>Emily JOHNSON</h3>
                                <p>Founder & Portfolio Manager</p>
                            </div>
                        </div>
                        <img src="../images/members/emilyJohnson.jpg" alt="picture of Emily Johnson"
                            class="profile-picture" />
                    </div>
                    <div class="second-part">
                        <img src="../images/members/oliviaMELBENT.jpg" alt="picture of Olivia Melbent"
                            class="profile-picture" />
                        <div class="middle">
                            <div class="left">
                                <h3>Olivia MELBENT</h3>
                                <p>Founder & Investment analyst</p>
                            </div>
                            <div class="right">
                                <h3>Alexander WONG</h3>
                                <p>Founder & Investment strategist</p>
                            </div>
                        </div>
                        <img src="../images/members/AlexanderWONG.png" alt="picture of Alexander Wong"
                            class="profile-picture" />
                    </div>
                </div>

                <div class="content">
                    <p>
                        This growth brought about exciting opportunities for collaboration and further innovation. 
                        With each new addition to the team, the company's potential multiplied. The diversity of talent
                        infused our organization with energy and fresh ideas, fostering an environment that thrived on
                        creativity and out-of-the-box thinking.<br>
                        Fuelled by this collective spirit and driven by their shared passion, 
                        our company continues to push boundaries. Our commitment to innovation is the beating heart
                        of our operations. We embrace emerging technologies, sought out new approaches, 
                        and foster a culture of continuous learning and improvement.
                    </p>
                    <div class="quote">
                        <p>
                            "Investing in the future, we fuel the dreams of tomorrow's visionaries. 
                            Together, we build a bridge between innovation and opportunity, 
                            shaping the world one investment at a time."
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div class="subtitle">
                    <h2>Where are we ?</h2>
                    <div class="bar"></div>
                </div>
                <div class="content where-are-we">
                    <img src="../images/mapWhereweare.png" alt="Map with pins on Milan, Paris and Madrid" id="image-map"/>
                    <p>From our humble beginnings, we have now established a strong presence 
                        in Milan. <br>
                        We are envisioning our expansion into Paris and Madrid. 
                        Embracing new cultures and markets is a great opportunity that we 
                        want take. <br>
                        Join us on this exciting journey as we shape the landscape of 
                        capital ventures, connecting diverse economies and building bridges 
                        of opportunity. </p>
                </div>
            </div>


        </div>
        <CustomFooter />

    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alice&family=Cambay:wght@400;700&family=Crushed&family=Lato:wght@300;400&display=swap');

main {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Cambay', sans-serif;
}

.title {
    font-family: 'Cambay', sans-serif;    
    text-align: center;
}

h2 {
    text-align: left;
    margin: 0px 10px;
}

.subtitle {
    display: flex;
    white-space: nowrap;
    height: 40px;
}

.bar {
    width: 100%;
    height: 0px;
    border: solid 1px #5BC0BE;
    margin: auto;
}

.content {
    width: 80%;
    margin: 20px 10%;
    text-align: justify;
}

#img-group-work {
    width: 80%;
    height: 300px;
    margin: 0px 10%;
    object-fit: cover;
}

.founder-component {
    margin: 10px 15%;
    width: 70%;
    object-fit: contain;
}

.first-part,
.second-part {
    display: flex;
    margin: 20px 0px;
}

.profile-picture {
        width: 25%; aspect-ratio: 1/1;
        object-fit: cover;
    }




.middle {
    width: 100%;

}

.left,
.right {
    background: rgba(91, 192, 190, 0.2);
    padding : 5px ;  
}

.left {
    text-align: left;
    margin : 0px 40% 10px 0px ; 

}

.right {
    text-align: right;
    margin : 10px 0px 0px 40% ; 

}

.quote {
    font-family: 'Alice', serif;
    color : white ; 
    background-color : #3A506B ; 
    border-radius: 10px ;
    padding : 20px 40px ;
    font-size: large;
}

.where-are-we {
    display : flex ; 
    gap : 10% ; 
}
#image-map {
    width : 35% ; 
    aspect-ratio: 1/1;
    object-fit: contain;
}

@media only screen and (max-width: 768px) {
    .profile-picture {
        width: 40%; 
        object-fit: contain;
    }
    .first-part,
    .second-part {
        display :block ; 
    }
    .where-are-we {
        display : block ; 
    }
    #image-map {
        width : 50% ; 
        margin : 0px 25% ; 
    }
}
</style>