import { useGetUsersQuery } from "../redux/api/apiRedux";

interface CepComponentProps {
  cepApi: string;
}

interface DataProps {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
}

const CepComponent = ({ cepApi }: CepComponentProps) => {
  // Use a more descriptive name for the data returned by the query.
  const { data: responseData, error, isLoading } = useGetUsersQuery(cepApi);

  // Check if data is loading or if there's an error.
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Check if there's data before rendering it.
  if (!responseData) {
    return null;
  }

  // Destructure the data properties.
  const { cep, logradouro, complemento, bairro, localidade, uf, ibge } =
    responseData as DataProps;

  return (
    <ul>
      <li>CEP: {cep}</li>
      <li>Logradouro: {logradouro}</li>
      <li>Complemento: {complemento}</li>
      <li>Bairro: {bairro}</li>
      <li>Localidade: {localidade}</li>
      <li>UF: {uf}</li>
      <li>IBGE: {ibge}</li>
    </ul>
  );
};

export default CepComponent;
