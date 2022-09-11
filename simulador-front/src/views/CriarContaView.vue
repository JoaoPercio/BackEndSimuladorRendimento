<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col
      lg="5"
      class="d-flex justify-content-center align-items-center left-login"
      ><div class="col-8">
        <h1 class="text-center my-5 title-login">Criar Conta</h1>
        <b-form>
          <div class="form-floating mb-4">
            <input
              type="text"
              id="nome"
              class="form-control"
              placeholder="Nome"
            />
            <label for="nome" class="form-label">Nome</label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="E-mail"
            />
            <label for="email" class="form-label">E-mail</label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="password"
              id="senha"
              class="form-control"
              placeholder="Senha"
            />
            <label for="senha" class="form-label">Senha</label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="password"
              id="confirmarSenha"
              class="form-control"
              placeholder="Confirmar Senha"
            />
            <label for="confirmarSenha" class="form-label"
              >Confirmar Senha
            </label>
          </div>
          <!--b-form-group label="Nome" label-for="nome" class="mb-4"
            ><b-form-input
              id="nome"
              v-model="form.nome"
              type="text"
              placeholder="Digite o seu nome"
              autocomplete="off"
              required
              class="my-2"
            ></b-form-input>
          </!--b-form-group>
          <b-form-group label="E-mail" label-for="email" class="mb-4"
            ><b-form-input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Digite o seu e-mail"
              autocomplete="off"
              required
              class="my-2"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Senha" label-for="password" class="mb-4"
            ><b-form-input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Digite a sua senha"
              autocomplete="off"
              required
              class="my-2"
            ></b-form-input>
          </b-form-group>
          <b-form-group--
            label="Confirmar Senha"
            label-for="confirmPassword"
            class="mb-4"
            ><b-form-input
              id="confirmPassowrd"
              v-model="form.confirmPassword"
              type="password"
              placeholder="Confirme a sua senha"
              autocomplete="off"
              required
              class="my-2"
            ></b-form-input>
          </b-form-group-->
          <b-button
            type="button"
            variant="primary"
            class="w-100 my-1 btn-lg botao-entrar"
            @click="login"
            >Criar Conta</b-button
          >
          <hr />
          <b-button
            type="button"
            variant="outline-secondary"
            class="w-100 my-1 mb-5 btn-lg"
            @click="register"
            >Voltar para o login</b-button
          >
        </b-form>
      </div>
    </b-col>
    <b-col lg="7" class="d-flex justify-content-center align-items-center"
      ><b-row class="m-0 p-0">
        <b-col class="col-12 my-5 text-center">
          <img src="../assets/logoclara.png" class="logo-login" />
        </b-col>
        <b-col class="col-12 mb-3 text-center">
          <h2 class="lema-saks">
            A primeira <span class="savetech">Savetech</span> do mercado.
          </h2>
        </b-col>
        <b-col class="col-12 text-center">
          <img src="../assets/maocelular2.png" class="celular-login" />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nome: "",
        email: "",
        password: "",
      },
    };
  },
  methods() {
    //login(), register();
  },
};
</script>

<style>
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
  width: 70%;
}
</style>
