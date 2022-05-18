import AppRoutes from '../routes/AppRoutes';
import './App.css'
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import ToastMessage from './ToastMessage/ToastMessage';




const App = () => {

  return (
    <>
      <Navigation />

      <AppRoutes />
      <Footer />

      <ToastMessage />
    </>
  );
}

export default App