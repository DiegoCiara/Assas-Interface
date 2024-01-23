import { useEffect, useState } from 'react'
import './App.css'
import ClientForm from './ClientForm'
import PaymentForm from './PaymentForm'

function App() {


  const [customerId, setCustomerId] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [step, setStep] = useState(0)


  useEffect(()=>{console.log(customerId)},[customerId])

  function Seasons(){

    switch (step) {
      case 0:
        return <ClientForm setCustomer={setCustomerId} setCustomerName={setCustomerName} setStep={setStep}/>
        break;
      case 1:
          return <PaymentForm clientId={customerId} customerName={customerName}/> 
        break
      default:
        break;
    }

  }

  return (
    <>
      {Seasons()}
    </>
  )
}

export default App
