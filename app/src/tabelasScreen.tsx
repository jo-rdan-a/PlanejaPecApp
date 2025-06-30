import { Link, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { dados, parametros, processarDadosFormulario, suplementos } from '../../utils';
// @ts-ignore

export default function Tabelas() {
  const params = useLocalSearchParams();
  const [currentYear, setCurrentYear] = useState(0);
  const [calculatedData, setCalculatedData] = useState<any>(null);

  useEffect(() => {
    if (params) {
      // Processar dados do formulário usando a função do utils
      processarDadosFormulario(params as Record<string, any>);

      setCalculatedData({
        dados,
        parametros,
        suplementos
      });
    }
  }, [params]);

  // Função para obter dados do ano atual
  const getCurrentYearData = () => {
    if (!calculatedData) return null;
    
    const { dados } = calculatedData;
    return {
      machos: dados.quantidade.machos[currentYear] || 0,
      femeas: dados.quantidade.femeas[currentYear] || 0,
      nascimentos: dados.nascimentos.total[currentYear] || 0,
      perdas: dados.perdas.femeas[currentYear] || 0,
      perdas_1_ano: dados.perdas.borregos[currentYear] || 0,
      descartes: dados.descartes.femeas[currentYear] || 0,
      reposicao_machos: dados.reposicao.machos[currentYear] || 0,
      reposicao_femeas: dados.reposicao.borregas[currentYear] || 0,
      vendas_machos: dados.vendas.borregos[currentYear] || 0,
      vendas_femeas: dados.vendas.borregas[currentYear] || 0,
      compras_machos: dados.compras.borregos[currentYear] || 0,
      compras_femeas: dados.compras.borregas[currentYear] || 0,
      machos_Final: dados.quantidade.machos[currentYear] || 0,
      femeas_Final: dados.estoqueFinal.femeas[currentYear] || 0,
      reposicaoF_Final: dados.reposicao.borregas[currentYear] || 0,
      peso_MedioM: dados.peso.machos[currentYear] || 0,
      peso_medioF: dados.peso.femeas[currentYear] || 0,
      peso_total: dados.peso.total[currentYear] || 0,
      EUA_machos: dados.Eua.machos[currentYear] || 0,
      EUA_femeas: dados.Eua.femeas[currentYear] || 0,
      EUA_total: dados.Eua.total[currentYear] || 0,
      receita: dados.receita[currentYear] || 0
    };
  };

  const currentData = getCurrentYearData();

  // Se não há dados calculados, mostrar loading
  if (!currentData) {
    return (
      <View style={styles.container}>
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  // Usar dados reais em vez dos mock
  const {
    machos, femeas, nascimentos, perdas, perdas_1_ano, descartes,
    reposicao_machos, reposicao_femeas, vendas_machos, vendas_femeas,
    compras_machos, compras_femeas, machos_Final, femeas_Final,
    reposicaoF_Final, peso_MedioM, peso_medioF, peso_total,
    EUA_machos, EUA_femeas, EUA_total, receita
  } = currentData;


  // Dados de consumo (valores mock por enquanto, serão calculados depois)
  const consumoF = 2.5;
  const consumoFR = 50;
  const consumoFP = 1500;
  const consumoM = 2.8;
  const consumoMR = 28;
  const consumoMP = 840;
  const consumoB = 1.5;
  const consumoBR = 15;
  const consumoBP = 450;
  const consumoBA1 = 1.2;
  const consumoBA1R = 12;
  const consumoBA1P = 360;
  const consumoBA2 = 1.3;
  const consumoBA2R = 13;
  const consumoBA2P = 390;
  const consumoT = 9.3;
  const consumoTR = 118;
  const consumoTP = 3540;
  const volumosoF = 2.0;
  const volumosoFR = 40;
  const volumosoFP = 1200;
  const volumosoM = 2.2;
  const volumosoMR = 22;
  const volumosoMP = 660;
  const volumosoB = 1.0;
  const volumosoBR = 10;
  const volumosoBP = 300;
  const volumosoBA1 = 0.8;
  const volumosoBA1R = 8;
  const volumosoBA1P = 240;
  const volumosoBA2 = 0.9;
  const volumosoBA2R = 9;
  const volumosoBA2P = 270;
  const volumosoT = 6.9;
  const volumosoTR = 89;
  const volumosoTP = 2670;
  const volumosoCF = 2.1;
  const volumosoCFR = 42;
  const volumosoCFP = 1260;
  const volumosoCM = 2.3;
  const volumosoCMR = 23;
  const volumosoCMP = 690;
  const volumosoCB = 1.1;
  const volumosoCBR = 11;
  const volumosoCBP = 330;
  const volumosoCBA1 = 0.85;
  const volumosoCBA1R = 8.5;
  const volumosoCBA1P = 255;
  const volumosoCBA2 = 0.95;
  const volumosoCBA2R = 9.5;
  const volumosoCBA2P = 285;
  const volumosoCT = 7.3;
  const volumosoCTR = 94;
  const volumosoCTP = 2820;
  const concentradoF = 0.5;
  const concentradoFR = 10;
  const concentradoFP = 300;
  const concentradoM = 0.6;
  const concentradoMR = 6;
  const concentradoMP = 180;
  const concentradoB = 0.3;
  const concentradoBR = 3;
  const concentradoBP = 90;
  const concentradoBA1 = 0.2;
  const concentradoBA1R = 2;
  const concentradoBA1P = 60;
  const concentradoBA2 = 0.25;
  const concentradoBA2R = 2.5;
  const concentradoBA2P = 75;
  const concentradoT = 1.85;
  const concentradoTR = 23.5;
  const concentradoTP = 705;
  const concentradoCF = 0.55;
  const concentradoCFR = 11;
  const concentradoCFP = 330;
  const concentradoCM = 0.65;
  const concentradoCMR = 6.5;
  const concentradoCMP = 195;
  const concentradoCB = 0.35;
  const concentradoCBR = 3.5;
  const concentradoCBP = 105;
  const concentradoCBA1 = 0.22;
  const concentradoCBA1R = 2.2;
  const concentradoCBA1P = 66;
  const concentradoCBA2 = 0.28;
  const concentradoCBA2R = 2.8;
  const concentradoCBA2P = 84;
  const concentradoCT = 2.05;
  const concentradoCTR = 26.5;
  const concentradoCTP = 795;

  return (
    <ScrollView style={styles.container}>
     {/* Cabeçalho */}
          <View style={styles.header}>
            <Image source={require('../../assets/images/rebanhologo.png')} style={styles.logo} />
            <Text style={styles.headerTitle}>AGROPLAN</Text>
          </View>
    <View style={styles.separator} />
    

    {/* Título */}
      <View style={styles.tituloBox}>
      <Text style={styles.titulo}>ANO</Text>
    </View>

  {/* Tabelas */}
<View style={styles.tabelaContainer}>
    



  {/* TABELA 1 */}
  {/* DISTRIBUIÇÃO DO REBANHO */}
<View style={styles.tabelaWrapper}>
  <Text style={styles.tituloTabela}>Distribuição do Rebanho</Text>

  <View style={styles.tabela}>
    {/* Cabeçalho verde */}
    <View style={styles.linhaHorizontal}>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Machos</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Fêmeas</Text>
      </View>
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
      <View style={styles.celulaQuadrada}><Text>{nascimentos}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{nascimentos}</Text></View>
    </View>
  </View>
</View>





  {/* TABELA 2 */}
   {/* GESTÃO DE PERDAS*/}
<View style={styles.tabelaWrapper}>
  <Text style={styles.tituloTabela}>Gestão de Perdas e Reposição</Text>

  <View style={styles.tabela}>
    {/* Cabeçalho verde */}
    <View style={styles.linhaHorizontal}>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text>
        </Text></View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Machos</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Fêmeas</Text>
      </View>
       <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Borregos</Text>
      </View>
       <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Borraegas</Text>
      </View>
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
    {/* Cabeçalho verde */}
    <View style={styles.linhaHorizontal}>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Borregos</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Borregas</Text>
      </View>
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
    {/* Cabeçalho verde */}
    <View style={styles.linhaHorizontal}>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Machos</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Fêmeas</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Borregas de Reposição</Text>
      </View>
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
    {/* Cabeçalho verde */}
    <View style={styles.linhaHorizontal}>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Machos</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Fêmeas</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Total</Text>
      </View>
    </View>

    {/* Peso */}
    <View style={[styles.linhaHorizontal, ]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Peso Médio</Text></View>
      <View style={styles.celulaQuadrada}><Text>{peso_MedioM}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{peso_medioF}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{peso_total}</Text></View>
    </View>

    {/* Equivalencia */}
    <View style={[styles.linhaHorizontal, ]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Equivalência de Unidade Animal</Text></View>
      <View style={styles.celulaQuadrada}><Text>{EUA_machos}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{EUA_femeas}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{EUA_total}</Text></View>
    </View>
  </View>
</View>

    {/* TABELA 6 */}
    {/* Receitas e Custos Operacionais*/}
<View style={styles.tabelaWrapper}>
  <Text style={styles.tituloTabela}>Receitas e Custos Operacionais</Text>

  <View style={styles.tabela}>
    {/* Cabeçalho verde */}
    <View style={styles.linhaHorizontal}>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Receita</Text>
      </View>
      <View style={styles.celulaQuadrada}><Text>{receita}</Text></View>
    </View>
  </View>
</View>

  {/* TABELA 7 */}
  {/* Consumo de matéria seca */}
<View style={styles.tabelaWrapper}>
  <Text style={styles.tituloTabela}>Consumo de matéria seca</Text>

  <View style={styles.tabela}>
    {/* Cabeçalho verde */}
    <View style={styles.linhaHorizontal}>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Animal/{'\n'}Dia</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Dia</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Periodo</Text>
      </View>
    </View>

    {/* FEMEA */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Fêmeas</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoF}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoFR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoFP}</Text></View>
    </View>

    {/* MACHOS */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Machos</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoM}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoMR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoMP}</Text></View>
    </View>

    {/* Borregos */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoB}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoBR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoBP}</Text></View>
    </View>

    {/* Borregas Período 1 */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregas Período 1</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoBA1}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoBA1R}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoBA1P}</Text></View>
    </View>

    {/* Borregos de Reposição	*/} 
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos de Reposição</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoBA2}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoBA2R}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoBA2P}</Text></View>
    </View>

    {/* Total */}
    <View style={[styles.linhaHorizontal, ]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Total</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoT}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoTR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{consumoTP}</Text></View>
    </View>
  </View>
