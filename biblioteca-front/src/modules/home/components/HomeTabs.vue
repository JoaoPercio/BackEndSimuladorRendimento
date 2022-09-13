<template>
  <el-tabs v-model="tabActive" @tab-click="fetch">
    <el-tab-pane label="Últimos Imoveis" name="livros">
      <div v-if="livroList.length">
        <div
          v-for="livro in livroList"
          :key="livro.id"
          class="mb--xl">
          <biblioteca-livro-card :livro="livro" />
        </div>
      </div>
      <div v-else>
        <biblioteca-p class="opacity--50 my--md">( Sem imoveis )</biblioteca-p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Últimos Tipos de Imoveis" name="usuarios">
      <div v-if="usuarioList.length">
        <div
          v-for="usuario in usuarioList"
          :key="usuario.id"
          class="mb--xl">
          <biblioteca-tipo-card :usuario="usuario" />
        </div>
      </div>
      <div v-else>
        <biblioteca-p class="opacity--50 my--md">( Sem tipos de imoveis )</biblioteca-p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Últimos Administradores" name="administradores">
      <div v-if="usuarioList.length">
        <div
          v-for="usuario in usuarioList"
          :key="usuario.id"
          class="mb--xl">
          <biblioteca-usuario-card :usuario="usuario" />
        </div>
      </div>
      <div v-else>
        <biblioteca-p class="opacity--50 my--md">( Sem administradores )</biblioteca-p>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { fetchLivros } from '@/modules/imovel/imovel.service';
import { fetchUsuarios } from '@/modules/tipoimovel/tipoimovel.service';
import { fetchAdministradores } from '@/modules/administrador/administrador.service';

import BibliotecaLivroCard from '@/modules/imovel/components/ImovelCard.vue';
import BibliotecaUsuarioCard from '@/modules/administrador/components/AdministradorCard.vue';
import BibliotecaTipoCard from '@/modules/tipoimovel/components/TipoImovelCard.vue';

export default {
  name: 'BibliotecaHomeTabs',
  components: {
    BibliotecaLivroCard,
    BibliotecaUsuarioCard,
    BibliotecaTipoCard,
  },
  data() {
    return {
      tabActive: 'livros',
      livroList: [],
      usuarioList: [],
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      if (this.tabActive === 'emprestimos') {
        this.fetchEmprestimos();
      } else if (this.tabActive === 'livros') {
        this.fetchLivros();
      } else if (this.tabActive === 'usuarios') {
        this.fetchUsuarios();
      } else if (this.tabActive === 'administradores') {
        this.fetchAdministradores();
      }
    },
    fetchLivros() {
      fetchLivros()
        .then(data => {
          this.livroList = data.data;
        })
        .catch(() => {
          this.livroList = [];
        });
    },
    fetchUsuarios() {
      fetchUsuarios()
        .then(data => {
          this.usuarioList = data.data;
        })
        .catch(() => {
          this.usuarioList = [];
        });
    },
    fetchAdministradores() {
      fetchAdministradores()
        .then(data => {
          this.usuarioList = data.data;
        })
        .catch(() => {
          this.usuarioList = [];
        });
    },
  },
};
</script>
