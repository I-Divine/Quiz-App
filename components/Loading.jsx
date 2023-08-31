const Loading = ({ loading, setLoading }) => {
  setTimeout(() => {
    setLoading(false);
    console.log(loading);
  }, 3000);
  return <div>Loading...</div>;
};
export default Loading;
