const products = [
  {
    id: 1,
    name: 'Chapéu Grande',
    description: 'Um chapéu grande e elegante para todas as ocasiões.',
    specifications: 'Material: Algodão\nTamanho: Único\nCor: Preto',
    seller: {
      name: 'Loja Elegância',
      phone: '123-456-7890',
      email: 'contato@lojaelegancia.com',
      rating: 4.7,
    },
    image: 'https://media.istockphoto.com/id/1241702568/photo/has.jpg?s=612x612&w=is&k=20&c=9Too3GUbb72w4wzDCFLziv8mPoV9KulECBtjAr-85Yw='
  },
  {
    id: 2,
    name: 'Chapéu de Natal',
    description: 'O chapéu perfeito para celebrar a época festiva!',
    specifications: 'Material: Feltro\nTamanho: Único\nCor: Vermelho',
    seller: {
      name: 'Loja Alegria Natalina',
      phone: '123-456-7890',
      email: 'contato@alegrianatalina.com',
      rating: 4.8,
    },
    image: 'https://media.istockphoto.com/id/184916324/photo/santa-hat.jpg?s=612x612&w=is&k=20&c=Xt5dljVTEH0r9ljKLrDZgDriepU-szUzmCByZgFWGRk='
  },
  {
    id: 3,
    name: 'Chapéu de Caubói',
    description: 'Um chapéu robusto para os aventureiros do oeste.',
    specifications: 'Material: Couro\nTamanho: M, L, XL\nCor: Marrom',
    seller: {
      name: 'Loja Western Adventures',
      phone: '123-456-7890',
      email: 'contato@westernadventures.com',
      rating: 4.6,
    },
    image: 'https://media.istockphoto.com/id/1182540276/photo/rodeo-horse-rider-wild-west-culture-americana-and-american-country-music-concept-theme-with.jpg?s=612x612&w=is&k=20&c=aaQU5alVol9QMbxHYnC3yIhgFsDnip2td8_hy2BwFpI='
  },
  {
    id: 4,
    name: 'Chapéu Azul',
    description: 'Um chapéu elegante com uma pitada de cor.',
    specifications: 'Material: Algodão\nTamanho: Único\nCor: Azul Turquesa',
    seller: {
      name: 'Loja Estilo Turquesa',
      phone: '123-456-7890',
      email: 'contato@estiloturquesa.com',
      rating: 4.9,
    },
    image: 'https://media.istockphoto.com/id/186810611/photo/turquoise-sun-hat.jpg?s=612x612&w=0&k=20&c=nvTc-IDvEIUxflDjjcQII7xCQo2JOOGochiDtp3T7Zc='
  },
];
  
