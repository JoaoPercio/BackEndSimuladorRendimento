import authRoutes from '@/modules/auth/auth.routes';
import homeRoutes from '@/modules/home/home.routes';
import errorRoutes from '@/modules/error/error.routes';
import usuarioRoutes from '@/modules/tipoimovel/tipoimovel.routes';
import livroRoutes from '@/modules/imovel/imovel.routes';
import administradorRoutes from '@/modules/administrador/administrador.routes';
import gerenciarRoutes from '@/modules/gerenciar/gerenciar.routes';

const routes = [
  {
    path: '*',
    redirect: '/',
  },
];

export default [
  ...routes,
  ...homeRoutes,
  ...authRoutes,
  ...errorRoutes,
  ...gerenciarRoutes,
  ...usuarioRoutes,
  ...livroRoutes,
  ...administradorRoutes,
];
