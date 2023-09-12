import { Layout } from 'antd';
import Header from '@/components/Header.tsx';
import { useRoutes } from 'react-router-dom';
import router from '@/routes';

function App() {
  const routes = useRoutes(router);
  return (
    <Layout>
      <Header />
      <Layout.Content className={'my-8'}>
        <div className={'container'}>{routes}</div>
      </Layout.Content>
    </Layout>
  );
}

export default App;