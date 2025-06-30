import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type RootStackParamList = {
  FormularioScreen: undefined;
  tabelasScreen: { 
    femaleInput: string;
    maxFemaleInput: string;
    maleFemaleInput: string;
    partosPorAnoInput: string;
    prolificidadeInput: string;
    fertilidadeInput: string;
    mortalidade1AnoInput: string;
    mortalidadeInput: string;
    idadeDesmameInput: string;
    pesoAbateInput: string;
    pesoMedioMatrizInput: string;
    pesoMedioBorregaInput: string;
    pesoMedioReprodutorInput: string;
    descarteInput: string;
    crescimentoInput: string;
    custeioInput: string;
    precoKgInput: string;
    custeioTotalInput: string;
    FmateriaSecaInput: string;
    MmateriaSecaInput: string;
    BmateriaSecaInput: string;
    BA1materiaSecaInput: string;
    BA2materiaSecaInput: string;
    FdiasSuplementosInput: string;
    MdiasSuplementosInput: string;
    BdiasSuplementosInput: string;
    BA1diasSuplementosInput: string;
    BA2diasSuplementosInput: string;
    FvolumosoInput: string;
    MvolumosoInput: string;
    BvolumosoInput: string;
    BA1volumosoInput: string;
    BA2volumosoInput: string;
    FmateriaSeca_volumosoInput: string;
    MmateriaSeca_volumosoInput: string;
    BmateriaSeca_volumosoInput: string;
    BA1materiaSeca_volumosoInput: string;
    BA2materiaSeca_volumosoInput: string;
    FmateriaSeca_concentradoInput: string;
    MmateriaSeca_concentradoInput: string;
    BmateriaSeca_concentradoInput: string;
    BA1materiaSeca_concentradoInput: string;
    BA2materiaSeca_concentradoInput: string;
    anosSimuladosInput: string;
  };
};