const comments = [
  {
    id: 1,
    productId: 1,
    userName: 'Pedro',
    date: '01/01/2023',
    comment: 'O Chapéu Grande é incrível! Ele é elegante e se encaixa perfeitamente. Adorei a qualidade do material.',
    rating: 5,
  },
  {
    id: 2,
    productId: 1,
    userName: 'Maria',
    date: '02/01/2023',
    comment: 'Estou muito satisfeito com o Chapéu Grande. Ele adiciona um toque de classe ao meu visual. Recomendo!',
    rating: 4,
  },
  {
    id: 3,
    productId: 1,
    userName: 'João',
    date: '03/01/2023',
    comment: 'O Chapéu Grande é exatamente o que eu estava procurando. A entrega foi rápida e o produto é de alta qualidade.',
    rating: 5,
  },
  {
    id: 4,
    productId: 2,
    userName: 'Ana',
    date: '04/01/2023',
    comment: 'O Chapéu de Natal é super fofo! Ele é perfeito para as festas de fim de ano. Adorei o design.',
    rating: 5,
  },
  {
    id: 5,
    productId: 2,
    userName: 'Luiz',
    date: '05/01/2023',
    comment: 'Esse Chapéu de Natal é encantador! Com certeza vai fazer sucesso nas festas. Recomendo a todos.',
    rating: 4,
  },
  {
    id: 6,
    productId: 2,
    userName: 'Laura',
    date: '06/01/2023',
    comment: 'Adorei o Chapéu de Natal! Ele é confortável e tem uma qualidade excepcional. Mal posso esperar para usá-lo!',
    rating: 5,
  },
  {
    id: 7,
    productId: 3,
    userName: 'Carlos',
    date: '07/01/2023',
    comment: 'O Chapéu de Caubói é autêntico e bem feito. Fiquei impressionado com a durabilidade do material.',
    rating: 4,
  },
  {
    id: 8,
    productId: 3,
    userName: 'Sofia',
    date: '08/01/2023',
    comment: 'Esse Chapéu de Caubói é o meu novo acessório favorito. Ele é estiloso e combina com qualquer look country.',
    rating: 5,
  },
  {
    id: 9,
    productId: 3,
    userName: 'Lucas',
    date: '09/01/2023',
    comment: 'Estou muito feliz com o Chapéu de Caubói. Ele superou minhas expectativas em termos de qualidade e estilo.',
    rating: 5,
  },
  {
    id: 10,
    productId: 4,
    userName: 'Beatriz',
    date: '10/01/2023',
    comment: 'O Chapéu Azul é incrível! A cor é vibrante e ele é muito confortável de usar. Recomendo!',
    rating: 5,
  },
  {
    id: 11,
    productId: 4,
    userName: 'Mateus',
    date: '11/01/2023',
    comment: 'Esse Chapéu Azul é a escolha perfeita para um dia ensolarado. Adoro o estilo e a qualidade.',
    rating: 4,
  },
  {
    id: 12,
    productId: 4,
    userName: 'Julia',
    date: '12/01/2023',
    comment: 'O Chapéu Azul é elegante e me protege bem do sol. Estou muito satisfeito com a compra.',
    rating: 5,
  }
]

const questions = [
  {
    productId: 1,
    userName: 'Fernanda',
    date: '14/01/2023',
    question: 'O Chapéu Grande possui outras opções de cor?',
    answer: 'Infelizmente, o Chapéu Grande está disponível apenas na cor preta no momento.'
  },
  {
    productId: 1,
    userName: 'Ricardo',
    date: '15/01/2023',
    question: 'Qual é o material interno do Chapéu Grande?',
    answer: 'O Chapéu Grande possui um forro interno de tecido macio e confortável.'
  },
  {
    productId: 2,
    userName: 'Mariana',
    date: '16/01/2023',
    question: 'O Chapéu de Natal é ajustável?',
    answer: 'Sim, o Chapéu de Natal possui uma fita ajustável para se adaptar confortavelmente.'
  },
  {
    productId: 2,
    userName: 'Paulo',
    date: '17/01/2023',
    question: 'Posso lavar o Chapéu de Natal na máquina de lavar?',
    answer: 'Recomendamos a lavagem à mão para preservar a integridade do chapéu.'
  },
  {
    productId: 3,
    userName: 'Camila',
    date: '18/01/2023',
    question: 'O Chapéu de Caubói é unissex?',
    answer: 'Sim, o Chapéu de Caubói é projetado para ser usado por pessoas de qualquer gênero.'
  },
  {
    productId: 3,
    userName: 'Rafael',
    date: '19/01/2023',
    question: 'Qual é o método de fechamento do Chapéu de Caubói?',
    answer: 'O Chapéu de Caubói possui uma tira de couro com fivela ajustável para um ajuste seguro.'
  },
  {
    productId: 4,
    userName: 'Isabela',
    date: '20/01/2023',
    question: 'O Chapéu Azul oferece proteção contra raios UV?',
    answer: 'Sim, o Chapéu Azul possui um revestimento que oferece proteção contra raios UV.'
  },
  {
    productId: 4,
    userName: 'Gustavo',
    date: '21/01/2023',
    question: 'O Chapéu Azul é dobrável para facilitar o transporte?',
    answer: 'Sim, o Chapéu Azul pode ser dobrado para facilitar o transporte em bolsas ou mochilas.'
  },
];

export default { products, comments, questions };