</View>


    {/* TABELA 8 */}
    {/* Consumo de Volumoso (Kg Matéria Seca) */}
<View style={styles.tabelaWrapper}>
  <Text style={styles.tituloTabela}>Consumo de Volumoso (Kg Matéria Seca)</Text>

  <View style={styles.tabela}>
    {/* Cabeçalho verde */}
    <View style={styles.linhaHorizontal}>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Animal/{'\n'}Dia</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Dia</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Periodo</Text>
      </View>
    </View>

    {/* FEMEA */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Fêmeas</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoF}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoFR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoFP}</Text></View>
    </View>

    {/* MACHOS */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Machos</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoM}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoMR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoMP}</Text></View>
    </View>

    {/* Borregos */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoB}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoBR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoBP}</Text></View>
    </View>

    {/* Borregas Período 1	 */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregas Período 1</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoBA1}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoBA1R}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoBA1P}</Text></View>
    </View>

    {/* Borregos de Reposição	 */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos de Reposição</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoBA2}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoBA2}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoBA2P}</Text></View>
    </View>

    {/* Total */}
    <View style={[styles.linhaHorizontal,]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Total</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoT}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoTR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoTP}</Text></View>
    </View>
  </View>
</View>


  {/* TABELA 9 */}
  {/* Consumo de Volumoso (Kg Matéria Natural) */}
