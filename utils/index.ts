// Tipos de dados
interface AnimalData {
    machos: number[];
    femeas: number[];
  }
  
  interface NascimentosData extends AnimalData {
    total: number[];
  }
  
  interface PerdasData {
    machos: number[];
    femeas: number[];
    borregos: number[];
    borregas: number[];
  }
  
  interface ReposicaoData {
    machos: number[];
    femeas: number[];
    borregas: number[];
  }
  
  interface VendasComprasData {
    borregos: number[];
    borregas: number[];
  }
  
  interface EstoqueFinalData extends AnimalData {
    borregas: number[];
  }
  
  interface PesoData extends AnimalData {
    total: number[];
  }
  
  interface EuaData extends AnimalData {
    total: number[];
  }
  
  interface PesoMedio {
    machos: number;
    femeas: number;
    borregas: number;
  }
  
  interface SuplementoGrupo {
    femeas: number;
    machos: number;
    borregos: number;
    borregas1: number;
    borregas2: number;
  }
  
  // Exportando os dados principais
  export const dados = {
    quantidade: { machos: [], femeas: [] } as AnimalData,
    nascimentos: { machos: [], femeas: [], total: [] } as NascimentosData,
    perdas: { machos: [], femeas: [], borregos: [], borregas: [] } as PerdasData,
    descartes: { femeas: [] } as { femeas: number[] },
    reposicao: { machos: [], femeas: [], borregas: [] } as ReposicaoData,
    vendas: { borregos: [], borregas: [] } as VendasComprasData,
    compras: { borregos: [], borregas: [] } as VendasComprasData,
    estoqueFinal: { machos: [], femeas: [], borregas: [] } as EstoqueFinalData,
    peso: { machos: [], femeas: [], total: [] } as PesoData,
    Eua: { machos: [], femeas: [], total: [] } as EuaData,
    receita: [] as number[],
  };
  
  export const parametros = {
    maxFemeas: 0,
    machosPorFemeas: 0,
    partosPorAno: 0,
    prolificidade: 0,
    fertilidade: 0,
    mortalidadeAbaixoDe1Ano: 0,
    mortalidadeAcimaDe1Ano: 0,
    idadeDesmame: 0,
    pesoAbate: 0,
    pesoMedio: { machos: 0, femeas: 0, borregas: 0 } as PesoMedio,
    taxaDescartes: 0,
    crescimento: 0,
    precoKg: 0,
    custeio: 0,
    custeioTotal: 0,
  };
  
  export const suplementos = {
    materiaSeca: {
      femeas: 0,
      machos: 0,
      borregos: 0,
      borregas1: 0,
      borregas2: 0
    } as SuplementoGrupo,
    diasSuplementos: {
      femeas: 0,
      machos: 0,
      borregos: 0,
      borregas1: 0,
      borregas2: 0
    } as SuplementoGrupo,
    volumoso: {
      femeas: 0,
      machos: 0,
      borregos: 0,
      borregas1: 0,
      borregas2: 0
    } as SuplementoGrupo,
    materiaSecaVolumoso: {
      femeas: 0,
      machos: 0,
      borregos: 0,
      borregas1: 0,
      borregas2: 0
    } as SuplementoGrupo,
    materiaSecaConcentrado: {
      femeas: 0,
      machos: 0,
      borregos: 0,
      borregas1: 0,
      borregas2: 0
    } as SuplementoGrupo
  };
  
  // Calculos
  // Distribuição do rebanho
  function calcularReposicaoMachos(anoAtual: number, dados: any, parametros: any): void {
    const valor = Math.ceil(dados.quantidade.femeas[anoAtual] / parametros.machosPorFemeas);
    dados.quantidade.machos.push(valor);
    if (valor > (dados.quantidade.machos[anoAtual - 1] || 0)) {
      dados.reposicao.machos.push(valor - (dados.quantidade.machos[anoAtual - 1] || 0));
    } else {
      dados.reposicao.machos.push(0);
    }
  }
  
  function calcularNascimentos(anoAtual: number, dados: any, parametros: any): void {
    const total = Math.ceil((dados.quantidade.femeas[anoAtual] * (parametros.fertilidade / 100) * parametros.prolificidade) * parametros.partosPorAno);
    dados.nascimentos.total.push(total);
    dados.nascimentos.machos.push(Math.ceil(total / 2));
    dados.nascimentos.femeas.push(Math.ceil(total / 2));
  }
  
  //Gestão de perdas e reposição
  function calcularPerdas(anoAtual: number, dados: any, parametros: any): void {
    dados.perdas.borregos.push(Math.ceil(dados.nascimentos.machos[anoAtual] * (parametros.mortalidadeAbaixoDe1Ano / 100)));
    dados.perdas.borregas.push(Math.ceil(dados.nascimentos.femeas[anoAtual] * (parametros.mortalidadeAbaixoDe1Ano / 100)));
    dados.perdas.femeas.push(Math.ceil(dados.quantidade.femeas[anoAtual] * (parametros.mortalidadeAcimaDe1Ano / 100)));
    dados.perdas.machos && dados.perdas.machos.push(0); // Se existir machos
  }
  
  function calcularDescartes(anoAtual: number, dados: any, parametros: any): void {
    dados.descartes.femeas.push(Math.ceil(dados.quantidade.femeas[anoAtual] * (parametros.taxaDescartes / 100)));
  }
  
  function calcularReposicaoFemeas(anoAtual: number, dados: any, parametros: any): void {
    let valor;
    if (dados.quantidade.femeas[anoAtual] + dados.quantidade.femeas[anoAtual] * (parametros.crescimento / 100) < parametros.maxFemeas) {
      valor = Math.ceil(dados.quantidade.femeas[anoAtual] * (parametros.crescimento / 100) + dados.perdas.femeas[anoAtual] + dados.descartes.femeas[anoAtual]);
    } else if (dados.quantidade.femeas[anoAtual] + dados.quantidade.femeas[anoAtual] * (parametros.crescimento / 100) === parametros.maxFemeas) {
      valor = dados.perdas.femeas[anoAtual] + dados.descartes.femeas[anoAtual];
    } else {
      valor = (dados.quantidade.femeas[anoAtual] - dados.perdas.femeas[anoAtual] - dados.descartes.femeas[anoAtual] - parametros.maxFemeas) * -1;
    }
    dados.reposicao.borregas.push(valor);
    dados.reposicao.femeas && dados.reposicao.femeas.push(0); // Se existir femeas
  }
  
  // Controle de vendas e compras
  function calcularVendas(anoAtual: number, dados: any, parametros: any): void {
    dados.vendas.borregos.push((dados.nascimentos.machos[anoAtual] - dados.perdas.borregos[anoAtual]));
    dados.compras.borregos.push(dados.reposicao.machos[anoAtual]);
  
    if ((dados.nascimentos.femeas[anoAtual] - dados.perdas.borregas[anoAtual] - dados.reposicao.borregas[anoAtual]) > 0) {
      dados.vendas.borregas.push(dados.nascimentos.femeas[anoAtual] - dados.perdas.borregas[anoAtual] - dados.reposicao.borregas[anoAtual]);
      dados.compras.borregas.push(0);
    } 
    else if ((dados.nascimentos.femeas[anoAtual] - dados.perdas.borregas[anoAtual] - dados.reposicao.borregas[anoAtual]) === 0) {
      dados.vendas.borregas.push(0);
      dados.compras.borregas.push(0);
    }
    else {
      dados.compras.borregas.push((dados.nascimentos.femeas[anoAtual] - dados.perdas.borregas[anoAtual] - dados.reposicao.borregas[anoAtual]) * -1);
      dados.vendas.borregas.push(0);
    } 
  }
  
  // Estoque final
  function calcularEstoque(anoAtual: number, dados: any): void {
    dados.estoqueFinal.femeas.push(dados.quantidade.femeas[anoAtual] - dados.perdas.femeas[anoAtual] - dados.descartes.femeas[anoAtual]);
  }
  
  // Peso estimado do rebanho
  function calcularPeso(anoAtual: number, dados: any, parametros: any): void {
    dados.peso.machos.push(dados.quantidade.machos[anoAtual] * parametros.pesoMedio.machos);
    dados.peso.femeas.push(dados.estoqueFinal.femeas[anoAtual] * parametros.pesoMedio.femeas + dados.reposicao.borregas[anoAtual] * parametros.pesoMedio.borregas);
    dados.peso.total.push(dados.peso.machos[anoAtual] + dados.peso.femeas[anoAtual]);
  }
  
  function calcularEUA(anoAtual: number, dados: any, parametros: any): void {
    dados.Eua.femeas.push((Math.pow(parametros.pesoMedio.femeas, 0.75) / Math.pow(450, 0.75)) * dados.estoqueFinal.femeas[anoAtual] + (Math.pow(parametros.pesoMedio.borregas, 0.75) / Math.pow(450, 0.75)) * dados.reposicao.borregas[anoAtual]);
    dados.Eua.machos.push((Math.pow(parametros.pesoMedio.machos, 0.75) / Math.pow(450, 0.75)) * dados.quantidade.machos[anoAtual]);
    dados.Eua.total.push(dados.Eua.femeas[anoAtual] + dados.Eua.machos[anoAtual]);
  }
  
  // Receita
  function calcularCusto(anoAtual: number, dados: any, parametros: any): void {
    dados.receita.push(dados.vendas.borregos[anoAtual] * parametros.pesoAbate * parametros.precoKg + dados.vendas.borregas[anoAtual] * parametros.pesoAbate * parametros.precoKg);
  }
  
  // Atualiza rebanho para o proximo ano
  function atualizarRebanho(anoAtual: number, dados: any): void {
    dados.quantidade.femeas.push(dados.estoqueFinal.femeas[anoAtual] + dados.reposicao.borregas[anoAtual]);
  }
  
  // Executar todos os cálculos
  export function executarCalculos(anoAtual: number, dados: any, parametros: any): void {
    calcularReposicaoMachos(anoAtual, dados, parametros);
    calcularNascimentos(anoAtual, dados, parametros);
    calcularPerdas(anoAtual, dados, parametros);
    calcularDescartes(anoAtual, dados, parametros);
    calcularReposicaoFemeas(anoAtual, dados, parametros);
    calcularVendas(anoAtual, dados, parametros);
    calcularEstoque(anoAtual, dados);
    calcularPeso(anoAtual, dados, parametros);
    calcularEUA(anoAtual, dados, parametros);
    calcularCusto(anoAtual, dados, parametros);
    atualizarRebanho(anoAtual, dados);
  }
  
  // Dados do formulário
  export function processarDadosFormulario(formValues: Record<string, any>) {
    // Limpar arrays globais antes de simular novamente
    Object.keys(dados).forEach(key => {
      if (Array.isArray((dados as any)[key])) {
        (dados as any)[key] = [];
      } else if (typeof (dados as any)[key] === 'object' && (dados as any)[key] !== null) {
        Object.keys((dados as any)[key]).forEach(subKey => {
          if (Array.isArray(((dados as any)[key] as any)[subKey])) {
            ((dados as any)[key] as any)[subKey] = [];
          }
        });
      }
    });
    // Limpar arrays de consumo e derivados
    resetConsumoArrays();

    // Dados = Inputs
    dados.quantidade.femeas.push(parseFloat(formValues.femaleInput));
    parametros.maxFemeas = parseFloat(formValues.maxFemaleInput);
    parametros.machosPorFemeas = parseFloat(formValues.maleFemaleInput);
    parametros.partosPorAno = parseFloat(formValues.partosPorAnoInput);
    parametros.prolificidade = parseFloat(formValues.prolificidadeInput);
    parametros.fertilidade = parseFloat(formValues.fertilidadeInput);
    parametros.mortalidadeAbaixoDe1Ano = parseFloat(formValues.mortalidade1AnoInput);
    parametros.mortalidadeAcimaDe1Ano = parseFloat(formValues.mortalidadeInput);
    parametros.idadeDesmame = parseFloat(formValues.idadeDesmameInput);
    parametros.pesoAbate = parseFloat(formValues.pesoAbateInput);
    parametros.pesoMedio.machos = parseFloat(formValues.pesoMedioReprodutorInput);
    parametros.pesoMedio.femeas = parseFloat(formValues.pesoMedioMatrizInput);
    parametros.pesoMedio.borregas = parseFloat(formValues.pesoMedioBorregaInput);
    parametros.taxaDescartes = parseFloat(formValues.descarteInput);
    parametros.crescimento = parseFloat(formValues.crescimentoInput);
    parametros.precoKg = parseFloat(formValues.precoKgInput);
    parametros.custeio = parseFloat(formValues.custeioInput);
    parametros.custeioTotal = parseFloat(formValues.custeioTotalInput);
    const numAnos = parseFloat(formValues.anosSimuladosInput);

    suplementos.materiaSeca.femeas = parseFloat(formValues.FmateriaSecaInput) / 100;
    suplementos.materiaSeca.machos = parseFloat(formValues.MmateriaSecaInput) / 100;
    suplementos.materiaSeca.borregos = parseFloat(formValues.BmateriaSecaInput) / 100;
    suplementos.materiaSeca.borregas1 = parseFloat(formValues.BA1materiaSecaInput) / 100;
    suplementos.materiaSeca.borregas2 = parseFloat(formValues.BA2materiaSecaInput) / 100;
    suplementos.diasSuplementos.femeas = parseFloat(formValues.FdiasSuplementosInput);
    suplementos.diasSuplementos.machos = parseFloat(formValues.MdiasSuplementosInput);
    suplementos.diasSuplementos.borregos = parseFloat(formValues.BdiasSuplementosInput);
    suplementos.diasSuplementos.borregas1 = parseFloat(formValues.BA1diasSuplementosInput);
    suplementos.diasSuplementos.borregas2 = parseFloat(formValues.BA2diasSuplementosInput);
    suplementos.volumoso.femeas = parseFloat(formValues.FvolumosoInput) / 100;
    suplementos.volumoso.machos = parseFloat(formValues.MvolumosoInput) / 100;
    suplementos.volumoso.borregos = parseFloat(formValues.BvolumosoInput) / 100;
    suplementos.volumoso.borregas1 = parseFloat(formValues.BA1volumosoInput) / 100;
    suplementos.volumoso.borregas2 = parseFloat(formValues.BA2volumosoInput) / 100;
    suplementos.materiaSecaVolumoso.femeas = parseFloat(formValues.FmateriaSeca_volumosoInput) / 100;
    suplementos.materiaSecaVolumoso.machos = parseFloat(formValues.MmateriaSeca_volumosoInput) / 100;
    suplementos.materiaSecaVolumoso.borregos = parseFloat(formValues.BmateriaSeca_volumosoInput) / 100;
    suplementos.materiaSecaVolumoso.borregas1 = parseFloat(formValues.BA1materiaSeca_volumosoInput) / 100;
    suplementos.materiaSecaVolumoso.borregas2 = parseFloat(formValues.BA2materiaSeca_volumosoInput) / 100;
    suplementos.materiaSecaConcentrado.femeas = parseFloat(formValues.FmateriaSeca_concentradoInput) / 100;
    suplementos.materiaSecaConcentrado.machos = parseFloat(formValues.MmateriaSeca_concentradoInput) / 100;
    suplementos.materiaSecaConcentrado.borregos = parseFloat(formValues.BmateriaSeca_concentradoInput) / 100;
    suplementos.materiaSecaConcentrado.borregas1 = parseFloat(formValues.BA1materiaSeca_concentradoInput) / 100;
    suplementos.materiaSecaConcentrado.borregas2 = parseFloat(formValues.BA2materiaSeca_concentradoInput) / 100;

    // Simulação
    let anoAtual = 0;
    while (anoAtual < numAnos) {
      console.log(`Processando ano ${anoAtual}`);
      executarCalculos(anoAtual, dados, parametros);
      calcularInformacoes(anoAtual);
      anoAtual++;
    }
    return dados;
  }
  
  import { calcularInformacoes, resetConsumoArrays } from './add';
      
