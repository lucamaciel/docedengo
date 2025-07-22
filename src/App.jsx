import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/logo_docedengo.jpeg';

// Componentes da página inicial
const HomePage = () => (
  <div>
    {/* Hero Section */}
    <section className="hero-bg min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-shadow">
            Doce Dengo
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-montserrat">
            Transformando sonhos em realidade desde 1987
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Buffet, restaurante e lanchonete de referência em Belo Horizonte, 
            com sabores inesquecíveis e atendimento de excelência.
          </p>
          <div className="space-x-4">
            <button className="btn-primary text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg">
              Conhecer Serviços
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-primary transition">
              Entrar em Contato
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Sobre Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossa História
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            A Doce Dengo, desde 1987, presta serviços de qualidade na área de Buffet, 
            restaurante e lanchonete, se destacando como referência em Belo Horizonte.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nosso objetivo é transformar sonhos em realidade, com sabores inesquecíveis, 
            aliados a um atendimento cortês e eficiente de uma equipe preparada para 
            atender com o máximo de atenção e profissionalismo.
          </p>
        </div>
      </div>
    </section>

    {/* Serviços Section */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-hover bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-red rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">🍽️</span>
            </div>
            <h3 className="font-montserrat text-xl font-bold mb-4">Restaurante</h3>
            <p className="text-gray-600 mb-6">
              Venha almoçar conosco e provar nossos deliciosos salgados e docinhos.
            </p>
            <p className="text-sm text-gray-500">
              Seg-Sex: 10:00-18:00 | Sáb: 10:00-14:00
            </p>
          </div>
          <div className="card-hover bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-gold rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">🎂</span>
            </div>
            <h3 className="font-montserrat text-xl font-bold mb-4">Buffet</h3>
            <p className="text-gray-600 mb-6">
              Eventos únicos e especiais com momentos marcantes e máxima atenção aos detalhes.
            </p>
            <button className="text-primary font-semibold hover:underline">
              Ver Galeria
            </button>
          </div>
          <div className="card-hover bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-red rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">📋</span>
            </div>
            <h3 className="font-montserrat text-xl font-bold mb-4">Encomendas</h3>
            <p className="text-gray-600 mb-6">
              Faça sua encomenda personalizada para ocasiões especiais.
            </p>
            <button className="text-primary font-semibold hover:underline">
              Fazer Pedido
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-primary py-16">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
          Pronto para uma experiência inesquecível?
        </h2>
        <p className="text-xl mb-8">
          Entre em contato conosco e descubra como podemos tornar seu evento especial.
        </p>
        <button className="bg-white text-primary px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-gray-100 transition">
          Falar Conosco
        </button>
      </div>
    </section>
  </div>
);
const RestaurantePage = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-red py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
          Restaurante e Lanchonete
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Venha almoçar conosco e provar os nossos deliciosos salgados e docinhos
        </p>
      </div>
    </section>

    {/* Horários */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="font-playfair text-3xl font-bold mb-8 text-gray-800">
              Horário de Funcionamento
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-montserrat text-xl font-bold mb-4 text-primary">
                  Segunda a Sexta-feira
                </h3>
                <p className="text-2xl font-bold text-gray-700">10:00 às 18:00</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-montserrat text-xl font-bold mb-4 text-primary">
                  Sábado
                </h3>
                <p className="text-2xl font-bold text-gray-700">10:00 às 14:00</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-8">
              Será um prazer recebê-lo em nosso ambiente acolhedor!
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Produtos */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
            Nossos Produtos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-red rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-5xl">🥐</span>
            </div>
            <h3 className="font-montserrat text-2xl font-bold mb-4">Salgados</h3>
            <p className="text-gray-600 leading-relaxed">
              Uma variedade de salgados frescos e saborosos, preparados diariamente 
              com ingredientes selecionados e muito carinho.
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-gold rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-5xl">🍓</span>
            </div>
            <h3 className="font-montserrat text-2xl font-bold mb-4">Docinhos</h3>
            <p className="text-gray-600 leading-relaxed">
              Doces irresistíveis como nossos famosos bombons de morango e outras 
              delícias que conquistam o paladar de nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="font-playfair text-3xl font-bold mb-6">
          Venha nos visitar!
        </h2>
        <p className="text-xl mb-8">
          Experimente nossos sabores únicos em um ambiente acolhedor
        </p>
        <button className="bg-white text-primary px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-gray-100 transition">
          Ver Localização
        </button>
      </div>
    </section>
  </div>
);
const BuffetPage = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-gold py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
          Buffet
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Eventos únicos e especiais com momentos marcantes e máxima atenção aos detalhes
        </p>
      </div>
    </section>

    {/* Filosofia */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-8">
            Nossa Filosofia
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Acreditamos que cada evento é único e especial, por isso buscamos 
            incessantemente honrar o nosso compromisso de proporcionar aos nossos 
            clientes, momentos marcantes com um toque de carinho e máxima atenção 
            a todos os detalhes.
          </p>
          <p className="text-xl font-montserrat font-semibold text-primary">
            Conheça as soluções perfeitas para o seu evento...
          </p>
        </div>
      </div>
    </section>

    {/* Tipos de Eventos */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
            Tipos de Eventos
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-hover bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-gold flex items-center justify-center">
              <span className="text-white text-6xl">🎂</span>
            </div>
            <div className="p-6">
              <h3 className="font-montserrat text-xl font-bold mb-4">Aniversários</h3>
              <p className="text-gray-600">
                Celebre momentos especiais com decoração personalizada e cardápio exclusivo.
              </p>
            </div>
          </div>
          <div className="card-hover bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-red flex items-center justify-center">
              <span className="text-white text-6xl">💒</span>
            </div>
            <div className="p-6">
              <h3 className="font-montserrat text-xl font-bold mb-4">Casamentos</h3>
              <p className="text-gray-600">
                Torne seu dia especial ainda mais memorável com nosso serviço completo.
              </p>
            </div>
          </div>
          <div className="card-hover bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-gold flex items-center justify-center">
              <span className="text-white text-6xl">🏢</span>
            </div>
            <div className="p-6">
              <h3 className="font-montserrat text-xl font-bold mb-4">Corporativo</h3>
              <p className="text-gray-600">
                Eventos empresariais com o profissionalismo que sua empresa merece.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Diferenciais */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
            Nossos Diferenciais
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">👨‍🍳</span>
            </div>
            <h3 className="font-montserrat font-bold mb-2">Equipe Especializada</h3>
            <p className="text-gray-600 text-sm">Profissionais experientes e dedicados</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🎨</span>
            </div>
            <h3 className="font-montserrat font-bold mb-2">Decoração Exclusiva</h3>
            <p className="text-gray-600 text-sm">Ambientação personalizada para cada evento</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🍽️</span>
            </div>
            <h3 className="font-montserrat font-bold mb-2">Cardápio Variado</h3>
            <p className="text-gray-600 text-sm">Opções para todos os gostos e ocasiões</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">⭐</span>
            </div>
            <h3 className="font-montserrat font-bold mb-2">Atendimento Premium</h3>
            <p className="text-gray-600 text-sm">Cuidado especial em cada detalhe</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-accent py-16">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="font-playfair text-3xl font-bold mb-6">
          Pronto para planejar seu evento?
        </h2>
        <p className="text-xl mb-8">
          Entre em contato conosco e vamos criar algo especial juntos
        </p>
        <button className="bg-white text-accent px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-gray-100 transition">
          Solicitar Orçamento
        </button>
      </div>
    </section>
  </div>
);
const EncomendasPage = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-red py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
          Encomendas
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Faça sua encomenda personalizada para ocasiões especiais
        </p>
      </div>
    </section>

    {/* Formulário de Encomenda */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
              Solicite sua Encomenda
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              Preencha o formulário abaixo e entraremos em contato para finalizar sua encomenda
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-montserrat font-semibold mb-2">
                  Nome Completo *
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-montserrat font-semibold mb-2">
                  Telefone *
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="(31) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-montserrat font-semibold mb-2">
                  Email *
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-montserrat font-semibold mb-2">
                  Data do Evento
                </label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-montserrat font-semibold mb-2">
                  Tipo de Produto *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Selecione o tipo de produto</option>
                  <option>Salgados</option>
                  <option>Docinhos</option>
                  <option>Bolos</option>
                  <option>Bombons</option>
                  <option>Kit Festa</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-montserrat font-semibold mb-2">
                  Detalhes da Encomenda *
                </label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Descreva sua encomenda: quantidade, sabores, decoração especial, etc."
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button 
                  type="submit"
                  className="btn-primary text-white px-12 py-4 rounded-full font-montserrat font-semibold text-lg"
                >
                  Enviar Solicitação
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* Produtos Disponíveis */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
            Produtos Disponíveis
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center card-hover">
            <div className="w-16 h-16 bg-gradient-red rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🥐</span>
            </div>
            <h3 className="font-montserrat font-bold mb-2">Salgados</h3>
            <p className="text-gray-600 text-sm">Coxinha, pão de açúcar, risole, pastel e muito mais</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center card-hover">
            <div className="w-16 h-16 bg-gradient-gold rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🍰</span>
            </div>
            <h3 className="font-montserrat font-bold mb-2">Bolos</h3>
            <p className="text-gray-600 text-sm">Bolos personalizados para todas as ocasiões</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center card-hover">
            <div className="w-16 h-16 bg-gradient-red rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🍓</span>
            </div>
            <h3 className="font-montserrat font-bold mb-2">Bombons</h3>
            <p className="text-gray-600 text-sm">Bombons de morango e outras delícias</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center card-hover">
            <div className="w-16 h-16 bg-gradient-gold rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🧁</span>
            </div>
            <h3 className="font-montserrat font-bold mb-2">Docinhos</h3>
            <p className="text-gray-600 text-sm">Brigadeiros, beijinhos, cajuzinhos e mais</p>
          </div>
        </div>
      </div>
    </section>

    {/* Informações Importantes */}
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-playfair text-3xl font-bold mb-8">
          Informações Importantes
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-montserrat font-bold mb-2">Prazo Mínimo</h3>
            <p>48 horas de antecedência para encomendas simples</p>
          </div>
          <div>
            <h3 className="font-montserrat font-bold mb-2">Pagamento</h3>
            <p>50% na confirmação e 50% na retirada</p>
          </div>
          <div>
            <h3 className="font-montserrat font-bold mb-2">Retirada</h3>
            <p>Produtos frescos para retirada no local</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
const PratosDoDialPage = () => {
  const pratosDodia = [
    "Strogonoff",
    "Bife à Rolê com Bolinho de Arroz",
    "Tropeiro", 
    "Bife à Milanesa e Purê de Batata",
    "Feijoada",
    "Feijoada",
    "Frango à Milanesa e Purê de Moranga",
    "Costelinha e Farofa de Couve",
    "Frango Ensopado com Angu",
    "Bife Acebolado com Batata Frita",
    "Feijoada",
    "Feijoada"
  ];

  const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  
  // Função para obter o prato do dia atual
  const getPratoAtual = () => {
    const hoje = new Date();
    const diaSemana = hoje.getDay(); // 0 = domingo, 1 = segunda, etc.
    
    if (diaSemana === 0) return "Fechado - Domingo";
    
    // Calcular quantos dias úteis se passaram desde uma data base
    const dataBase = new Date('2025-01-06'); // Uma segunda-feira
    const diffTime = hoje.getTime() - dataBase.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Contar apenas dias úteis (segunda a sábado)
    let diasUteis = 0;
    for (let i = 0; i <= diffDays; i++) {
      const data = new Date(dataBase);
      data.setDate(dataBase.getDate() + i);
      const dia = data.getDay();
      if (dia >= 1 && dia <= 6) diasUteis++;
    }
    
    const indice = (diasUteis - 1) % 12;
    return pratosDodia[indice];
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-gold py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Pratos do Dia
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Descubra nossos deliciosos pratos especiais que variam ao longo dos dias
          </p>
        </div>
      </section>

      {/* Prato de Hoje */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
              Prato de Hoje
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-gradient-red rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🍽️</span>
              </div>
              <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
                {getPratoAtual()}
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Servido hoje no nosso restaurante com todo carinho e qualidade
              </p>
              <div className="bg-primary text-white px-6 py-3 rounded-full inline-block font-montserrat font-semibold">
                R$ 23,90
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendário de Pratos */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
              Calendário de Pratos
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossos pratos seguem um ciclo de 12 dias. Confira o que será servido nos próximos dias!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pratosDodia.map((prato, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-gray-800">Dia {index + 1}</h3>
                    <p className="text-sm text-gray-500">Ciclo de 12 dias</p>
                  </div>
                </div>
                <h4 className="font-playfair text-xl font-bold text-gray-800 mb-3">
                  {prato}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-montserrat font-bold text-lg">
                    R$ 23,90
                  </span>
                  <span className="text-sm text-gray-500">
                    Segunda a Sábado
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações Importantes */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-8">
            Como Funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-2xl">🔄</span>
              </div>
              <h3 className="font-montserrat font-bold mb-2">Ciclo de 12 Dias</h3>
              <p>Os pratos se repetem a cada 12 dias úteis</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-2xl">📅</span>
              </div>
              <h3 className="font-montserrat font-bold mb-2">Segunda a Sábado</h3>
              <p>Funcionamos de segunda a sábado, fechado aos domingos</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-2xl">⏰</span>
              </div>
              <h3 className="font-montserrat font-bold mb-2">Horário</h3>
              <p>10:00 às 18:00 (Seg-Sex) | 10:00 às 14:00 (Sáb)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContatoPage = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-red py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
          Contato
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Entre em contato conosco para mais informações
        </p>
      </div>
    </section>

    {/* Informações de Contato */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-8">
              Fale Conosco
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg mb-2">Endereço</h3>
                  <p className="text-gray-600">
                    Av. Coronel José Dias Bicalho, 899<br/>
                    Pampulha - Belo Horizonte/MG
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg mb-2">Telefone</h3>
                  <p className="text-gray-600">(31) 3492-1188</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">docedengo@docedengo.com.br</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🕒</span>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 10:00 às 18:00<br/>
                    Sábado: 10:00 às 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-6">
              Envie uma Mensagem
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-montserrat font-semibold mb-2">
                  Nome Completo *
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-montserrat font-semibold mb-2">
                  Email *
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-montserrat font-semibold mb-2">
                  Telefone
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="(31) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-montserrat font-semibold mb-2">
                  Assunto *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Selecione o assunto</option>
                  <option>Informações sobre Buffet</option>
                  <option>Encomendas</option>
                  <option>Reservas no Restaurante</option>
                  <option>Orçamento</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-montserrat font-semibold mb-2">
                  Mensagem *
                </label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Digite sua mensagem..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full btn-primary text-white py-4 rounded-lg font-montserrat font-semibold text-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* Mapa */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
            Nossa Localização
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Estamos localizados na Pampulha, em Belo Horizonte
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📍</span>
              </div>
              <p className="text-gray-600 font-montserrat">
                Av. Coronel José Dias Bicalho, 899<br/>
                Pampulha - Belo Horizonte/MG
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* WhatsApp CTA */}
    <section className="bg-green-500 py-16">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="font-playfair text-3xl font-bold mb-6">
          Fale conosco pelo WhatsApp
        </h2>
        <p className="text-xl mb-8">
          Atendimento rápido e personalizado
        </p>
        <button className="bg-white text-green-500 px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-gray-100 transition flex items-center mx-auto">
          <span className="mr-2">💬</span>
          Chamar no WhatsApp
        </button>
      </div>
    </section>
  </div>
);

const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="Doce Dengo Logo" className="h-16" />
      </Link>
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-gray-600 hover:text-primary transition">Início</Link>
        <Link to="/restaurante" className="text-gray-600 hover:text-primary transition">Restaurante</Link>
        <Link to="/buffet" className="text-gray-600 hover:text-primary transition">Buffet</Link>
        <Link to="/pratos-do-dia" className="text-gray-600 hover:text-primary transition">Pratos do Dia</Link>
        <Link to="/encomendas" className="text-gray-600 hover:text-primary transition">Encomendas</Link>
        <Link to="/contato" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition">Contato</Link>
      </div>
      <div className="md:hidden">
        {/* Botão para menu mobile */}
      </div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; 2025 Doce Dengo. Todos os direitos reservados.</p>
      <p>Av. Coronel José Dias Bicalho, 899 - Pampulha | (31) 3492-1188</p>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="font-opensans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurante" element={<RestaurantePage />} />
            <Route path="/buffet" element={<BuffetPage />} />
            <Route path="/pratos-do-dia" element={<PratosDoDialPage />} />
            <Route path="/encomendas" element={<EncomendasPage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


