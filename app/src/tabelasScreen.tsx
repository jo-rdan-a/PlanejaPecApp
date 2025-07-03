import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { processarDadosFormulario } from '../../utils';
import { Concentrado, ConcentradoSeca, consumo, Volumoso, VolumosoSeca } from '../../utils/add';
//ts-ignore

export default function Tabelas() {
  const params = useLocalSearchParams();
  const [controlador, setControlador] = useState(0);
  const [numAnosSimulados, setNumAnosSimulados] = useState(1);
  const [dadosSimulados, setDadosSimulados] = useState<any>(null);

  useEffect(() => {
    if (params) {
      const anosSimulados = parseFloat(params.anosSimuladosInput as string);
      setNumAnosSimulados(anosSimulados);
      const resultado = processarDadosFormulario(params as Record<string, any>);
      setDadosSimulados(resultado);
      setControlador(0);
    }
  }, [params]);

  // Função para mostrar informações do ano atual
  function mostrarInformacoes(ano: number) {
    if (!dadosSimulados) return;
    console.log(`Ano ${ano + 1}`);
    console.log('Fêmeas:', dadosSimulados.quantidade.femeas[ano]);
    console.log('Reprodução:', dadosSimulados.nascimentos.femeas[ano]);
    console.log('Descarte:', dadosSimulados.descartes.femeas[ano]);
  }

  // Função centralizada para atualizar o ano simulado
  const handleChangeYear = (novoAno: number) => {
    if (novoAno >= 0 && novoAno < numAnosSimulados) {
      setControlador(novoAno);
      mostrarInformacoes(novoAno);
    }
  };

  // Funções para navegar entre os anos
  const handlePreviousYear = () => {
    handleChangeYear(controlador - 1);
  };

  const handleNextYear = () => {
    handleChangeYear(controlador + 1);
  };

  // Função para obter dados do ano atual
  const getCurrentYearData = () => {
    if (!dadosSimulados || !dadosSimulados.quantidade.femeas[controlador] && controlador !== 0) {
      console.warn(`Dados para o ano ${controlador} não encontrados.`);
      return null;
    }
    return {
      machos: dadosSimulados.quantidade.machos[controlador] || 0,
      femeas: dadosSimulados.quantidade.femeas[controlador] || 0,
      nascimentos: dadosSimulados.nascimentos.total[controlador] || 0,
      perdas: dadosSimulados.perdas.femeas[controlador] || 0,
      perdas_1_ano: dadosSimulados.perdas.borregos[controlador] || 0,
      descartes: dadosSimulados.descartes.femeas[controlador] || 0,
      reposicao_machos: dadosSimulados.reposicao.machos[controlador] || 0,
      reposicao_femeas: dadosSimulados.reposicao.borregas[controlador] || 0,
      vendas_machos: dadosSimulados.vendas.borregos[controlador] || 0,
      vendas_femeas: dadosSimulados.vendas.borregas[controlador] || 0,
      compras_machos: dadosSimulados.compras.borregos[controlador] || 0,
      compras_femeas: dadosSimulados.compras.borregas[controlador] || 0,
      machos_Final: dadosSimulados.quantidade.machos[controlador] || 0,
      femeas_Final: dadosSimulados.estoqueFinal.femeas[controlador] || 0,
      reposicaoF_Final: dadosSimulados.reposicao.borregas[controlador] || 0,
      peso_MedioM: dadosSimulados.peso.machos[controlador] || 0,
      peso_medioF: dadosSimulados.peso.femeas[controlador] || 0,
      peso_total: dadosSimulados.peso.total[controlador] || 0,
      EUA_machos: dadosSimulados.Eua.machos[controlador] || 0,
      EUA_femeas: dadosSimulados.Eua.femeas[controlador] || 0,
      EUA_total: dadosSimulados.Eua.total[controlador] || 0,
      receita: dadosSimulados.receita[controlador] || 0
    };
  };

  const currentData = getCurrentYearData();
// Carregamento
  if (!currentData) {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/rebanhologo.png')} style={styles.logo} />
          <Text style={styles.headerTitle}>PLANEJA PEC</Text>
      </View>
    );
  }

  if (!currentData || (numAnosSimulados > 0 && !dadosSimulados.quantidade.femeas[0])) {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/rebanhologo.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>PLANEJA PEC</Text>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Carregando simulação...</Text>
      </View>
    );
  }

  const {
    machos, femeas, nascimentos, perdas, perdas_1_ano, descartes,
    reposicao_machos, reposicao_femeas, vendas_machos, vendas_femeas,
    compras_machos, compras_femeas, machos_Final, femeas_Final,
    reposicaoF_Final, peso_MedioM, peso_medioF, peso_total,
    EUA_machos, EUA_femeas, EUA_total, receita
  } = currentData;

  // Função utilitária para proteger o uso de .toFixed
  function safeFixed(value: any, digits = 2) {
    return (typeof value === 'number' && !isNaN(value)) ? value.toFixed(digits) : '0.00';
  }

  // Consumo
  const consumoF = consumo.femeas[controlador] || 0;
  const consumoFR = consumo.femeas_reb[controlador] || 0;
  const consumoFP = consumo.femeas_per[controlador] || 0;
  const consumoM = consumo.machos[controlador] || 0;
  const consumoMR = consumo.machos_reb[controlador] || 0;
  const consumoMP = consumo.machos_per[controlador] || 0;
  const consumoB = consumo.borregos[controlador] || 0;
  const consumoBR = consumo.borregos_reb[controlador] || 0;
  const consumoBP = consumo.borregos_per[controlador] || 0;
  const consumoBA1 = consumo.borregas1[controlador] || 0;
  const consumoBA1R = consumo.borregas1_reb[controlador] || 0;
  const consumoBA1P = consumo.borregas1_per[controlador] || 0;
  const consumoBA2 = consumo.borregas2[controlador] || 0;
  const consumoBA2R = consumo.borregas2_reb[controlador] || 0;
  const consumoBA2P = consumo.borregas2_per[controlador] || 0;
  const consumoT = consumo.total[controlador] || 0;
  const consumoTR = consumo.total_reb[controlador] || 0;
  const consumoTP = consumo.total_per[controlador] || 0;

  // Volumoso
  const volumosoF = Volumoso.femeas[controlador] || 0;
  const volumosoFR = Volumoso.femeas_reb[controlador] || 0;
  const volumosoFP = Volumoso.femeas_per[controlador] || 0;
  const volumosoM = Volumoso.machos[controlador] || 0;
  const volumosoMR = Volumoso.machos_reb[controlador] || 0;
  const volumosoMP = Volumoso.machos_per[controlador] || 0;
  const volumosoB = Volumoso.borregos[controlador] || 0;
  const volumosoBR = Volumoso.borregos_reb[controlador] || 0;
  const volumosoBP = Volumoso.borregos_per[controlador] || 0;
  const volumosoBA1 = Volumoso.borregas1[controlador] || 0;
  const volumosoBA1R = Volumoso.borregas1_reb[controlador] || 0;
  const volumosoBA1P = Volumoso.borregas1_per[controlador] || 0;
  const volumosoBA2 = Volumoso.borregas2[controlador] || 0;
  const volumosoBA2R = Volumoso.borregas2_reb[controlador] || 0;
  const volumosoBA2P = Volumoso.borregas2_per[controlador] || 0;
  const volumosoT = Volumoso.total[controlador] || 0;
  const volumosoTR = Volumoso.total_reb[controlador] || 0;
  const volumosoTP = Volumoso.total_per[controlador] || 0;

  // Volumoso Seca
  const volumosoSecaF = VolumosoSeca.femeas[controlador] || 0;
  const volumosoSecaFR = VolumosoSeca.femeas_reb[controlador] || 0;
  const volumosoSecaFP = VolumosoSeca.femeas_per[controlador] || 0;
  const volumosoSecaM = VolumosoSeca.machos[controlador] || 0;
  const volumosoSecaMR = VolumosoSeca.machos_reb[controlador] || 0;
  const volumosoSecaMP = VolumosoSeca.machos_per[controlador] || 0;
  const volumosoSecaB = VolumosoSeca.borregos[controlador] || 0;
  const volumosoSecaBR = VolumosoSeca.borregos_reb[controlador] || 0;
  const volumosoSecaBP = VolumosoSeca.borregos_per[controlador] || 0;
  const volumosoSecaBA1 = VolumosoSeca.borregas1[controlador] || 0;
  const volumosoSecaBA1R = VolumosoSeca.borregas1_reb[controlador] || 0;
  const volumosoSecaBA1P = VolumosoSeca.borregas1_per[controlador] || 0;
  const volumosoSecaBA2 = VolumosoSeca.borregas2[controlador] || 0;
  const volumosoSecaBA2R = VolumosoSeca.borregas2_reb[controlador] || 0;
  const volumosoSecaBA2P = VolumosoSeca.borregas2_per[controlador] || 0;
  const volumosoSecaT = VolumosoSeca.total[controlador] || 0;
  const volumosoSecaTR = VolumosoSeca.total_reb[controlador] || 0;
  const volumosoSecaTP = VolumosoSeca.total_per[controlador] || 0;

  // Concentrado
  const concentradoF = Concentrado.femeas[controlador] || 0;
  const concentradoFR = Concentrado.femeas_reb[controlador] || 0;
  const concentradoFP = Concentrado.femeas_per[controlador] || 0;
  const concentradoM = Concentrado.machos[controlador] || 0;
  const concentradoMR = Concentrado.machos_reb[controlador] || 0;
  const concentradoMP = Concentrado.machos_per[controlador] || 0;
  const concentradoB = Concentrado.borregos[controlador] || 0;
  const concentradoBR = Concentrado.borregos_reb[controlador] || 0;
  const concentradoBP = Concentrado.borregos_per[controlador] || 0;
  const concentradoBA1 = Concentrado.borregas1[controlador] || 0;
  const concentradoBA1R = Concentrado.borregas1_reb[controlador] || 0;
  const concentradoBA1P = Concentrado.borregas1_per[controlador] || 0;
  const concentradoBA2 = Concentrado.borregas2[controlador] || 0;
  const concentradoBA2R = Concentrado.borregas2_reb[controlador] || 0;
  const concentradoBA2P = Concentrado.borregas2_per[controlador] || 0;
  const concentradoT = Concentrado.total[controlador] || 0;
  const concentradoTR = Concentrado.total_reb[controlador] || 0;
  const concentradoTP = Concentrado.total_per[controlador] || 0;

  // Concentrado Seca
  const concentradoSecaF = ConcentradoSeca.femeas[controlador] || 0;
  const concentradoSecaFR = ConcentradoSeca.femeas_reb[controlador] || 0;
  const concentradoSecaFP = ConcentradoSeca.femeas_per[controlador] || 0;
  const concentradoSecaM = ConcentradoSeca.machos[controlador] || 0;
  const concentradoSecaMR = ConcentradoSeca.machos_reb[controlador] || 0;
  const concentradoSecaMP = ConcentradoSeca.machos_per[controlador] || 0;
  const concentradoSecaB = ConcentradoSeca.borregos[controlador] || 0;
  const concentradoSecaBR = ConcentradoSeca.borregos_reb[controlador] || 0;
  const concentradoSecaBP = ConcentradoSeca.borregos_per[controlador] || 0;
  const concentradoSecaBA1 = ConcentradoSeca.borregas1[controlador] || 0;
  const concentradoSecaBA1R = ConcentradoSeca.borregas1_reb[controlador] || 0;
  const concentradoSecaBA1P = ConcentradoSeca.borregas1_per[controlador] || 0;
  const concentradoSecaBA2 = ConcentradoSeca.borregas2[controlador] || 0;
  const concentradoSecaBA2R = ConcentradoSeca.borregas2_reb[controlador] || 0;
  const concentradoSecaBA2P = ConcentradoSeca.borregas2_per[controlador] || 0;
  const concentradoSecaT = ConcentradoSeca.total[controlador] || 0;
  const concentradoSecaTR = ConcentradoSeca.total_reb[controlador] || 0;
  const concentradoSecaTP = ConcentradoSeca.total_per[controlador] || 0;

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
        <View style={styles.header}>
          <Image source={require('../../assets/images/rebanhologo.png')} style={styles.logo} />
          <Text style={styles.headerTitle}>PLANEJA PEC</Text>
        </View>

      <View style={styles.separator} />
      
      {/* Tabelas */}
      <View style={styles.tabelaContainer}>
        
        {/* TABELA 1 */}
        {/* DISTRIBUIÇÃO DO REBANHO */}
        <View style={styles.tabelaWrapper}>
          <Text style={styles.tituloTabela}>Distribuição do Rebanho</Text>

          <View style={styles.tabela}>
            {/* Cabeçalho */}
            <View style={styles.linhaHorizontal}>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text></Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Machos</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Fêmeas</Text> </View>
            </View>

            {/* Rebanho */}
            <View style={[styles.linhaHorizontal, ]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Rebanho</Text></View>
              <View style={styles.celulaQuadrada}><Text>{machos}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{femeas}</Text></View>
            </View>

            {/* Nascimentos */}
            <View style={styles.linhaHorizontal}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Nascimentos</Text></View>
              <View style={styles.celulaQuadrada}><Text>{dadosSimulados.nascimentos.machos[controlador]}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{dadosSimulados.nascimentos.femeas[controlador]}</Text></View>
            </View>
          </View>
        </View>

        {/* TABELA 2 */}
        {/* GESTÃO DE PERDAS*/}
        <View style={styles.tabelaWrapper}>
          <Text style={styles.tituloTabela}>Gestão de Perdas e Reposição</Text>

          <View style={styles.tabela}>
            {/* Cabeçalho */}
            <View style={styles.linhaHorizontal}>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text>
                </Text></View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Machos</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Fêmeas</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Borregos</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Borraegas</Text> </View>
            </View>

            {/* PERDAS */}
            <View style={[styles.linhaHorizontal, ]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Perdas</Text></View>
              <View style={styles.celulaQuadrada}><Text></Text></View>
              <View style={styles.celulaQuadrada}><Text>{perdas}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{perdas_1_ano}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{perdas_1_ano}</Text></View>
            </View>

            {/* DESCARTES */}
            <View style={styles.linhaHorizontal}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Descartes</Text></View>
              <View style={styles.celulaQuadrada}><Text></Text></View>
              <View style={styles.celulaQuadrada}><Text>{descartes}</Text></View>
              <View style={styles.celulaQuadrada}><Text></Text></View>
              <View style={styles.celulaQuadrada}><Text></Text></View>
            </View>

            {/* REPOSIÇÃO */}
            <View style={styles.linhaHorizontal}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Reposição</Text></View>
              <View style={styles.celulaQuadrada}><Text>{reposicao_machos}</Text></View>
              <View style={styles.celulaQuadrada}><Text></Text></View>
              <View style={styles.celulaQuadrada}><Text></Text></View>
              <View style={styles.celulaQuadrada}><Text>{reposicao_femeas}</Text></View>
            </View>
          </View>
        </View>

        {/* TABELA 3 */}
        {/* Controle de Vendas e Compras */}
        <View style={styles.tabelaWrapper}>
          <Text style={styles.tituloTabela}>Controle de Vendas e Compras</Text>

          <View style={styles.tabela}>
            {/* Cabeçalho */}
            <View style={styles.linhaHorizontal}>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Borregos</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Borregas</Text> </View>
            </View>

            {/* VENDAS */}
            <View style={[styles.linhaHorizontal, ]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Vendas</Text></View>
              <View style={styles.celulaQuadrada}><Text>{vendas_machos}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{vendas_femeas}</Text></View>
            </View>

            {/* COMPRAS */}
            <View style={styles.linhaHorizontal}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Compras</Text></View>
              <View style={styles.celulaQuadrada}><Text>{compras_machos}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{compras_femeas}</Text></View>
            </View>
          </View>
        </View>

        {/* TABELA 4 */}
        {/* Estoque Final */}
        <View style={styles.tabelaWrapper}>
          <Text style={styles.tituloTabela}>Estoque Final</Text>

          <View style={styles.tabela}>
            {/* Cabeçalho */}
            <View style={styles.linhaHorizontal}>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Machos</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Fêmeas</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Borregas de Reposição</Text> </View>
            </View>

            {/* ESTOQUE */}
            <View style={[styles.linhaHorizontal, ]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Estoque Final</Text></View>
              <View style={styles.celulaQuadrada}><Text>{machos_Final}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{femeas_Final}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{reposicaoF_Final}</Text></View>
            </View>
          </View>
        </View>

        {/* TABELA 5 */}
        {/* Peso Estimado do Rebanho */}
        <View style={styles.tabelaWrapper}>
          <Text style={styles.tituloTabela}>Peso Estimado do Rebanho</Text>

          <View style={styles.tabela}>
            {/* Cabeçalho */}
            <View style={styles.linhaHorizontal}>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Machos</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Fêmeas</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Total</Text> </View>
            </View>

            {/* Peso */}
            <View style={[styles.linhaHorizontal, ]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Peso Médio</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(peso_MedioM)} Kg</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(peso_medioF)} Kg</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(peso_total)} Kg</Text></View>
            </View>

            {/* Equivalencia */}
            <View style={[styles.linhaHorizontal, ]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Equivalência de Unidade Animal</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(EUA_machos)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(EUA_femeas)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(EUA_total)}</Text></View>
            </View>
          </View>
        </View>

        {/* TABELA 6 */}
        {/* Receita*/}
        <View style={styles.tabelaWrapper}>
          <Text style={styles.tituloTabela}>Receita</Text>

          <View style={styles.tabela}>
            {/* Cabeçalho */}
            <View style={styles.linhaHorizontal}>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Receita</Text> </View>
              <View style={styles.celulaQuadrada}><Text>R$ {safeFixed(receita)}</Text></View>
            </View>
          </View>
        </View>

        {/* TABELA 7 */}
        {/* Consumo de matéria seca */}
        <View style={styles.tabelaWrapper}>
          <Text style={styles.tituloTabela}>Consumo de matéria seca</Text>

          <View style={styles.tabela}>
            {/* Cabeçalho */}
            <View style={styles.linhaHorizontal}>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Animal/{'\n'}Dia</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Dia</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Periodo</Text> </View>
            </View>

            {/* FEMEAS */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Fêmeas</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoF)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoFR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoFP)}</Text></View>
            </View>

            {/* MACHOS */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Machos</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoM)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoMR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoMP)}</Text></View>
            </View>

            {/* Borregos */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoB)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoBR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoBP)}</Text></View>
            </View>

            {/* Borregas Período 1 */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregas Período 1</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoBA1)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoBA1R)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoBA1P)}</Text></View>
            </View>

            {/* Borregos de Reposição	*/} 
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos de Reposição</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoBA2)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoBA2R)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoBA2P)}</Text></View>
            </View>

            {/* Total */}
            <View style={[styles.linhaHorizontal, ]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Total</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoT)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoTR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(consumoTP)}</Text></View>
            </View>
          </View>
        </View>


        {/* TABELA 8 */}
        {/* Consumo de Volumoso (Kg Matéria Seca) */}
        <View style={styles.tabelaWrapper}>
          <Text style={styles.tituloTabela}>Consumo de Volumoso (Kg Matéria Seca)</Text>

          <View style={styles.tabela}>
            {/* Cabeçalho */}
            <View style={styles.linhaHorizontal}>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Animal/{'\n'}Dia</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Dia</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Periodo</Text> </View>
            </View>

            {/* FEMEA */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Fêmeas</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoF)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoFR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoFP)}</Text></View>
            </View>

            {/* MACHOS */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Machos</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoM)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoMR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoMP)}</Text></View>
            </View>

            {/* Borregos */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoB)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoBR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoBP)}</Text></View>
            </View>

            {/* Borregas Período 1 */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregas Período 1</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoBA1)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoBA1R)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoBA1P)}</Text></View>
            </View>

            {/* Borregos de Reposição	*/}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos de Reposição</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoBA2)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoBA2R)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoBA2P)}</Text></View>
            </View>

            {/* Total */}
            <View style={[styles.linhaHorizontal,]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Total</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoT)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoTR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoTP)}</Text></View>
            </View>
          </View>
        </View>


        {/* TABELA 9 */}
        {/* Consumo de Volumoso (Kg Matéria Natural) */}
        <View style={styles.tabelaWrapper}>
          <Text style={styles.tituloTabela}>Consumo de Volumoso (Kg Matéria Natural)</Text>

          <View style={styles.tabela}>
            {/* Cabeçalho */}
            <View style={styles.linhaHorizontal}>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Animal/{'\n'}Dia</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Dia</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Periodo</Text> </View>
            </View>

            {/* FEMEA */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Fêmeas</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaF)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaFR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaFP)}</Text></View>
            </View>

            {/* MACHOS */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Machos</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaM)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaMR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaMP)}</Text></View>
            </View>

            {/* Borregos */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaB)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaBR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaBP)}</Text></View>
            </View>

            {/* Borregas Período 1*/}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregas Período 1</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaBA1)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaBA1R)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaBA1P)}</Text></View>
            </View>

            {/* Borregos de Reposição	*/}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos de Reposição</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaBA2)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaBA2R)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaBA2P)}</Text></View>
            </View>

            {/* Total */}
            <View style={[styles.linhaHorizontal, ]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Total</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaT)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaTR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(volumosoSecaTP)}</Text></View>
            </View>
          </View>
        </View>


        {/* TABELA 10 */}
        {/* Consumo de Ração Concentrada (Kg Matéria Seca) */}
        <View style={styles.tabelaWrapper}>
          <Text style={styles.tituloTabela}>Consumo de Ração Concentrada (Kg Matéria Seca)</Text>

          <View style={styles.tabela}>
            {/* Cabeçalho */}
            <View style={styles.linhaHorizontal}>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Animal/{'\n'}Dia</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Dia</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Periodo</Text> </View>
            </View>

            {/* FEMEA */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Fêmeas</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoF)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoFR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoFP)}</Text></View>
            </View>

            {/* MACHOS */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Machos</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoM)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoMR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoMP)}</Text></View>
            </View>

            {/* Borregos */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoB)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoBR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoBP)}</Text></View>
            </View>

            {/* Borregas Período 1*/}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregas Período 1</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoBA1)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoBA1R)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoBA1P)}</Text></View>
            </View>

            {/* Borregos de Reposição	*/}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos de Reposição</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoBA2)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoBA2R)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoBA2P)}</Text></View>
            </View>

            {/* Total */}
            <View style={[styles.linhaHorizontal, ]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Total</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoT)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoTR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoTP)}</Text></View>
            </View>
          </View>
        </View>


        {/* TABELA 11 */}
        {/* Consumo de Ração Concentrada (Kg Matéria Seca) */}
        <View style={styles.tabelaWrapper}>
          <Text style={styles.tituloTabela}>Consumo de Ração Concentrada (Kg Matéria Natural)</Text>

          <View style={styles.tabela}>
            {/* Cabeçalho */}
            <View style={styles.linhaHorizontal}>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Animal/{'\n'}Dia</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Dia</Text> </View>
              <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
                <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Periodo</Text> </View>
            </View>

            {/* FEMEA */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Fêmeas</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaF)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaFR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaFP)}</Text></View>
            </View>

            {/* MACHOS */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Machos</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaM)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaMR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaMP)}</Text></View>
            </View>

            {/* Borregos */}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaB)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaBR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaBP)}</Text></View>
            </View>

            {/* Borregas Período 1*/}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregas Período 1</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaBA1)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaBA1R)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaBA1P)}</Text></View>
            </View>

            {/* Borregos de Reposição	*/}
            <View style={[styles.linhaHorizontal]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos de Reposição</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaBA2)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaBA2R)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaBA2P)}</Text></View>
            </View>

            {/* Total */}
            <View style={[styles.linhaHorizontal, ]}>
              <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Total</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaT)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaTR)}</Text></View>
              <View style={styles.celulaQuadrada}><Text>{safeFixed(concentradoSecaTP)}</Text></View>
            </View>
          </View>
        </View>

      </View>

         {/* Botões de Navegação de Ano */}
      <View style={styles.botoes}>
        <TouchableOpacity
          style={[styles.botaoSecundario, controlador === 0 && { opacity: 0.5 }]}
          onPress={handlePreviousYear}
          disabled={controlador === 0}
        >
          <Text style={styles.botaoTexto}>Retroceder</Text>
        </TouchableOpacity>

        <View style={styles.botaoPrincipal}>
          <Text style={styles.botaoTextoBranco}>Ano {controlador + 1}</Text>
        </View>

        <TouchableOpacity
          style={[styles.botaoSecundario, controlador === numAnosSimulados - 1 && { opacity: 0.5 }]}
          onPress={handleNextYear}
          disabled={controlador === numAnosSimulados - 1}
        >
          <Text style={styles.botaoTexto}>Avançar</Text>
        </TouchableOpacity>
      </View>

        {/* Rodapé */}
        <View style={styles.footer}>
          <View style={styles.footer2}>
            <Image
              source={require('../../assets/images/logos-ifce-cits.png')}
              style={styles.footerImage}/>
            <Image
              source={require('../../assets/images/logos-gov-midr.png')}
              style={styles.footerImage}/>
          </View>
        </View>
    </ScrollView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  header: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 45,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2E8957',
    marginTop: 4,
  },
   separator: {
  height: 4,
  backgroundColor: '#2E8957',
  width: '100%',
},

  tituloBox: {
    backgroundColor: '#eee',
    alignItems: 'center',
    padding: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  tabelaContainer: {
    padding: 16,
    gap: 20,
  },
  linhaHorizontal: {
  flexDirection: 'row',
  borderTopWidth: 1,
  borderColor: '#2E8957',
},

celulaQuadrada: {
  flex: 1,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRightWidth: 1,
  borderColor: '#2E8957',
  paddingHorizontal: 4,
},

tabela: {
  borderWidth: 1,
  borderColor: '#2E8957',
  borderRadius: 10,
  overflow: 'hidden',
  marginBottom: 24,
  backgroundColor: '#fff',
},

tabelaCabecalho: {
  backgroundColor: '#2E8957',
  paddingVertical: 10,
  alignItems: 'center',
},

tabelaCabecalhoTexto: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
},