<View style={styles.tabelaWrapper}>
  <Text style={styles.tituloTabela}>Consumo de Volumoso (Kg Matéria Natural)</Text>

  <View style={styles.tabela}>
    {/* Cabeçalho verde */}
    <View style={styles.linhaHorizontal}>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Animal/{'\n'}Dia</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Dia</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Periodo</Text>
      </View>
    </View>

    {/* FEMEA */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Fêmeas</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCF}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCFR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCFP}</Text></View>
    </View>

    {/* MACHOS */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Machos</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCM}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCMR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCMP}</Text></View>
    </View>

    {/* Borregos */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCB}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCBR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCBP}</Text></View>
    </View>

    {/* Borregas Período 1*/}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregas Período 1</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCBA1}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCBA1R}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCBA1P}</Text></View>
    </View>

    {/* Borregos de Reposição	 */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos de Reposição</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCBA2}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCBA2R}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCBA2P}</Text></View>
    </View>

    {/* Total */}
    <View style={[styles.linhaHorizontal, ]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Total</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCT}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCTR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{volumosoCTP}</Text></View>
    </View>
  </View>
</View>


    {/* TABELA 10 */}
    {/* Consumo de Ração Concentrada (Kg Matéria Seca) */}
<View style={styles.tabelaWrapper}>
  <Text style={styles.tituloTabela}>Consumo de Ração Concentrada (Kg Matéria Seca)</Text>

  <View style={styles.tabela}>
    {/* Cabeçalho verde */}
    <View style={styles.linhaHorizontal}>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Animal/{'\n'}Dia</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Dia</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Periodo</Text>
      </View>
    </View>

    {/* FEMEA */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Fêmeas</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoF}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoFR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoFP}</Text></View>
    </View>

    {/* MACHOS */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Machos</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoM}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoMR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoMP}</Text></View>
    </View>

    {/* Borregos */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoB}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoBR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoBP}</Text></View>
    </View>

    {/* Borregas Período 1*/}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregas Período 1</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoBA1}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoBA1R}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoBA1P}</Text></View>
    </View>

    {/* Borregos de Reposição	*/}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos de Reposição</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoBA2}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoBA2R}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoBA2P}</Text></View>
    </View>

    {/* Total */}
    <View style={[styles.linhaHorizontal, ]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Total</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoT}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoTR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoTP}</Text></View>
    </View>
  </View>
