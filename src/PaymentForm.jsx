import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toast';

const PaymentForm = ({ clientId, customerName }) => {
  const [paymentData, setPaymentData] = useState({
      customerId: clientId,
      value: '',
      dueDate: ''
  });

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:3000/create-payment', paymentData);
          if (response.status === 200) {
              toast.success('Cobrança criada com sucesso!');
          }
      } catch (error) {
          toast.error('Erro ao criar cobrança');
      }
  };

  return (
      <>
          <ToastContainer  position="top-right" autoClose={true} hideProgressBar={false}/>
          <form onSubmit={handleSubmit}>
             <h2>Cobrança</h2>
             <b>Cliente</b>
              <span>{customerName}</span>
              <input type="number" value={paymentData.value} onChange={(e) => setPaymentData({...paymentData, value: e.target.value})} placeholder="Valor" />
              <input type="date" value={paymentData.dueDate} onChange={(e) => setPaymentData({...paymentData, dueDate: e.target.value})} placeholder="Data de Vencimento" />
              <button type="submit">Criar Cobrança</button>
          </form>
      </>
  );
};

export default PaymentForm;
