import Vue from 'vue';
import en from 'vee-validate/dist/locale/en.json';
import ptBr from 'vee-validate/dist/locale/pt_BR.json';
import { required, email, min } from 'vee-validate/dist/rules';
import { ValidationProvider, ValidationObserver, setInteractionMode, extend, localize } from 'vee-validate';

localize({ en, 'pt-br': ptBr });

localize('pt-br');
setInteractionMode('passive');

extend('min', min);
extend('email', email);
extend('required', required);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
