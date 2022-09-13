<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col
      lg="5"
      class="d-flex justify-content-center align-items-center left-login">
      <div class="col-8">
        <h1 class="text-center my-5 title-login">Faça o Login</h1>
        <biblioteca-form v-slot="{ validate }" :submit="submitLogin">
          <div class="mb-3">
            <biblioteca-input
              v-model="username"
              type="email"
              name="e-mail"
              rules="required|email"
              placeholder="E-mail"
              autocomplete="off"
              :focus="true" />
          </div>
          <div class="mb-3">
            <biblioteca-input
              v-model="password"
              name="senha"
              type="password"
              rules="required|min:6"
              placeholder="Senha"
              autocomplete="off" />
          </div>
          <div class="d-grid mb-3">
            <biblioteca-button
              class="btn btn-primary"
              native-type="submit"
              @click="validate">
              Entrar
            </biblioteca-button>
          </div>
          <div class="d-grid text-center">
            <p>
              Não possui conta?
              <router-link class="color--primary" to="/registrar">Criar conta</router-link>
            </p>
          </div>
        </biblioteca-form>
      </div>
    </b-col>
    <b-col lg="7" class="d-flex justify-content-center align-items-center">
      <b-row class="m-0 p-0">
        <b-col class="col-12 my-5 text-center">
          <img src="@/assets/images/logoclara.png" class="logo-login" />
        </b-col>
        <b-col class="col-12 mb-3 text-center">
          <h2 class="lema-saks">
            A primeira <span class="savetech">Savetech</span> do mercado.
          </h2>
        </b-col>
        <b-col class="col-12 text-center">
          <img src="@/assets/images/maocelular2.png" class="celular-login" />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import * as authStore from '@/modules/auth/auth.store';
import { toastError } from '@/services/toastService';
import { passwordLogin } from '@/modules/auth/auth.service';
import { goToBasePage } from '@/router/route.service';

export default {
  name: 'BibliotecaLoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  beforeCreate() {
    if (authStore.getters.getToken()) {
      goToBasePage();
    }
  },
  methods: {
    submitLogin() {
      passwordLogin(this.username, this.password)
        .then(goToBasePage)
        .catch(err => {
          if (err.response.data.message === 'USUARIO_INCORRETO') {
            toastError('E-mail e/ou senha incorretos');
          }
        });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,600&display=swap");
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Plus Jakarta Sans", sans-serif !important;
}

.row-login {
  margin-left: 0;
}

.left-login {
  background-color: #daecec;
}

.title-login {
  font-family: "Plus Jakarta Sans", sans-serif !important;
  font-style: normal !important;
  font-weight: 700 !important;
}

.botao-entrar {
  font-weight: 700 !important;
  background-color: #5274d8 !important;
  border-color: #5274d8 !important;
}
.botao-entrar:hover {
  background-color: #4562ba !important;
  border-color: #4562ba !important;
}

.savetech {
  color: #5274d8;
  font-family: "Fraunces", serif !important;
  font-weight: 600 !important;
  font-style: italic;
}

.lema-saks {
  font-weight: 700;
}

.celular-login {
  width: 60%;
}
</style>
