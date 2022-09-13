<template>
  <el-main>
    <b-row class="vh-100 vw-100 row-login">
      <b-col
        lg="5"
        class="d-flex justify-content-center align-items-center left-login">
        <div class="col-8">
          <h1 class="text-center my-5 title-login">Criar Conta</h1>
          <biblioteca-form v-slot="{ validate }" :submit="validateUsuario">
            <biblioteca-row>
              <biblioteca-col
                class="text-center mb-3">
                <biblioteca-input
                  v-model="info.nome"
                  type="text"
                  name="nome"
                  rules="required"
                  placeholder="Nome"
                  :focus="true" />
              </biblioteca-col>
            </biblioteca-row>
            <biblioteca-row>
              <biblioteca-col
                class="text-center mb-3">
                <biblioteca-input
                  v-model="info.email"
                  type="email"
                  name="e-mail"
                  rules="required|email"
                  placeholder="E-mail" />
              </biblioteca-col>
            </biblioteca-row>
            <biblioteca-row>
              <biblioteca-col
                class="text-center mb-3"
                :sm="12">
                <biblioteca-input
                  v-model="info.senha"
                  name="senha"
                  type="password"
                  rules="required|min:6"
                  placeholder="Senha*" />
              </biblioteca-col>
              <biblioteca-col
                class="text-center mb-3"
                :sm="12">
                <biblioteca-input
                  v-model="info.confirmar_senha"
                  name="confirmar senha"
                  type="password"
                  rules="required|min:6"
                  placeholder="Confirmar senha*" />
              </biblioteca-col>
            </biblioteca-row>
            <biblioteca-row>
              <biblioteca-col
                class="text-center mb-3">
                <biblioteca-button
                  native-type="submit"
                  class="btn btn-dark"
                  @click="validate">
                  Confirmar
                </biblioteca-button>
              </biblioteca-col>
            </biblioteca-row>
          </biblioteca-form>
        </div>
      </b-col>
      <b-col lg="7" class="d-flex justify-content-center align-items-center">
        <b-row class="m-0 p-0">
          <b-col class="col-12 my-5 text-center">
            <img src="@/assets//images/logoclara.png" class="logo-login" />
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
  </el-main>
</template>

<script>
import { registrar } from '@/modules/auth/auth.service';
import { toastError } from '@/services/toastService';
import { goToBasePage } from '@/router/route.service';

export default {
  name: 'BibliotecaRegistrarPage',
  provide() {
    const infoRegistrarVm = {};
    Object.defineProperty(infoRegistrarVm, 'info', {
      get: () => this.info,
    });
    return { infoRegistrarVm };
  },
  data() {
    return {
      info: {
        nome: null,
        email: null,
        senha: null,
        confirmar_senha: null,
      },
    };
  },
  methods: {
    onRegistrar() {
      registrar(this.info)
        .then(goToBasePage)
        .catch(err => {
          if (err.response.data.message === 'EMAIL_DUPLICADO') {
            toastError('E-mail duplicado');
          }
        });
    },
    validateUsuario() {
      const specialChars = !!(this.info.senha.match(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]+/) && this.info.senha.match(/\d+/));

      if (!specialChars) {
        toastError('A senha deve conter caracteres especiais e números');
      } else if (this.info.senha !== this.info.confirmar_senha) {
        toastError('As senhas não são iguais');
      } else {
        this.onRegistrar();
      }
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
  font-weight: bold;
}

.botao-entrar {
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
  font-weight: 700 !important;
}

.celular-login {
  width: 58%;
}
</style>
