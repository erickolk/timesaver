import axios from "axios";

export const createService = async (params: any) => {
  try {
    // Enviar os dados para a fake API
    const response = await axios.post("http://localhost:3000/servicos", {
      servico: params.servico,
      descricao: params.descricao,
    });
    return response;

    console.log("Serviço cadastrado com sucesso!", response.data);
  } catch (error) {
    console.error("Erro ao cadastrar serviço:", error);
  }
};
