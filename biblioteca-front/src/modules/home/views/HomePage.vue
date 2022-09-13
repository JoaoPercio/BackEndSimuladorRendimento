<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <div class="container mt-2">
        <b-row>
          <b-col col="12">
            <b-card class="mt-5 mx-lg-5 shadow-sm">
              <b-card-title class="text-align-center my-3 ms-4">
                Simulador de Investimentos
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
                          autocomplete="off">
                        </b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col class="col-12 col-sm-6 mt-3 mt-sm-0">
                      <b-form-group label="Valor de entrada" for="valorEntrada">
                        <b-input-group prepend="R$">
                          <input
                            id="valorEntrada"
                            v-model="form.valorEntrada"
                            v-money="form.valorEntrada !== '' ? money : ''"
                            type="text"
                            placeholder="0,00"
                            class="form-control"
                            required
                            autocomplete="off" />
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row class="mb-4">
                    <b-col class="col-12 col-sm-6">
                      <b-form-group label="Valor do objetivo" for="valorObjetivo">
                        <b-input-group prepend="R$">
                          <input
                            id="valorObjetivo"
                            v-model="form.valorObjetivo"
                            v-money="form.valorObjetivo !== '' ? money : ''"
                            type="text"
                            placeholder="0,00"
                            class="form-control"
                            required
                            autocomplete="off" />
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                    <b-col class="col-12 col-sm-6 mt-3 mt-sm-0">
                      <b-form-group label="Prazo (Meses)" for="prazo">
                        <input
                          id="prazo"
                          v-model="form.prazo"
                          v-money="form.prazo !== '' ? period : ''"
                          type="number"
                          min="0"
                          placeholder="0 meses"
                          class="form-control"
                          required
                          autocomplete="off" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row class="my-2">
                    <b-col class="text-center">
                      <b-button
                        type="submit"
                        variant="primary"
                        class="w-100 btn-lg botao-simular"
                        @click="simular">
                        Simular
                      </b-button>
                    </b-col>
                    <b-col class="text-center">
                      <b-button
                        type="submit"
                        variant="outline-secondary"
                        class="w-100 btn-lg botao-limpar"
                        @click="limpar">
                        Limpar
                      </b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row v-if="livroList && livroList.length > 0" class="my-5">
          <b-col v-for="livro in livroList" :key="livro.id" class="col-12 col-md-6 col-xl-4 align-items-center mt-4">
            <b-card v-if="livro.risco === 'Conservador'" class="card-border-1 shadow-sm">
              <b-card-title>{{ livro.nome }}</b-card-title>
              <b-card-content>
                <p><strong>Rentabilidade: </strong>{{ livro.rentabilidade }}% anual</p>
                <p><strong>Risco: </strong>{{ livro.risco }}</p>
                <p><strong>Investimento mensal:</strong></p>
                <b-input-group prepend="R$">
                  <b-form-input
                    id="investimentoMensal"
                    v-model="form.investimentoMensal"
                    type="text"
                    placeholder="0,00"
                    disabled>
                  </b-form-input>
                </b-input-group>
              </b-card-content>
            </b-card>
            <b-card v-if="livro.risco === 'Moderado'" class="card-border-2 shadow-sm">
              <b-card-title>{{ livro.nome }}</b-card-title>
              <b-card-content>
                <p><strong>Rentabilidade: </strong>{{ livro.rentabilidade }}% anual</p>
                <p><strong>Risco: </strong>{{ livro.risco }}</p>
                <p><strong>Investimento mensal:</strong></p>
                <b-input-group prepend="R$">
                  <b-form-input
                    id="investimentoMensal"
                    v-model="form.investimentoMensal"
                    type="text"
                    placeholder="0,00"
                    disabled>
                  </b-form-input>
                </b-input-group>
              </b-card-content>
            </b-card>
            <b-card v-if="livro.risco === 'Agressivo'" class="card-border-3 shadow-sm">
              <b-card-title>{{ livro.nome }}</b-card-title>
              <b-card-content>
                <p><strong>Rentabilidade: </strong>{{ livro.rentabilidade }}% anual</p>
                <p><strong>Risco: </strong>{{ livro.risco }}</p>
                <p><strong>Investimento mensal:</strong></p>
                <b-input-group prepend="R$">
                  <b-form-input
                    id="investimentoMensal"
                    v-model="form.investimentoMensal"
                    type="text"
                    placeholder="0,00"
                    disabled>
                  </b-form-input>
                </b-input-group>
              </b-card-content>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';
// import BibliotecaHomeTabs from '@/modules/home/components/HomeTabs.vue';
import { VMoney } from 'v-money';

import { fetchLivros } from '@/modules/imovel/imovel.service';

export default {
  name: 'BibliotecaHomeLayout',
  components: {
    BibliotecaSingleContentLayout,
    // BibliotecaHomeTabs,
  },
  directives: {
    money: VMoney,
    period: VMoney,
  },
  data() {
    return {
      form: {
        nome: '',
        valorEntrada: '',
        valorObjetivo: '',
        prazo: '',
        investimentoMensal: '',
      },
      money: {
        decimal: ',',
        thousands: '.',
        precision: 2,
      },
      period: {
        decimal: '',
        thousands: '',
        precision: 0,
      },
      livroList: [],
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    limpar() {
      this.form.nome = '';
      this.form.valorEntrada = '';
      this.form.valorObjetivo = '';
      this.form.prazo = '';
    },
    fetch() {
      this.livroList = [];
      fetchLivros()
        .then(data => {
          this.livroList = data.data;
        })
        .catch(() => {
          this.livroList = [];
        });
    },
  },
};
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
