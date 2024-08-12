<template>
  <v-sheet class="container" density="compact">
    <radial-progress-bar
      :diameter="200"
      :completed-steps="completedSteps"
      :total-steps="totalSteps"
    >
      <p>Skref: {{ completedSteps }}/{{ totalSteps }}</p>
    </radial-progress-bar>
  </v-sheet>

  <v-sheet
    class="pa-4 text-center mx-auto"
    elevation="12"
    rounded="lg"
    width="100%"
    v-if="currentStep === 1"
  >
    <div>Step 1</div>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="name.value.value"
        :counter="10"
        :error-messages="name.errorMessage.value"
        label="Name"
      ></v-text-field>

      <v-text-field
        v-model="phone.value.value"
        :counter="7"
        :error-messages="phone.errorMessage.value"
        label="Phone Number"
      ></v-text-field>

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>

      <v-select
        v-model="select.value.value"
        :error-messages="select.errorMessage.value"
        :items="items"
        label="Select"
      ></v-select>

      <v-checkbox
        v-model="checkbox.value.value"
        :error-messages="checkbox.errorMessage.value"
        label="Option"
        type="checkbox"
        value="1"
      ></v-checkbox>

      <v-btn class="me-4" @click="handleReset"> clear </v-btn>

      <v-btn class="me-4" type="submit" @click="incrementStep"> Áfram </v-btn>
    </form>
  </v-sheet>
  <v-sheet
    class="pa-4 text-center mx-auto"
    elevation="12"
    rounded="lg"
    width="100%"
    v-if="currentStep === 2"
  >
    <div>Step 2</div>
    <form @submit.prevent="submit">
      <v-item-group selected-class="bg-primary">
        <br />
        <p>Question prompt</p>
        <br />
        <v-btn-toggle v-model="text" color="deep-purple-accent-3" rounded="0" group>
          <v-btn value="left"> opt 1 </v-btn>

          <v-btn value="center"> opt 2 </v-btn>

          <v-btn value="right"> opt 3 </v-btn>

          <v-btn value="justify"> opt 4 </v-btn>
        </v-btn-toggle>
        <br />
        <v-container fluid>
          <v-radio-group v-model="radios">
            <template v-slot:label>
              <div>Er það yfir eða undir straumur?</div>
            </template>
            <v-radio value="Yfir">
              <template v-slot:label>
                <div>Yfir straumur</div>
              </template>
            </v-radio>
            <v-radio value="Undir">
              <template v-slot:label>
                <div>Undir straumur</div>
              </template>
            </v-radio>
          </v-radio-group>
        </v-container>
      </v-item-group>
      <v-btn class="me-4" type="submit" @click="deincrementStep"> Til baka </v-btn>
      <v-btn class="me-4" type="submit" @click="incrementStep"> Áfram </v-btn>
    </form>
  </v-sheet>
  <v-sheet
    class="pa-4 text-center mx-auto"
    elevation="12"
    rounded="lg"
    width="100%"
    v-if="currentStep === 3"
  >
    <div>Step 3</div>
    <form @submit.prevent="submit">
      <v-item-group selected-class="bg-primary">
        <br />
        <p>Samatekt á verkefni</p>
        <br />
        <div class="electrician-visit">
          <p><strong>Date:</strong> {{ visitDate }}</p>
          <p><strong>Time:</strong> {{ visitTime }}</p>
          <p><strong>Address:</strong> {{ address }}</p>
          <p><strong>Issue:</strong> {{ issue }}</p>
          <p><strong>Solution:</strong> {{ solution }}</p>
          <p><strong>Status:</strong> {{ status }}</p>
        </div>
      </v-item-group>
      <br />
      <v-btn class="me-4" type="submit" @click="deincrementStep"> Til baka </v-btn>
      <v-btn class="me-4" type="submit" @click="incrementStep" to="bookings"> Klára </v-btn>
    </form>
  </v-sheet>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useField, useForm } from 'vee-validate'
import RadialProgressBar from 'vue-radial-progress'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true

      return 'Name needs to be at least 2 characters.'
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true

      return 'Phone number needs to be at least 9 digits.'
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
    select(value) {
      if (value) return true

      return 'Select an item.'
    },
    checkbox(value) {
      if (value === '1') return true

      return 'Must be checked.'
    }
  }
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const checkbox = useField('checkbox')
const text = ref('name')
const radios = ref('')

const items = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4'])

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})

const currentStep = ref(1) // Start with step 1

function incrementStep() {
  if (currentStep.value < 3) {
    currentStep.value++
    completedSteps.value++
  }
}
function deincrementStep() {
  if (currentStep.value > 1) {
    currentStep.value--
    completedSteps.value--
  }
}

const visitDate = ref('2024-08-10')
const visitTime = ref('13:49')
const address = ref('123 Main St, Reykjavík')
const issue = ref('Faulty wiring')
const solution = ref('Replaced damaged wires')
const status = ref('Completed')
const completedSteps = ref(currentStep.value)
const totalSteps = ref(3)

watch(currentStep.value, (newValue) => {
  completedSteps.value = newValue.value
})
</script>

<style>
.container {
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */
  padding: 20px 0;
}
.electrician-visit {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
