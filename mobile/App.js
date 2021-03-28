import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text } from 'react-native';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import CustomPicker from './CustomPicker';
import Api from './services/Api';

export default function App() {
  const [nome, setNome] = useState('')
  const [cpf, setCPF] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [grupo, setGrupo] = useState(null)
  const [grupos, setGrupos] = useState([])

  useEffect(() => {
    async function listarGrupos() {
      try {
        const grupos = await Api.listarGrupos()
        setGrupos(grupos.data)

      } catch (error) {
        Alert.alert("Erro!")
        console.log(error)
      }
    }
    listarGrupos()
  }, []);

  const handleCadastrarBtn = () => {
    const pessoa = {
      nome,
      cpf,
      telefone,
      email,
      idade,
      dataNascimento,
      grupo: {
        codigo: grupo
      },
    }
    Api.cadastrarPessoa(pessoa)
      .then(() => Alert.alert("Cadastrado!"))
      .catch((error) => { Alert.alert("Erro!"), console.log(error) })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>eVaccine</Text>
      <CustomInput placeholder="Nome" value={nome} setValue={setNome} />
      <CustomInput placeholder="CPF" type="number-pad" value={cpf} setValue={setCPF} />
      <CustomInput placeholder="Telefone" type="number-pad" value={telefone} setValue={setTelefone} />
      <CustomInput placeholder="E-mail" type="email-address" value={email} setValue={setEmail} />
      <CustomInput placeholder="Idade" type="numeric" value={idade} setValue={setIdade} />
      <CustomInput placeholder="Data de Nascimento" type="number-pad" value={dataNascimento} setValue={setDataNascimento} />
      {
        grupos.length ?
          <CustomPicker label="Código do Grupo" array={grupos} value={grupo} setValue={setGrupo} />
          :
          <Text>Não há Grupos</Text>
      }
      <CustomButton title="CADASTRAR" onPress={handleCadastrarBtn} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    color: "#009688",
    marginVertical: 0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 10
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 8
  }
});
