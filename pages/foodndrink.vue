/* eslint-disable vue/no-side-effects-in-computed-properties */
<template>
  <div class="min-h-screen">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center justify-center p-10">
        <FoodCard
          v-for="food in foodList"
          :key="food.productId"
          :food="food"
        />

        <DrinkCard
          v-for="drink in drinkList"
          :key="drink.productId"
          :drink="drink"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FoodProducts from '../assets/data/FoodProduct.js'
import DrinkProducts from '../assets/data/DrinkProduct.js'
import FoodCard from '../components/card/FoodCard'
import DrinkCard from '../components/card/DrinkCard'
export default {
  components: {
    FoodCard,
    DrinkCard
  },
  data () {
    return {
      foodList: FoodProducts,
      drinkList: DrinkProducts
    }
  }
}
</script>
