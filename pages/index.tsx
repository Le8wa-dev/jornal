import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import { GetServerSideProps } from 'next';
import { wrapper } from '../redux/store';
import { parseCookies } from 'nookies';
import { UserApi } from '../utils/api';
import { setUserData } from '../redux/slices/user';

export default function Home() {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  store =>
    async ctx => {
      try {
        const { authToken } = parseCookies(ctx) || "";

        // const userData = await UserApi.getMe(authToken)
        if (authToken) {
          const userData = {
            id: 1,
            token: authToken,
            fullName: "Andrew",
            password: "123123",
            email: "savio123@mail.ru",
            created_at: "2021-10-07T19:13:29.029Z",
            updated_at: "2021-10-07T19:13:29.029Z",
          }
          store.dispatch(setUserData(userData))
        }
        return {
          props: {

          }
        }
      }
      catch (e) {
        console.log(e);
        return {
          props: {}
        }
      }

    });