</View>


    {/* TABELA 11 */}
    {/* Consumo de Ração Concentrada (Kg Matéria Seca) */}
<View style={styles.tabelaWrapper}>
  <Text style={styles.tituloTabela}>Consumo de Ração Concentrada (Kg Matéria Natural)</Text>

  <View style={styles.tabela}>
    {/* Cabeçalho verde */}
    <View style={styles.linhaHorizontal}>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}><Text></Text></View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Animal/{'\n'}Dia</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Dia</Text>
      </View>
      <View style={[styles.celulaQuadrada, styles.cabecalhoVerde]}>
        <Text style={styles.cabecalhoTexto}>Rebanho/{'\n'}Periodo</Text>
      </View>
    </View>

    {/* FEMEA */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Fêmeas</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCF}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCFR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCFP}</Text></View>
    </View>

    {/* MACHOS */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Machos</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCM}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCMR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCMP}</Text></View>
    </View>

    {/* Borregos */}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCB}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCBR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCBP}</Text></View>
    </View>

    {/* Borregas Período 1*/}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregas Período 1</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCBA1}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCBA1R}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCBA1P}</Text></View>
    </View>

    {/* Borregos de Reposição	*/}
    <View style={[styles.linhaHorizontal]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Borregos de Reposição</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCBA2}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCBA2R}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCBA2P}</Text></View>
    </View>

    {/* Total */}
    <View style={[styles.linhaHorizontal, ]}>
      <View style={styles.celulaQuadrada}><Text style={styles.negrito}>Total</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCT}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCTR}</Text></View>
      <View style={styles.celulaQuadrada}><Text>{concentradoCTP}</Text></View>
    </View>
  </View>
</View>

</View>


      {/* Botões */}
      <View style={styles.botoes}>
        <Link href="/src/homeScreen" style={styles.botaoSecundario} asChild>
          <Text style={styles.botaoTexto}>Voltar</Text>
        </Link>
        <Link href="/" style={styles.botaoPrincipal} asChild>
          <Text style={styles.botaoTextoBranco}>Ano _</Text>
        </Link>
        <Link href="/src/formularioScreen" style={styles.botaoSecundario} asChild>
          <Text style={styles.botaoTexto}>Avançar</Text>
        </Link>
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
  columnGap: 30, // mais espaço entre as imagens (caso não funcione, veja alternativa abaixo)
},

footerImage: {
  width: 180, // imagem maior
  height: 80,
  resizeMode: 'contain',
},
}); 


