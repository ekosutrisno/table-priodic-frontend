<template>
  <div class="mx-auto w-full">
    <div>
      <div class="w-full h-64 border-b-2 p-8">
        <div class="mb-3">
          <h1 class="text-3xl mb-3 font-semibold">
            Table Priodik Unsur
          </h1>
          <p>
            Tabel periodik adalah tampilan unsur-unsur kimia dalam bentuk tabel.
            Unsur-unsur tersebut disusun berdasarkan nomor atom (jumlah proton
            dalam inti atom), konfigurasi elektron, dan keberulangan sifat
            kimia. Tabel juga terbagi menjadi empat blok:
            <code
              class="code bg-gray-200 rounded-sm px-2"
            >blok -s, -p, -d, dan -f</code>. Secara umum, dalam satu periode (baris), di sebelah kiri bersifat
            logam, dan di sebelah kanan bersifat non-logam.
          </p>
        </div>
        <h1>Filter By:</h1>
        <FilterButton />
      </div>

      <!-- ModalElemeent -->
      <ModalElemeent :element="element" />
      <!-- End ModalElemeent -->

      <div class="flex flex-wrap items-center justify-center py-5">
        <div
          v-for="el in elements"
          :key="el.symbol"
          class="card-width p-4 transform hover:scale-110 transition-transform duration-150 ease-in-out hover:z-auto cursor-pointer m-2"
          :class="{
            'bg-green-300': el.groupBlock == 'metal',
            'bg-purple-300': el.groupBlock == 'nonmetal',
            'bg-orange-300': el.groupBlock == 'alkali metal',
            'bg-pink-300': el.groupBlock == 'noble gas',
            'bg-blue-300': el.groupBlock == 'alkaline earth metal',
            'bg-gray-300': el.groupBlock == 'metalloid',
            'bg-red-300': el.groupBlock == 'halogen',
            'bg-yellow-300': el.groupBlock == 'transition metal',
            'bg-teal-300': el.groupBlock == 'lanthanoid',
            'bg-indigo-300': el.groupBlock == 'actinoid',
            'bg-greentea-300': el.groupBlock == 'post-transition metal',
          }"
          @click="getDetailElement(el.name)"
        >
          <span class="text-2xl font-semibold block">{{
            el.atomicNumber
          }}</span>
          <span class="text-6xl font-semibold block">{{ el.symbol }}</span>
          <span class="text-2xl font-semibold block">{{ el.name }}</span>
          <span class="text-2xl font-semibold block">{{
            el.atomicMass
          }}</span>
          <span class="text-sm font-semibold block uppercase">{{
            el.standardState
          }}</span>
          <span class="text-sm font-semibold uppercase">{{
            el.groupBlock
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FilterButton from '~/components/FilterButton.vue'
import ModalElemeent from '~/components/modal/ModalElemeent.vue'

export default {
  components: { FilterButton, ModalElemeent },
  async fetch ({ store }) {
    await store.dispatch('loadAllElements')
  },
  computed: {
    ...mapState({
      elements: state => state.elements,
      element: state => state.element
    })
  },
  methods: {
    async  getDetailElement (nameElement) {
      await this.$store.dispatch('loadSingleElement', nameElement)
      this.$modal.show('modal-detail')
    }
  }
}
</script>
<style lang="css" scope>
.card-width {
  width: 15rem;
  height: 18rem;
}
</style>
