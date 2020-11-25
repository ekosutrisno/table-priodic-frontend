<template>
  <div>
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
          <span
            class="py-1 px-2 mb-2 rounded bg-gray-300 text-xl font-semibold text-gray-900"
          >Detail Information about {{ element.name }}
          </span>
          <span
            class="block"
          >Atomic Number: {{ element.atomicNumber }}</span>
          <span class="block">Symbol: {{ element.symbol }}</span>
          <span class="block">Name: {{ element.name }}</span>
          <span class="block">Atomic Mass: {{ element.atomicMass }}</span>
          <span
            class="block"
          >Atomic Radius: {{ element.atomicRadius }}</span>
          <span
            class="block"
          >Boiling Point: {{ element.boilingPoint }}</span>
          <span class="block">Density: {{ element.density }}</span>
          <span
            class="block"
          >Electron Affinity: {{ element.electronAffinity }}</span>
          <span
            class="block"
          >Electron Egativity: {{ element.electronegativity }}</span>
          <span
            class="block"
          >Electron Configration:
            {{ element.electronicConfiguration }}</span>
          <span
            class="block"
          >Ion Radius Energy: {{ element.ionizationEnergy }}</span>
          <span
            class="block"
          >Melting Point: {{ element.meltingPoint }}</span>
          <span
            class="block"
          >Standar State: {{ element.standardState }}</span>
          <span class="block">Bonding type: {{ element.bondingType }}</span>
          <span class="block">Group Blok: {{ element.groupBlock }}</span>
          <span
            class="block"
          >Oxidation State: {{ element.oxidationStates }}</span>
          <span
            class="block"
          >VanDelWaals Radius: {{ element.vanDelWaalsRadius }}</span>
          <span
            class="block"
          >Year Discovered: {{ element.yearDiscovered }}</span>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      required: true
    }
  }

}
</script>
