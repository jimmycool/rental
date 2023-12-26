<script>
export default {
  data() {
    return {
      message:"Hello World",
      FirstName:"",
      LastName:"",
      Email:"",
      picked:""
    }
  },
  computed: {
            validateMessage() {
                    return (this.message !== "" ? "" : "FirstName cannot be blank!!!"); 

            },
            validatePicked() {
                    return (this.picked !== "" ? "" : "Picked cannot be blank!!!"); 
 
            }


        }
  }      

  

</script>

<template>
  <div class="about">
  <form>
  <p>Message is: {{ message }}</p>
  <label>First Name:</label>
  <input v-model="message" placeholder="edit me" />
  <span style='color:red'>{{validateMessage}}</span>
  <div>Picked: {{ picked }}</div>
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>
  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>
  <span style='color:red'>{{validatePicked}}</span>
  <span id='info' style='color:green'></span>
  </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