negrito: {
  fontWeight: 'bold',
},

tabelaWrapper: {
  marginBottom: 24,
},

tituloTabela: {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 6,
  marginLeft: 8,
  color: '#2E8957',
},

cabecalhoVerde: {
  backgroundColor: '#2E8957',
},

cabecalhoTexto: {
  color: '#fff',
  fontWeight: 'bold',
},
textoCabecalhoBranco: {
  color: '#fff',
  fontWeight: 'bold',
},

  linha: {
    borderTopWidth: 1,
    borderColor: '#2E8957',
    backgroundColor: '#fff',
  },
  celula: {
    padding: 20,
  },
  tabelaDupla: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#2E8957',
    borderRadius: 10,
    overflow: 'hidden',
  },
  colunaEsquerda: {
    flex: 1,
    backgroundColor: '#2E8957',
    borderRightWidth: 1,
    borderColor: '#2E8957',
  },
  colunaDireita: {
    flex: 2,
    backgroundColor: '#fff',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: -10,
  },
  botaoPrincipal: {
    backgroundColor: '#ffc107',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  botaoSecundario: {
    backgroundColor: '#2E8957',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botaoTextoBranco: {
    color: '#000',
    fontWeight: 'bold',
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

footer2: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: 30, 
},

footerImage: {
  width: 180, 
  height: 80,
  resizeMode: 'contain',
},
}); 


