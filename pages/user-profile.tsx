import { GetServerSideProps } from 'next';

const UserProfile = () => {
  return <div>UserProfile</div>;
};
export const getServerSideProps:GetServerSideProps = async(context)=> {
  const { params, req, res } = context;
  return {
    props:{}
  }
}
export default UserProfile;
