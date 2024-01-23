// ClientForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toast';

const ClientForm = ({ setCustomer, setStep, setCustomerName }) => {
    const [clientData, setClientData] = useState({
        name: '',
        cpfCnpj: '',
        email: '',
        // outros campos necessários
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register-client', clientData);
            console.log(response);
            if(response.status == 200){
              toast.success('Cliente cadastrado com sucesso', {
                position: "top-right",
                autoClose: 3000, // Fecha após 3 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
              setCustomer(response.data.id)
              setCustomerName(response.data.name)
              setStep(1)
              setClientData({
                name: '',
                cpfCnpj: '',
                email: '',
              })
            }
        } catch (error) {
          toast.error('Ops, tente novamente mais tarde')
            console.error(error);
        }
    };

    return (
      <>
      <ToastContainer position="top-right" autoClose={true} hideProgressBar={false}/>
        <form onSubmit={handleSubmit}>
          <h2>Cadastro de cliente</h2>
            <input type="text" value={clientData.name} onChange={(e) => setClientData({...clientData, name: e.target.value})} placeholder="Nome" />
            <input type="text" value={clientData.cpfCnpj} onChange={(e) => setClientData({...clientData, cpfCnpj: e.target.value})} placeholder="CPF ou CNPJ" />
            <input type="email" value={clientData.email} onChange={(e) => setClientData({...clientData, email: e.target.value})} placeholder="Email" />
            <button type="submit">Cadastrar</button>
        </form>
      </>
    );
};

export default ClientForm;
