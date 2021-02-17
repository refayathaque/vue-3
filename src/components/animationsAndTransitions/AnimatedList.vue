<template>
  <h4>AnimatedList.vue</h4>
  <div class="container-udemy">
    <transition-group tag="ul" name="user-list">
      <!-- tag must be a valid wrapping html element -->
      <li v-for="car in cars" :key="car" @click="removeCar(car)">{{ car }}</li>
    </transition-group>
    <input type="text" v-model="newCar" />
    <button @click="addCar">Add Car</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [
        "Honda Accord",
        "Subaru Legacy",
        "Toyota Camry",
        "Nissan Altima",
        "Mazda 6",
        "Hyundai Sonata",
      ],
      newCar: "",
    };
  },
  methods: {
    removeCar(carToRemove) {
      this.cars = this.cars.filter((car) => car !== carToRemove);
    },
    addCar() {
      this.cars.unshift(this.newCar);
    },
  },
};
</script>

<style scoped>
.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute
}

.user-list-move {
  /* special css class to control all other elements in the transition-group that are not being targeted (entering/leaving) */
  /* this class will use `transform` under the hood to move these other elements to their new positions */
  transition: transform 0.8s ease;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 0.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
  border: 1px solid greenyellow;
}

input {
  margin-bottom: 0.5rem;
}
</style>
