import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';

export default function Home() {
    const router = useRouter();

    return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/rebanhologo.png')} // ajuste se o caminho for diferente
           style={styles.logo}
        />
         <Text style={[styles.headerTitle,] }>AGROPLAN</Text>
       </View>


    <View style={styles.separator} />


      {/* Introdução */}
      <View style={styles.home}>
        <ImageBackground
          source={require('../../assets/images/Tela Inicial (1).png')}
          style={styles.intro}
          resizeMode="cover"
        >
        <Text style={[styles.introTitle, { color: "white" }]}>
          Otimizando o{'\n'}planejamento
        </Text>
        <Text style={[styles.introText, { color: "white" }]}>
          Transforme sua gestão: planeja a evolução do seu rebanho e a necessidade alimentar de forma simples
        </Text>
        <Link href="src/formularioScreen" style={styles.button} asChild>
          <Text style={styles.buttonText}>Fazer simulação</Text>
        </Link>
        </ImageBackground>
      </View>


      {/* Objetivo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>OBJETIVO</Text>
        <Text style={styles.sectionText}>
          Buscamos auxiliar os produtores rurais a enfrentarem os desafios das variações sazonais na disponibilidade de forragem e da falta de assistência técnica. A ferramenta visa otimizar o planejamento forrageiro, reduzindo desperdícios e aumentando a produtividade, por meio do registro contínuo de dados sobre peso, idade e consumo alimentar dos animais.        
        </Text>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Saiba Mais</Text>
        </TouchableOpacity></View>

        <View style={styles.gridContainer}>
          <View style={styles.row}>
            <Image source={require('../../assets/images/bode1.jpeg')} style={styles.gridImage} />
            <Image source={require('../../assets/images/bode5.jpeg')} style={styles.gridImage} />
          </View>
          <View style={styles.row}>
            <Image source={require('../../assets/images/bode3.jpeg')} style={styles.gridImage} />
            <Image source={require('../../assets/images/bode4.jpeg')} style={styles.gridImage} />
          </View>
        </View>
      </View>


      {/* Benefícios */}
      <View style={[styles.section2, { backgroundColor: '#2E8957' }]}>
        <Text style={[styles.sectionTitle, { color: '#fff' }]}>Benefícios para o Criador</Text>

        <View style={styles.card}>
          <Ionicons name="stopwatch-sharp" size={28} color="#FFD700" />
          <Text style={styles.cardTitle}>Economia de tempo</Text>
          <Text style={styles.cardText}>
           O sistema automatiza cálculos da evolução do rebanho e da necessidade de alimentação a partir dos dados inseridos, permitindo ao criador concentrar-se em outras atividades e agilizar sua rotina.      
          </Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="sync-circle-sharp" size={28} color="#FFD700" />
          <Text style={styles.cardTitle}>Retorno Econômico</Text>
          <Text style={styles.cardText}>
            Planejando adequadamente a necessidade de alimentos, o produtor consegue produzir ou adquirir os insumos necessários no momento de baixo custo e armazenar para o ano todo.          
          </Text> 
        </View>

        <View style={styles.card}>
          <Ionicons name="heart-circle" size={28} color="#FFD700"/>
          <Text style={styles.cardTitle}>Bem-Estar Animal</Text>
          <Text style={styles.cardText}>
            Com dietas adaptadas para cada grupo de animais, o sistema ajuda a prevenir doenças e melhorar a imunidade, promovendo um crescimento saudável e evitando problemas comuns, como subalimentação ou excesso de nutrientes.          
          </Text>
        </View>
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
    backgroundColor: '#fff' },

  //header
  header: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },

  logo: { 
    width: 60, 
    height: 45, 
    marginRight: 10, },

  headerTitle: { 
    fontSize: 12, 
    fontWeight: 'bold', 
    color: '#2E8957' },

  separator: {
  height: 4,
  backgroundColor: '#2E8957',
  width: '100%',
},


  //introdução
  home: {
    flex: 1,
    justifyContent: 'center',
  },

  intro: {
    height: 450, 
    justifyContent: 'center',  
    alignItems: 'center',     
    width: '100%',
  },

  introTitle: { 
    textAlign: 'center', 
    fontSize: 50, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },

  introText: { 
    textAlign: 'center', 
    fontSize: 20, 
    marginBottom: 20, 
    marginHorizontal: 20, 
    marginTop: 10 
  },

  button: {
    backgroundColor: '#ffc107',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
  },
  

  //objetivo
  section: { 
    padding: 20 
  },

  sectionTitle: { 
    fontSize: 35, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    textAlign: 'center' 
  },  

  sectionText: { 
    fontSize: 20, 
    textAlign: 'justify', 
    marginBottom: 20 
  },

  button2: {
  backgroundColor: '#2E8957',
  paddingVertical: 10,
  paddingHorizontal: 25,
  borderRadius: 10,
  marginBottom: 20,
  alignSelf: 'center',
  maxWidth: 200,
  },

  buttonText2:{
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

gridContainer: {
  marginTop: 10,
  alignItems: 'center',
},

row: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: 10,
},

gridImage: {
  width: 160,
  height: 160,
  marginHorizontal: 8,
  borderRadius: 5,
  resizeMode: 'cover',
},


//benefícios
 section2: {
  padding: 20,
  backgroundColor: '#2E8957',
  alignItems: 'center',
},

card: {
  borderColor: '#fff',
  borderWidth: 2, 
  borderStyle: 'dotted',
  borderRadius: 8,
  padding: 16,
  marginBottom: 16,
  width: '100%',
  },

cardTitle: { fontWeight: 'bold',
  fontSize: 20,
  color: '#fff',
  marginTop: 8,
  marginBottom: 6,},
  cardText: {
   fontSize: 16,
  color: '#fff',
  textAlign: 'justify', 
},

  //rodape
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

footer2: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: 30, // mais espaço entre as imagens (caso não funcione, veja alternativa abaixo)
},

footerImage: {
  width: 180, // imagem maior
  height: 80,
  resizeMode: 'contain',
},

});
