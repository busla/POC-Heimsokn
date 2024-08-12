<template>
  <br />
  <h2 class="text-center">Mínar Bókanir</h2>
  <br />
  <v-card title="Bókanir">
    <v-table fixed-header>
      <thead>
        <tr>
          <th class="font-weight-bold">Heimilsfang</th>
          <th class="font-weight-bold">Postnumer</th>
          <th class="font-weight-bold">Tegund</th>
          <th class="font-weight-bold">Þjónustuveita</th>
          <th class="font-weight-bold">Dagsetning</th>
          <th class="font-weight-bold">Tími</th>
          <th class="font-weight-bold">Ein heimsókn</th>
          <th class="font-weight-bold">Tengd í stöð</th>
          <th class="font-weight-bold">.</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in bookings" :key="item.heimilsfang">
          <td>{{ item.heimilsfang }}</td>
          <td>{{ item.postnumer }}</td>
          <td>{{ item.tegund }}</td>
          <td>{{ item.thjonustuveita }}</td>
          <td>{{ item.dagsetning }}</td>
          <td>{{ item.timi }}</td>
          <td><v-icon icon="mdi-check" color="teal-darken-2"></v-icon></td>
          <td><v-icon icon="mdi-close-circle-outline" color="red"></v-icon></td>
          <th>
            <v-btn density="compact" color="indigo-darken-3" to="/forms">Hefja uppsetningu</v-btn>
          </th>
        </tr>
      </tbody>
    </v-table>
  </v-card>
  <br />
  <v-card title="Framkvæmdarbeiðnir ">
    <v-table fixed-header>
      <thead>
        <tr>
          <th class="font-weight-bold">Heimilsfang</th>
          <th class="font-weight-bold">Tegund</th>
          <th class="font-weight-bold">Tegund Bilunar</th>
          <th class="font-weight-bold">Dagsetning</th>
          <th class="font-weight-bold">Tími</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Issues" :key="item.heimilsfang">
          <td>{{ item.heimilsfang }}</td>
          <td>{{ item.tegund }}</td>
          <td>{{ item.tegundBilunar }}</td>
          <td>{{ item.dagsetning }}</td>
          <td>{{ item.timi }}</td>
          <th><v-btn density="compact" color="indigo-darken-3">Hefja Beiðni</v-btn></th>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      bookings: [
        {
          heimilsfang: 'jaðarleiti 6',
          postnumer: '03 0102 - 103',
          tegund: 'uppsetning',
          thjonustuveita: 'síminn',
          dagsetning: '09.05.2024',
          timi: '14:30',
          ein_heimsokn: null,
          tengd_stod: null
        },
        {
          heimilsfang: 'Austurbún 6A.',
          postnumer: '02 0102 - 104',
          tegund: 'Nettengt',
          thjonustuveita: 'síminn',
          dagsetning: '15.05.2024',
          timi: '10:30',
          ein_heimsokn: null,
          tengd_stod: null
        }
      ],
      Issues: [
        {
          heimilsfang: '17. júnítorg',
          tegund: 'Bilun',
          tegundBilunar: null,
          dagsetning: '09.05.2024',
          timi: '14:30'
        }
      ]
    }
  }
}
</script>
