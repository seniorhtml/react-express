import { Layout } from 'antd';
import Header from '@/components/Header';
import { useRoutes } from 'react-router-dom';
import { publicRoute, privateRoute } from '@/routes';
import { useMemo } from 'react';

const App = () => {
  const usePublicRoute = useRoutes(publicRoute);
  const usePrivateRoute = useRoutes(privateRoute);
  const isAuth = localStorage.getItem('token');
  const routes = useMemo(() => {
    if (isAuth) return usePrivateRoute;
    return usePublicRoute;
  }, [usePrivateRoute, usePublicRoute]);
  return (
    <Layout>
      {isAuth ? <Header /> : null}
      <Layout.Content className={'my-8'}>
        <div className={'container'}>{routes}</div>
      </Layout.Content>
    </Layout>
  );
};

export default App;
