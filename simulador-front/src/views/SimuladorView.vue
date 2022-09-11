<template>
  <div class="container mt-2">
    <b-row>
      <b-col col="12">
        <b-card class="mt-5 mx-lg-5 shadow-sm">
          <b-card-title class="text-align-center my-3 ms-4"
            >Simulador de Investimentos
          </b-card-title>
          <b-card-text class="mb-3 mx-4">
            <b-form>
              <b-row class="mb-4">
                <b-col class="col-12 col-sm-6">
                  <b-form-group label="Nome" for="nome">
                    <b-form-input
                      id="nome"
                      v-model="form.nome"
                      type="text"
                      placeholder="Nome do objetivo"
                      required
                      autocomplete="off"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col class="col-12 col-sm-6 mt-3 mt-sm-0">
                  <b-form-group label="Valor de entrada" for="valorEntrada"
                    ><b-input-group prepend="R$">
                      <input
                        type="text"
                        id="valorEntrada"
                        placeholder="0,00"
                        v-model="form.valorEntrada"
                        v-money="form.valorEntrada !== '' ? money : ''"
                        class="form-control"
                        required
                        autocomplete="off"
                      />
                    </b-input-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="mb-4">
                <b-col class="col-12 col-sm-6">
                  <b-form-group label="Valor do objetivo" for="valorObjetivo"
                    ><b-input-group prepend="R$">
                      <input
                        type="text"
                        id="valorObjetivo"
                        placeholder="0,00"
                        v-model="form.valorObjetivo"
                        v-money="form.valorObjetivo !== '' ? money : ''"
                        class="form-control"
                        required
                        autocomplete="off"
                      />
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col class="col-12 col-sm-6 mt-3 mt-sm-0">
                  <b-form-group label="Prazo" for="prazo"
                    ><b-form-input
                      id="prazo"
                      v-model="form.prazo"
                      type="number"
                      placeholder="0 meses"
                      required
                      autocomplete="off"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="my-2">
                <b-col class="text-center">
                  <b-button
                    type="submit"
                    variant="primary"
                    class="w-100 btn-lg botao-simular"
                    @click="simular"
                    >Simular
                  </b-button>
                </b-col>
                <b-col class="text-center">
                  <b-button
                    type="submit"
                    variant="outline-secondary"
                    class="w-100 btn-lg botao-limpar"
                    @click="limpar"
                    >Limpar
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col class="col-12 col-md-6 col-xl-4 align-items-center mt-4">
        <b-card class="card-border-1 shadow-sm">
          <b-card-title>MB Prev-VII</b-card-title>
          <b-card-content>
            <p><strong>Rentabilidade: </strong>0,56% ao mês</p>
            <p><strong>Risco: </strong>Baixo</p>
            <p><strong>Investimento mensal:</strong></p>
            <b-input-group prepend="R$">
              <b-form-input
                id="investimentoMensal"
                v-model="form.investimentoMensal"
                type="text"
                placeholder="0,00"
                disabled
              ></b-form-input>
            </b-input-group>
          </b-card-content>
        </b-card>
      </b-col>
      <b-col class="col-12 col-md-6 col-xl-4 align-items-center mt-4">
        <b-card class="card-border-2 shadow-sm">
          <b-card-title>Occam FIM</b-card-title>
          <b-card-content>
            <p><strong>Rentabilidade: </strong>1% ao mês</p>
            <p><strong>Risco: </strong>Médio</p>
            <p><strong>Investimento mensal:</strong></p>
            <b-input-group prepend="R$">
              <b-form-input
                id="investimentoMensal"
                v-model="form.investimentoMensal"
                type="text"
                placeholder="0,00"
                disabled
              ></b-form-input>
            </b-input-group>
          </b-card-content>
        </b-card>
      </b-col>
      <b-col class="col-12 col-md-6 col-xl-4 align-items-center mt-4">
        <b-card class="card-border-3 shadow-sm">
          <b-card-title>Saks Superprev FIM</b-card-title>
          <b-card-content>
            <p><strong>Rentabilidade: </strong>3% ao mês</p>
            <p><strong>Risco: </strong>Alto</p>
            <p><strong>Investimento mensal:</strong></p>
            <b-input-group prepend="R$">
              <b-form-input
                id="investimentoMensal"
                v-model="form.investimentoMensal"
                type="text"
                placeholder="0,00"
                disabled
              ></b-form-input>
            </b-input-group>
          </b-card-content>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { VMoney } from "v-money";

export default {
  name: "SimuladorView",
  data() {
    return {
      form: {
        nome: "",
        valorEntrada: "",
        valorObjetivo: "",
        prazo: "",
        investimentoMensal: "",
      },
      money: {
        decimal: ",",
        thousands: ".",
        precision: 2,
      },
    };
  },
  directives: { money: VMoney },
};

/*Função para formatar valores input string BRL para float
function formatarMoeda(valor) {
  if (valor === "") {
    valor = "0";
  } else {
    valor = valor.replace(/["."]/g, "");
    valor = valor.replace(",", ".");
    valor = parseFloat(valor);
  }
  return valor;
}*/
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap");
*,
*::after,
*::before {
  font-family: "Plus Jakarta Sans", sans-serif !important;
}
.card-border-1 {
  border-left: 10px solid #2dce64 !important;
  width: 100%;
}
.card-border-2 {
  border-left: 10px solid #e8d319 !important;
  width: 100%;
}
.card-border-3 {
  border-left: 10px solid #ce2d2d !important;
  width: 100%;
}
.botao-simular {
  background-color: #5274d8 !important;
  border-color: #5274d8 !important;
}
.botao-simular:hover {
  background-color: #4562ba !important;
  border-color: #4562ba !important;
}
.botao-limpar:hover {
  background-color: #6f6f6f !important;
}
</style>
