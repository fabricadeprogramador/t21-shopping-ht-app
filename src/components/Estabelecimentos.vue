<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>

        <v-list subheader>
          <v-list-tile v-for="estabelecimento in estabelecimentos" :key="estabelecimento._id" avatar @click="">

            <v-list-tile-content>
              <v-list-tile-title v-html="estabelecimento.nome"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>keyboard_arrow_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import HttpRequest from "@/lib/HttpRequest";
  export default {
    mounted() {
      HttpRequest.getEstabelecimentos().then(estabelecimentos => {
        this.estabelecimentos = estabelecimentos;
      });
    },
    data() {
      return {
        estabelecimentos: []
      }
    }
  }

</script>

<style>

</style>
