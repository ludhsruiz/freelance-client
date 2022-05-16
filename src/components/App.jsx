import AppRoutes from '../routes/AppRoutes';
import './App.css'
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import StripeContainer from '../components/Stripe/StripeContainer'


const App = () => {

  return (
    <>
      <Navigation />
      <AppRoutes />
      <StripeContainer />
      <Footer />
    </>
  );
}

export default App