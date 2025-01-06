import Loader from "./Loader";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Loader
        loaderSize="loading-lg"
        loaderColor="text-primary"
        loaderVariant="loading-spinner"
      />
    </div>
  );
};

export default LoadingScreen;
