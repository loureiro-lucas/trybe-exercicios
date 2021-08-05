let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info_2 = {
  personagem: 'Tio Patinhas',
  origem: "Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

console.log(info.personagem + ' e ' + info_2.personagem);
console.log(info.origem + ' e ' + info_2.origem);
console.log(info.nota + ' e ' + info_2.nota);
if (info.recorrente === 'Sim' && info_2.recorrente === 'Sim') {
  console.log('Ambos recorrentes')
}