export default function Formulario() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    femaleInput: '',
    maxFemaleInput: '',
    maleFemaleInput: '',
    partosPorAnoInput: '',
    prolificidadeInput: '',
    fertilidadeInput: '',
    mortalidade1AnoInput: '',
    mortalidadeInput: '',
    idadeDesmameInput: '',
    pesoAbateInput: '',
    pesoMedioMatrizInput: '',
    pesoMedioBorregaInput: '',
    pesoMedioReprodutorInput: '',
    descarteInput: '',
    crescimentoInput: '',
    custeioInput: '',
    precoKgInput: '',
    custeioTotalInput: '',
    FmateriaSecaInput: '',
    MmateriaSecaInput: '',
    BmateriaSecaInput: '',
    BA1materiaSecaInput: '',
    BA2materiaSecaInput: '',
    FdiasSuplementosInput: '',
    MdiasSuplementosInput: '',
    BdiasSuplementosInput: '',
    BA1diasSuplementosInput: '',
    BA2diasSuplementosInput: '',
    FvolumosoInput: '',
    MvolumosoInput: '',
    BvolumosoInput: '',
    BA1volumosoInput: '',
    BA2volumosoInput: '',
    FmateriaSeca_volumosoInput: '',
    MmateriaSeca_volumosoInput: '',
    BmateriaSeca_volumosoInput: '',
    BA1materiaSeca_volumosoInput: '',
    BA2materiaSeca_volumosoInput: '',
    FmateriaSeca_concentradoInput: '',
    MmateriaSeca_concentradoInput: '',
    BmateriaSeca_concentradoInput: '',
    BA1materiaSeca_concentradoInput: '',
    BA2materiaSeca_concentradoInput: '',
    anosSimuladosInput: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev: typeof formData) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Validar se todos os campos obrigatórios estão preenchidos
    const requiredFields = [
      'femaleInput', 'maxFemaleInput', 'maleFemaleInput', 'partosPorAnoInput',
      'prolificidadeInput', 'fertilidadeInput', 'mortalidade1AnoInput', 'mortalidadeInput',
      'idadeDesmameInput', 'pesoAbateInput', 'pesoMedioMatrizInput', 'pesoMedioBorregaInput',
      'pesoMedioReprodutorInput', 'descarteInput', 'crescimentoInput', 'custeioInput',
      'precoKgInput', 'custeioTotalInput', 'anosSimuladosInput'
    ];

    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // Navegar para a tela de tabelas com os dados
    router.push({
      pathname: '/src/tabelasScreen',
      params: formData
    });
  };

  return (
    <ScrollView style={styles.container}
      contentContainerStyle={{ paddingBottom: 80 }}
      keyboardShouldPersistTaps="handled"
    >

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image source={require('../../assets/images/rebanhologo.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>  
          AGROPLAN</Text>
      </View>

      <View style={styles.separator}/>

      <View style={styles.formBox} >
        <Text style={styles.title}>Preencha os dados</Text>

        {/* Dados */}
        <View>
          <Text style={styles.label}>Fêmeas Iniciais:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.femaleInput} onChangeText={(value) => handleChange('femaleInput', value)} />
        </View>

        <View>
          <Text style={styles.label}>Máximo de Fêmeas:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.maxFemaleInput} onChangeText={(value) => handleChange('maxFemaleInput', value)} />
        </View>

        <View>
          <Text style={styles.label}>Fêmea : Macho:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.maleFemaleInput} onChangeText={(value) => handleChange('maleFemaleInput', value)} />
        </View>

        <View>
          <Text style={styles.label}>Partos por ano:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.partosPorAnoInput} onChangeText={(value) => handleChange('partosPorAnoInput', value)} />
        </View>

        <View>
          <Text style={styles.label}>Prolificidade:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.prolificidadeInput} onChangeText={(value) => handleChange('prolificidadeInput', value)} />
        </View>

        <View>
          <Text style={styles.label}>% Fertilidade:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.fertilidadeInput} onChangeText={(value) => handleChange('fertilidadeInput', value)} />
        </View>

        <View>
          <Text style={styles.label}>% Mortalidade acima de 1 ano:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.mortalidadeInput} onChangeText={(value) => handleChange('mortalidadeInput', value)} />
        </View>

        <View>
          <Text style={styles.label}>% Mortalidade de ate um ano:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.mortalidade1AnoInput} onChangeText={(value) => handleChange('mortalidade1AnoInput', value)} />
        </View>


        {/* Pesagem */}
        <Text style={styles.title}>Pesagens</Text>

        <View >
          <Text style={styles.label}>Peso de desmame:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.idadeDesmameInput} onChangeText={(value) => handleChange('idadeDesmameInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Peso de abate:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.pesoAbateInput} onChangeText={(value) => handleChange('pesoAbateInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Peso médio matriz:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.pesoMedioMatrizInput} onChangeText={(value) => handleChange('pesoMedioMatrizInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Peso médio borrega de reposição:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.pesoMedioBorregaInput} onChangeText={(value) => handleChange('pesoMedioBorregaInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Peso médio reprodutor:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.pesoMedioReprodutorInput} onChangeText={(value) => handleChange('pesoMedioReprodutorInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% do descarte de matrizes:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.descarteInput} onChangeText={(value) => handleChange('descarteInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Crescimento do rebanho:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.crescimentoInput} onChangeText={(value) => handleChange('crescimentoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% do custeio:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.custeioInput} onChangeText={(value) => handleChange('custeioInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Preço por Kg do borrego:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.precoKgInput} onChangeText={(value) => handleChange('precoKgInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% do custeio total:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.custeioTotalInput} onChangeText={(value) => handleChange('custeioTotalInput', value)} />
        </View>


        {/* Consumo Materia Seca */}
        <Text style={styles.title}>Consumo de matéria seca</Text>

        <View >
          <Text style={styles.label}>Consumo de matéria seca Fêmeas (% do peso vivo):</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.FmateriaSecaInput} onChangeText={(value) => handleChange('FmateriaSecaInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Consumo de matéria seca Machos (% do peso vivo):</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.MmateriaSecaInput} onChangeText={(value) => handleChange('MmateriaSecaInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Consumo de matéria seca Borregos (%do peso vivo):</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BmateriaSecaInput} onChangeText={(value) => handleChange('BmateriaSecaInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Consumo de matéria seca para as borregas no período 1 (% do peso vivo):</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BA1materiaSecaInput} onChangeText={(value) => handleChange('BA1materiaSecaInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Consumo de matéria seca para as borregas de reposição:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BA2materiaSecaInput} onChangeText={(value) => handleChange('BA2materiaSecaInput', value)} />
        </View>


        {/* Dias Suplentados */}
        <Text style={styles.title}>Dias suplementados</Text>

        <View >
          <Text style={styles.label}>Número de dias em que as fêmeas serão suplementadas:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.FdiasSuplementosInput} onChangeText={(value) => handleChange('FdiasSuplementosInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Números de dias em que os machos serão suplementados:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.MdiasSuplementosInput} onChangeText={(value) => handleChange('MdiasSuplementosInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Número de dias em que os borregos serão suplementados:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BdiasSuplementosInput} onChangeText={(value) => handleChange('BdiasSuplementosInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Número de dias em que as borregas serão suplementadas no período 1:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BA1diasSuplementosInput} onChangeText={(value) => handleChange('BA1diasSuplementosInput', value)} />
        </View>


        <View >
          <Text style={styles.label}>Números de dias em que as borregas de reposição serão suplementadas:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BA2diasSuplementosInput} onChangeText={(value) => handleChange('BA2diasSuplementosInput', value)} />
        </View>
        

        {/* Volumoso na dieta */}
        <Text style={styles.title}>% de volumoso na dieta</Text>

        <View >
          <Text style={styles.label}>% de volumoso na dieta das fêmeas:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.FvolumosoInput} onChangeText={(value) => handleChange('FvolumosoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% de volumoso na dieta dos machos:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.MvolumosoInput} onChangeText={(value) => handleChange('MvolumosoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% de volumoso na dieta dos borregos:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BvolumosoInput} onChangeText={(value) => handleChange('BvolumosoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% de volumoso na dieta das borregas no período 1:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BA1volumosoInput} onChangeText={(value) => handleChange('BA1volumosoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% de volumoso na dieta das borregas no período 2:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BA2volumosoInput} onChangeText={(value) => handleChange('BA2volumosoInput', value)} />
        </View>


        {/* Materia Seca Volumosos */}
        <Text style={styles.title}>% de matéria seca do volumoso</Text>

        <View >
          <Text style={styles.label}>% de matéria seca do volumoso na dieta das fêmeas:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.FmateriaSeca_volumosoInput} onChangeText={(value) => handleChange('FmateriaSeca_volumosoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% de matéria seca do volumoso na dieta dos machos:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.MmateriaSeca_volumosoInput} onChangeText={(value) => handleChange('MmateriaSeca_volumosoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% de matéria seca do volumoso na dieta dos borregos:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BmateriaSeca_volumosoInput} onChangeText={(value) => handleChange('BmateriaSeca_volumosoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% de matéria seca do volumoso na dieta das borregas no período 1:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BA1materiaSeca_volumosoInput} onChangeText={(value) => handleChange('BA1materiaSeca_volumosoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% de matéria seca do volumoso na dieta das borregas de reposição:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BA2materiaSeca_volumosoInput} onChangeText={(value) => handleChange('BA2materiaSeca_volumosoInput', value)} />
        </View>


        {/* Materia Seca Concentrado */}
        <Text style={styles.title}>% de matéria seca do concentrado</Text>

        <View >
          <Text style={styles.label}>% de matéria seca do concentrado na dieta das fêmeas:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.FmateriaSeca_concentradoInput} onChangeText={(value) => handleChange('FmateriaSeca_concentradoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% de matéria seca do concentrado na dieta dos machos:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.MmateriaSeca_concentradoInput} onChangeText={(value) => handleChange('MmateriaSeca_concentradoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% de matéria seca do concentrado na dieta dos borregos:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BmateriaSeca_concentradoInput} onChangeText={(value) => handleChange('BmateriaSeca_concentradoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% de matéria seca do concentrado na dieta das borregas no período 1:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BA1materiaSeca_concentradoInput} onChangeText={(value) => handleChange('BA1materiaSeca_concentradoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>% de matéria seca do concentrado na dieta das borregas de reposição:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.BA2materiaSeca_concentradoInput} onChangeText={(value) => handleChange('BA2materiaSeca_concentradoInput', value)} />
        </View>

        <View >
          <Text style={styles.label}>Quantidade de anos que serão simulados:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={formData.anosSimuladosInput} onChangeText={(value) => handleChange('anosSimuladosInput', value)} />
        </View>
      

        {/* Botão Enviar */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <View style={styles.footer2}>
          <Image
            source={require('../../assets/images/logos-ifce-cits.png')}
            style={styles.footerImage}
          />
          <Image
            source={require('../../assets/images/logos-gov-midr.png')}
            style={styles.footerImage}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    paddingBottom: 20, 
    backgroundColor: '#eee' },
 
//header
  header: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },

  logo: {
    width: 60,
    height: 45,
    marginRight: 10,
    },

  headerTitle: {
    fontSize: 12,
     fontWeight: 'bold',
      color: '#2E8957' 
    },

    separator: {
    height: 4,
    backgroundColor: '#2E8957',
    width: '100%',
    },

//formulario
  formBox: {
    margin: 16,
    borderWidth: 2,
    borderColor: '#2E8957',
    borderRadius: 15,
    padding: 16,
    backgroundColor: '#fff',
  },

  title: { 
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12,
 },

  label: { 
    marginTop: 10, 
    fontSize: 16, 
    marginBottom: 5, 
},

  input: {
    borderWidth: 1.5,
    borderColor: '#aaa',
    padding: 15,
    borderRadius: 6,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#2E8957',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },

  buttonText: { 
    color: '#00000', 
    fontWeight: 'bold' 
},
  
footer: {
  backgroundColor: '#f8f9fa',
  paddingVertical: 20,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: -2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 2.84,
  elevation: 3,
},

//footer
footer2: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: 30, 
},

footerImage: {
  width: 180, // imagem maior
  height: 80,
  resizeMode: 'contain',
},
});

