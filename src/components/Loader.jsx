import { Hourglass } from 'react-loader-spinner';

const Loader = () => {
  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Make the loader cover the entire viewport height
  };

  return (
    <div className='flex-col' style={loaderStyle}>
      <Hourglass
        visible={true}
        height={80}
        width={80}
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#00ccff', '#00cc00']}
      />
      <h2 className='font-bold text-3xl text-sky-600'>SKSSF</h2>
    </div>
  );
};

export default Loader;
