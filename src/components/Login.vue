<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-alert v-model="mostrar" type="error">
              Email e/ou senha inválido"
            </v-alert>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" v-model="usuario.email" label="E-mail" type="text"></v-text-field>
                  <v-text-field id="password" v-model="usuario.senha" prepend-icon="lock" name="password" label="Senha"
                    type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="primary" @click="autenticar">Login</v-btn>

                <v-btn color="success" to="Cliente">Cadastrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import API from "@/lib/HttpRequest";
export default {
  methods: {
    autenticar() {
      // this.usuario.email = this.email;
      // this.usuario.senha = this.senha;
      API.getUsuario(this.usuario).then(usuario => {
        console.log(usuario);
        if (usuario) {
          this.$router.replace("/Estabelecimentos");
          localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        } else {
          this.mostrar = true;
        }
      });
    }
  },
  data: () => ({
    drawer: null,
    usuario: {},
    email: "",
    senha: "",
    msg: "",
    mostrar: false
  })
};
</script>

<style>
</style>
