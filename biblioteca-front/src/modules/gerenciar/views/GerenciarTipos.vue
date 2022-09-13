<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <div class="d--flex justify-content--space-between align-items--center">
        <biblioteca-header>Tipos de imoveis</biblioteca-header>
        <biblioteca-button @click="onCreateUsuario">
          Adicionar Tipo de Imovel
        </biblioteca-button>
      </div>
      <table v-if="usuarioList && usuarioList.length > 0" class="table">
        <tbody>
          <tr v-for="usuario in usuarioList" :key="usuario.id">
            <td class="py-3 px-2">
              <biblioteca-header size="sm" class="d-flex align-item--center">
                <biblioteca-usuario-link :id="usuario.id">
                  {{ usuario.nome }}
                </biblioteca-usuario-link>
              </biblioteca-header>
            </td>
            <td class="align-middle text-end">
              <el-dropdown
                trigger="click">
                <biblioteca-icon
                  icon="three-dots-vertical"
                  class="cursor--pointer mx--md" />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <biblioteca-usuario-link
                      :id="usuario.id"
                      action="edit">
                      <biblioteca-icon size="sm" icon="pencil" />
                      Editar
                    </biblioteca-usuario-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a @click="setDeleteUsuario(usuario)">
                      <biblioteca-icon size="sm" icon="trash" />
                      Excluir
                    </a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <biblioteca-modal-delete
                v-if="showModal(usuario)"
                content="Você realmente deseja excluir o usuário?"
                @close="setDeleteUsuario(null)"
                @confirm="onDeleteUsuario(usuario)">
              </biblioteca-modal-delete>
            </td>
          </tr>
        </tbody>
      </table>
      <biblioteca-p v-else class="opacity--50 my--lg">( Sem usuários )</biblioteca-p>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
import { fetchUsuarios, removeUsuario } from '@/modules/tipoimovel/tipoimovel.service';
import { goToCreateUsuario } from '@/modules/tipoimovel/tipoimovel.routes';

import BibliotecaUsuarioLink from '@/modules/tipoimovel/components/TipoImovelLink.vue';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'BibliotecaGerenciarUsuarios',
  components: {
    BibliotecaUsuarioLink,
    BibliotecaSingleContentLayout,
  },
  data() {
    return {
      usuarioList: [],
      usuarioDelete: null,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.usuarioList = [];
      fetchUsuarios()
        .then(data => {
          this.usuarioList = data.data;
        })
        .catch(() => {
          this.usuarioList = [];
        });
    },
    onCreateUsuario() {
      goToCreateUsuario(this.$router);
    },
    setDeleteUsuario(usuario) {
      this.usuarioDelete = usuario;
    },
    showModal(usuario) {
      return this.usuarioDelete && this.usuarioDelete.id === usuario.id;
    },
    onDeleteUsuario(usuario) {
      removeUsuario(usuario)
        .then(() => {
          this.$router.go(0);
        })
        .catch(() => toastError('Não foi possível excluir o usuário'));
    },
  },
};
</script>
