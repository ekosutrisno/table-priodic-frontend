<template>
  <div class="mx-auto w-full">
    <div>
      <div class="w-full h-64 border-b-2 p-8">
        <div class="mb-3">
          <h1 class="text-3xl mb-3 font-semibold">Table Priodik Unsur</h1>
          <p>
            Tabel periodik adalah tampilan unsur-unsur kimia dalam bentuk tabel.
            Unsur-unsur tersebut disusun berdasarkan nomor atom (jumlah proton
            dalam inti atom), konfigurasi elektron, dan keberulangan sifat
            kimia. Tabel juga terbagi menjadi empat blok:
            <code class="code bg-gray-200 rounded-sm px-2"
              >blok -s, -p, -d, dan -f</code
            >. Secara umum, dalam satu periode (baris), di sebelah kiri bersifat
            logam, dan di sebelah kanan bersifat non-logam.
          </p>
        </div>
        <h1>Filter By:</h1>
        <modal name="modal-detail" :width="700" :height="490" :adaptive="true">
          <div class="h-full w-full flex items-start bg-gray-100">
            <div
              class="h-full w-72 p-4"
              :class="{
                'bg-green-300': element.groupBlock == 'metal',
                'bg-purple-300': element.groupBlock == 'nonmetal',
                'bg-orange-300': element.groupBlock == 'alkali metal',
                'bg-pink-300': element.groupBlock == 'noble gas',
                'bg-blue-300': element.groupBlock == 'alkaline earth metal',
                'bg-gray-300': element.groupBlock == 'metalloid',
                'bg-red-300': element.groupBlock == 'halogen',
                'bg-yellow-300': element.groupBlock == 'transition metal',
                'bg-teal-300': element.groupBlock == 'lanthanoid',
                'bg-indigo-300': element.groupBlock == 'actinoid',
                'bg-greentea-300':
                  element.groupBlock == 'post-transition metal',
              }"
            >
              <span class="text-3xl font-semibold block">{{
                element.atomicNumber
              }}</span>
              <span class="text-6xl font-semibold block">{{
                element.symbol
              }}</span>
              <span class="text-4xl font-semibold block">{{
                element.name
              }}</span>
              <span class="text-4xl font-semibold block">{{
                element.atomicMass
              }}</span>
              <span class="font-semibold block uppercase mt-4">{{
                element.standardState
              }}</span>
              <span class="font-semibold uppercase mt-4">{{
                element.groupBlock
              }}</span>
              <div class="mt-8">
                <span class="text-sm -mb-4 block">Year Discovered</span>
                <span class="text-6xl block font-semibold">{{
                element.yearDiscovered
              }}</span>
              </div>
            </div>
            <div class="p-4">
              <span class="py-1 px-2 mb-2 rounded bg-gray-300 text-xl font-semibold text-gray-900">Detail Information about {{
                element.name
              }} </span>
            <span class="block">Atomic Number: {{
                element.atomicNumber
              }}</span>
              <span class="block">Symbol: {{
                element.symbol
              }}</span>
              <span class="block">Name: {{
                element.name
              }}</span>
              <span class="block">Atomic Mass: {{
                element.atomicMass
              }}</span>
              <span class="block">Atomic Radius: {{
                element.atomicRadius
              }}</span>
              <span class="block">Boiling Point: {{
                element.boilingPoint
              }}</span>
              <span class="block">Density: {{
                element.density
              }}</span>
              <span class="block">Electron Affinity: {{
                element.electronAffinity
              }}</span>
              <span class="block">Electron Egativity: {{
                element.electronegativity
              }}</span>
              <span class="block">Electron Configration: {{
                element.electronicConfiguration
              }}</span>
              <span class="block">Ion Radius Energy: {{
                element.ionizationEnergy
              }}</span>
              <span class="block">Melting Point: {{
                element.meltingPoint
              }}</span>
              <span class="block">Standar State: {{
                element.standardState
              }}</span>
              <span class="block">Bonding type: {{
                element.bondingType
              }}</span>
              <span class="block">Group Blok: {{
                element.groupBlock
              }}</span>
              <span class="block">Oxidation State: {{
                element.oxidationStates
              }}</span>
              <span class="block">VanDelWaals Radius: {{
                element.vanDelWaalsRadius
              }}</span>
              <span class="block">Year Discovered: {{
                element.yearDiscovered
              }}</span>
            </div>
          </div>
        </modal>
        <div class="flex items-center space-x-4 mt-4">
          <button
            class="py-1 px-2 text-xs rounded-2xl bg-gray-200 hover:bg-gray-300 hover:border-gray-400 focus:outline-none border border-gray-300"
          >
            Metal
          </button>
          <button
            class="py-1 px-2 text-xs rounded-2xl bg-gray-200 hover:bg-gray-300 hover:border-gray-400 focus:outline-none border border-gray-300"
          >
            Non Metal
          </button>
          <button
            class="py-1 px-2 text-xs rounded-2xl bg-gray-200 hover:bg-gray-300 hover:border-gray-400 focus:outline-none border border-gray-300"
          >
            ALkali Metal
          </button>
          <button
            class="py-1 px-2 text-xs rounded-2xl bg-gray-200 hover:bg-gray-300 hover:border-gray-400 focus:outline-none border border-gray-300"
          >
            Noble Gas
          </button>
          <button
            class="py-1 px-2 text-xs rounded-2xl bg-gray-200 hover:bg-gray-300 hover:border-gray-400 focus:outline-none border border-gray-300"
          >
            Alkaline Earh Metal
          </button>
          <button
            class="py-1 px-2 text-xs rounded-2xl bg-gray-200 hover:bg-gray-300 hover:border-gray-400 focus:outline-none border border-gray-300"
          >
            Metalloid
          </button>
          <button
            class="py-1 px-2 text-xs rounded-2xl bg-gray-200 hover:bg-gray-300 hover:border-gray-400 focus:outline-none border border-gray-300"
          >
            Halogen
          </button>
          <button
            class="py-1 px-2 text-xs rounded-2xl bg-gray-200 hover:bg-gray-300 hover:border-gray-400 focus:outline-none border border-gray-300"
          >
            Transition Metal
          </button>
          <button
            class="py-1 px-2 text-xs rounded-2xl bg-gray-200 hover:bg-gray-300 hover:border-gray-400 focus:outline-none border border-gray-300"
          >
            Lanthanoid
          </button>
          <button
            class="py-1 px-2 text-xs rounded-2xl bg-gray-200 hover:bg-gray-300 hover:border-gray-400 focus:outline-none border border-gray-300"
          >
            Actinoic
          </button>
          <button
            class="py-1 px-2 text-xs rounded-2xl bg-gray-200 hover:bg-gray-300 hover:border-gray-400 focus:outline-none border border-gray-300"
          >
            Post Transition Metal
          </button>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-center p-5">
        <div
          v-for="element in elements"
          :key="element.symbol"
          @click="getDetailElement(element.name)"
          class="card-width p-4 transform hover:scale-110 transition-transform duration-150 ease-in-out hover:z-auto cursor-pointer m-2"
          :class="{
            'bg-green-300': element.groupBlock == 'metal',
            'bg-purple-300': element.groupBlock == 'nonmetal',
            'bg-orange-300': element.groupBlock == 'alkali metal',
            'bg-pink-300': element.groupBlock == 'noble gas',
            'bg-blue-300': element.groupBlock == 'alkaline earth metal',
            'bg-gray-300': element.groupBlock == 'metalloid',
            'bg-red-300': element.groupBlock == 'halogen',
            'bg-yellow-300': element.groupBlock == 'transition metal',
            'bg-teal-300': element.groupBlock == 'lanthanoid',
            'bg-indigo-300': element.groupBlock == 'actinoid',
            'bg-greentea-300': element.groupBlock == 'post-transition metal',
          }"
        >
          <!-- :style="{ backgroundColor: `#${element.cpkHexColor}`}" -->
          <span class="text-2xl font-semibold block">{{
            element.atomicNumber
          }}</span>
          <span class="text-6xl font-semibold block">{{ element.symbol }}</span>
          <span class="text-2xl font-semibold block">{{ element.name }}</span>
          <span class="text-2xl font-semibold block">{{
            element.atomicMass
          }}</span>
          <span class="text-sm font-semibold block uppercase">{{
            element.standardState
          }}</span>
          <span class="text-sm font-semibold uppercase">{{
            element.groupBlock
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elements: [],
      element: {},
    };
  },
  async fetch() {
    this.elements = await fetch(
      `https://neelpatel05.pythonanywhere.com`
    ).then((res) => res.json());
  },
  methods: {
    async getDetailElement(nameElement) {
      this.element = await fetch(
        `https://neelpatel05.pythonanywhere.com/element/atomicname?atomicname=${nameElement}`
      ).then((res) => res.json());
      this.$modal.show("modal-detail");
    },
  },
};
</script>
<style lang="css" scope>
.card-width {
  width: 15rem;
  height: 18rem;
}
</style>
