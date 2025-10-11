<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!');
const test = ref(msg.value.length + 1);
</script>

<template>
    <h1>{{ msg }}</h1>
    <input v-model="msg" />
    <input :value="test" />
</template>


<script setup>
import { ref,computed} from 'vue'

const msg = ref('Hello World!');
const test = computed(() => {
  return msg.value.length + 1
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <input :value="test"/>
</template>