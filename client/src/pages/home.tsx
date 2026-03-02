import { motion } from "framer-motion";
import { Star, ShieldCheck, Lock, CheckCircle } from "lucide-react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const stories = [
  {
    title: "A Parábola do Guarda-Chuva",
    text: "Matias era um guarda-chuva muito teimoso. Ele não queria se abrir porque tinha medo de se molhar. Certo dia, ele conheceu um menino e percebeu que, ao proteger os outros, encontrava seu verdadeiro propósito.",
    image: "/images/umbrella.png",
    bg: "bg-[#D4BBE8]",
    textColor: "text-[#2C1A0E]",
  },
  {
    title: "A Parábola do Carrinho Amarelo",
    text: "O carrinho queria ser o mais rápido de todos, mas vivia quebrando. Um dia, aprendeu que o mais importante não era chegar primeiro, mas sim aproveitar a viagem com segurança e ajudar quem precisa no caminho.",
    image: "/images/car.png",
    bg: "bg-[#FDF6E3]",
    textColor: "text-[#2C1A0E]",
  },
  {
    title: "A Parábola da Florzinha Murcha",
    text: "A florzinha chorava porque o sol estava muito quente. Mas logo a nuvem trouxe a chuva, e ela percebeu que precisava de dias difíceis para poder crescer e florescer mais forte.",
    image: "/images/flower.png",
    bg: "bg-[#5D4037]",
    textColor: "text-[#FDF6E3]",
  },
  {
    title: "A Parábola da Raposinha Egoísta",
    text: "A raposinha não queria dividir suas frutas com os amigos. Quando o inverno chegou, ela descobriu que a verdadeira riqueza é ter amigos para compartilhar os momentos bons e ruins.",
    image: "/images/fox-story.png",
    bg: "bg-[#27272A]",
    textColor: "text-[#FDF6E3]",
  },
  {
    title: "A Parábola do Coala Medroso",
    text: "O coala tinha medo de descer da árvore. Com a ajuda de um passarinho, ele entendeu que o mundo lá embaixo é cheio de maravilhas quando temos coragem de explorar coisas novas.",
    image: "/images/koala.png",
    bg: "bg-[#E8D5B0]",
    textColor: "text-[#2C1A0E]",
  },
  {
    title: "A Parábola da Estrelinha Apagada",
    text: "A estrelinha achava que seu brilho era muito fraco perto da lua. Até que uma criança sorriu para ela no escuro, e ela entendeu que todo brilho faz diferença na escuridão.",
    image: "/images/star.png",
    bg: "bg-[#1C1C1E]",
    textColor: "text-[#FDF6E3]",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF6E3] text-[#2C1A0E] font-body w-full flex flex-col items-center">
      <div className="w-full max-w-[680px] bg-[#FDF6E3] shadow-[0_0_40px_rgba(0,0,0,0.1)] flex flex-col relative overflow-hidden">
        
        {/* TOP REVIEWS */}
        <section className="pt-10 pb-6 flex flex-col items-center text-center px-4">
           <div className="flex flex-col items-center justify-center gap-3 mb-4">
             <div className="flex gap-1">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-7 h-7 fill-[#FFB800] text-[#FFB800]" />
               ))}
             </div>
             <div className="flex items-center gap-3 mt-2">
               <div className="flex -space-x-3">
                 <img src="https://i.pravatar.cc/100?img=1" className="w-12 h-12 rounded-full border-[3px] border-[#FDF6E3] object-cover" alt="User" />
                 <img src="https://i.pravatar.cc/100?img=5" className="w-12 h-12 rounded-full border-[3px] border-[#FDF6E3] object-cover" alt="User" />
                 <img src="https://i.pravatar.cc/100?img=9" className="w-12 h-12 rounded-full border-[3px] border-[#FDF6E3] object-cover" alt="User" />
                 <img src="https://i.pravatar.cc/100?img=12" className="w-12 h-12 rounded-full border-[3px] border-[#FDF6E3] object-cover" alt="User" />
               </div>
             </div>
             <span className="text-[1rem] text-[#7A6652] font-bold tracking-wide mt-1">+2.148 avaliações</span>
           </div>
        </section>

        {/* HERO CONTENT */}
        <section className="px-6 flex flex-col text-center">
          <h1 className="font-heading text-3xl md:text-[2.2rem] font-bold leading-[1.2] text-[#2C1A0E] mb-6">
            1001 Parábolas Kids — Ensine com Amor e Plante Valores Eternos no Coração dos Pequenos
          </h1>
          <p className="text-[1.1rem] text-[#7A6652] mb-8 leading-[1.6] font-medium px-2">
            Uma coleção moderna e ilustrada com histórias bíblicas adaptadas para crianças. Crie momentos de fé e conexão — com parábolas simples que ensinam amor, coragem, generosidade e propósito.
          </p>
        </section>

        {/* DARK BROWN BANNER - PRODUCT */}
        <section className="bg-[#3D2314] flex flex-col items-center relative w-full pt-12 pb-12 px-6">
           <FadeIn className="w-full flex justify-center mb-8">
             <img 
               src="/images/product-mockup.png" 
               alt="Coleção 1001 Parábolas" 
               className="w-[95%] max-w-[480px] h-auto object-contain drop-shadow-2xl" 
               onError={(e) => {
                 e.currentTarget.src = "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop";
               }}
             />
           </FadeIn>

           <FadeIn className="w-full max-w-[500px]">
             <p className="text-[#FDF6E3] text-center font-bold text-[1.15rem] leading-[1.5]">
               Feito para pais, professores e líderes que querem mais do que entreter: querem educar com fé para um futuro brilhante.
             </p>
           </FadeIn>
        </section>

        {/* KIDS READING IMAGE */}
        <section className="px-6 py-12 flex flex-col items-center bg-[#FDF6E3]">
           <FadeIn className="w-full max-w-[500px]">
             <p className="text-center font-bold text-[#7A6652] mb-4 text-sm tracking-widest uppercase">Um momento mágico todos os dias</p>
             <div className="w-full relative rounded-2xl overflow-hidden shadow-xl border-[8px] border-white">
                <img 
                  src="/images/reading-kids.png" 
                  alt="Kids reading" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop";
                  }}
                />
             </div>
             <div className="bg-white rounded-2xl p-6 shadow-md mt-6 border border-[#E8D5B0] text-center relative mx-4">
               <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[14px] border-l-transparent border-r-transparent border-b-white"></div>
               <p className="text-[#2C1A0E] font-bold text-[1.15rem] leading-snug">
                 "Meu filho não quer mais saber de celular antes de dormir, ele mesmo pede as historinhas agora ❤️"
               </p>
             </div>
           </FadeIn>
        </section>

        {/* SOCIAL PROOF (DARK WHATSAPP PRINTS) */}
        <section className="bg-[#1C1C1E] py-16 flex flex-col items-center w-full">
          <FadeIn>
            <h2 className="font-heading text-[1.6rem] font-bold text-center mb-10 px-8 text-[#FDF6E3] leading-tight">
              Veja o que as mães que compraram estão falando:
            </h2>
          </FadeIn>

          <div className="w-full max-w-[450px] px-5 space-y-8">
            {/* Dark Theme Whatsapp */}
            <FadeIn delay={0.1}>
              <div className="bg-[#0B141A] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="bg-[#202C33] text-white p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img src="https://i.pravatar.cc/100?img=32" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#E9EDEF]">Camila Oliveira</p>
                    <p className="text-xs text-[#8696A0]">visto por último hoje às 14:32</p>
                  </div>
                </div>
                <div className="bg-[#0B141A] p-5 flex flex-col gap-3">
                  <div className="bg-[#005C4B] p-3 rounded-xl rounded-tr-none shadow-sm text-[15px] text-[#E9EDEF] self-end max-w-[85%] relative">
                    <p>Gente, acabei de receber as histórias. Que material incrível! As ilustrações são perfeitas e a mensagem de cada parábola é muito profunda.</p>
                    <span className="text-[10px] text-[#8696A0] absolute bottom-1 right-2">14:15</span>
                  </div>
                  <div className="bg-[#005C4B] p-3 rounded-xl rounded-tr-none shadow-sm text-[15px] text-[#E9EDEF] self-end max-w-[85%] relative">
                    <p>Meus filhos amaram a da Raposinha. Já lemos 3 vezes seguidas! 😂</p>
                    <span className="text-[10px] text-[#8696A0] absolute bottom-1 right-2">14:16</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-[#0B141A] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="bg-[#202C33] text-white p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img src="https://i.pravatar.cc/100?img=47" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#E9EDEF]">Juliana Silva</p>
                    <p className="text-xs text-[#8696A0]">online</p>
                  </div>
                </div>
                <div className="bg-[#0B141A] p-5 flex flex-col gap-3">
                  <div className="bg-[#202C33] p-3 rounded-xl rounded-tl-none shadow-sm text-[15px] text-[#E9EDEF] self-start max-w-[85%] relative">
                    <p>Amiga, valeu cada centavo. Usei no culto infantil domingo e prenderam a atenção das crianças do começo ao fim.</p>
                    <span className="text-[10px] text-[#8696A0] absolute bottom-1 right-2">10:45</span>
                  </div>
                  <div className="bg-[#005C4B] p-3 rounded-xl rounded-tr-none shadow-sm text-[15px] text-[#E9EDEF] self-end max-w-[85%] relative">
                    <p>Nossa, que bênção! Vou comprar agora mesmo pra minha turminha tbm. O link que vc mandou ainda tá valendo?</p>
                    <span className="text-[10px] text-[#8696A0] absolute bottom-1 right-2">10:50</span>
                  </div>
                  <div className="bg-[#202C33] p-3 rounded-xl rounded-tl-none shadow-sm text-[15px] text-[#E9EDEF] self-start max-w-[85%] relative">
                    <p>Sim!! Compra logo que vale muito a pena.</p>
                    <span className="text-[10px] text-[#8696A0] absolute bottom-1 right-2">10:52</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* STORIES SHOWCASE */}
        <section className="flex flex-col w-full bg-[#1C1C1E]">
           <div className="py-12 text-center px-6">
             <h2 className="font-heading text-2xl font-bold text-[#FDF6E3]">
               Conheça algumas das histórias...
             </h2>
           </div>

           <div className="flex flex-col w-full">
             {stories.map((story, i) => (
               <div key={i} className={`w-full p-8 md:p-10 flex flex-col items-center text-center ${story.bg} border-y-4 border-[#1C1C1E]`}>
                 <div className="w-[180px] md:w-[200px] mb-6">
                   <img 
                     src={story.image} 
                     alt={story.title} 
                     className="w-full h-auto drop-shadow-xl animate-in zoom-in duration-1000" 
                     onError={(e) => e.currentTarget.style.display = 'none'}
                   />
                 </div>
                 <div className="flex-1 max-w-[450px]">
                   <p className={`text-[12px] font-bold uppercase tracking-widest mb-2 opacity-60 ${story.textColor}`}>CONHEÇA A HISTÓRIA</p>
                   <h3 className={`font-heading text-[1.6rem] font-bold mb-4 ${story.textColor}`}>{story.title}</h3>
                   <p className={`font-body text-[1.1rem] leading-[1.6] opacity-90 ${story.textColor} italic`}>
                     "{story.text}"
                   </p>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="bg-[#1C1C1E] p-10 w-full flex justify-center">
             <button className="w-full max-w-[400px] bg-[#22C55E] hover:bg-[#16A34A] text-white font-heading text-[1.2rem] md:text-[1.4rem] font-bold py-5 px-6 rounded-2xl shadow-[0_8px_0_#15803D] active:translate-y-[8px] active:shadow-[0_0px_0_#15803D] transition-all flex items-center justify-center text-center leading-tight">
               QUERO MINHA COLEÇÃO
             </button>
           </div>
        </section>

        {/* CHECKOUT FORM 1 */}
        <section className="bg-[#FDF6E3] px-6 py-14 flex flex-col items-center">
           <div className="w-full max-w-[450px]">
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div className="flex flex-col gap-1">
                 <input type="text" placeholder="Nome Completo" className="w-full p-4 rounded-xl border-2 border-[#D4B896] bg-white shadow-sm focus:outline-none focus:border-[#F5A623] transition-colors" />
               </div>
               <div className="flex flex-col gap-1">
                 <input type="email" placeholder="E-mail" className="w-full p-4 rounded-xl border-2 border-[#D4B896] bg-white shadow-sm focus:outline-none focus:border-[#F5A623] transition-colors" />
               </div>
               <div className="flex flex-col gap-1">
                 <input type="tel" placeholder="Celular (WhatsApp)" className="w-full p-4 rounded-xl border-2 border-[#D4B896] bg-white shadow-sm focus:outline-none focus:border-[#F5A623] transition-colors" />
               </div>
               
               <button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-heading text-[1.3rem] font-bold py-5 px-6 rounded-xl shadow-[0_6px_0_#15803D] active:translate-y-[6px] active:shadow-[0_0px_0_#15803D] transition-all flex flex-col items-center justify-center mt-6">
                 <span>COMPRAR AGORA</span>
               </button>
             </form>
             
             <div className="flex flex-col items-center justify-center mt-8 text-center text-[#7A6652] space-y-2">
               <div className="flex items-center gap-1 opacity-70">
                 <Lock className="w-4 h-4" />
                 <span className="text-xs font-bold uppercase tracking-wider">Pagamento 100% Seguro</span>
               </div>
               <div className="flex gap-2 items-center justify-center opacity-60">
                 <img src="https://logospng.org/download/pix/logo-pix-icone-1024.png" className="h-6 object-contain grayscale" alt="Pix" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" className="h-6 object-contain grayscale" alt="Mastercard" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-6 object-contain grayscale" alt="Visa" />
               </div>
             </div>
           </div>
        </section>

        {/* WHAT YOU GET (CARDS) */}
        <section className="bg-[#3D2314] px-6 py-16 flex flex-col items-center w-full">
          <h2 className="font-heading text-[1.8rem] font-bold text-[#FDF6E3] mb-10 text-center">
            Veja o que você vai receber:
          </h2>
          
          <div className="flex flex-col gap-6 w-full max-w-[450px]">
            {/* Card 1 */}
            <div className="bg-[#FDF6E3] rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden border-b-8 border-[#F5A623]">
               <div className="w-24 h-24 mb-6 flex items-center justify-center bg-[#F5A623]/20 rounded-full">
                 <img src="https://cdn-icons-png.flaticon.com/512/3389/3389081.png" className="w-14 h-14 filter invert-[.3] sepia-[1] saturate-[5] hue-rotate-[10deg]" alt="Book" />
               </div>
               <h3 className="text-[#2C1A0E] font-heading text-[1.6rem] font-bold mb-3">As 1001 Parábolas Kids</h3>
               <p className="text-[#7A6652] text-[1.1rem] leading-[1.6]">Coleção digital completa com histórias incríveis, prontas para ler no celular, tablet ou imprimir.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FDF6E3] rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden border-b-8 border-[#F5A623]">
               <div className="absolute top-0 right-0 bg-[#F5A623] text-white font-bold text-[11px] px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">Bônus Especial</div>
               <div className="w-24 h-24 mb-6 flex items-center justify-center bg-[#F5A623]/20 rounded-full mt-2">
                 <img src="https://cdn-icons-png.flaticon.com/512/2855/2855589.png" className="w-14 h-14 filter invert-[.3] sepia-[1] saturate-[5] hue-rotate-[10deg]" alt="Gold Star" />
               </div>
               <h3 className="text-[#2C1A0E] font-heading text-[1.6rem] font-bold mb-3">Guia de Conversa</h3>
               <p className="text-[#7A6652] text-[1.1rem] leading-[1.6]">Perguntas prontas ao final de cada história para iniciar conversas profundas com seu filho.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FDF6E3] rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden border-b-8 border-[#F5A623]">
               <div className="absolute top-0 right-0 bg-[#F5A623] text-white font-bold text-[11px] px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">Bônus Especial</div>
               <div className="w-24 h-24 mb-6 flex items-center justify-center bg-[#F5A623]/20 rounded-full mt-2">
                 <img src="https://cdn-icons-png.flaticon.com/512/3069/3069172.png" className="w-14 h-14 filter invert-[.3] sepia-[1] saturate-[5] hue-rotate-[10deg]" alt="Hands" />
               </div>
               <h3 className="text-[#2C1A0E] font-heading text-[1.6rem] font-bold mb-3">Atividades para Imprimir</h3>
               <p className="text-[#7A6652] text-[1.1rem] leading-[1.6]">Desenhos para colorir e atividades lúdicas baseadas nas parábolas.</p>
            </div>
          </div>
        </section>

        {/* CHECKOUT FORM 2 (REPLICATED) */}
        <section className="bg-[#FDF6E3] px-6 py-14 flex flex-col items-center">
           <div className="w-full max-w-[450px]">
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div className="flex flex-col gap-1">
                 <input type="text" placeholder="Nome Completo" className="w-full p-4 rounded-xl border-2 border-[#D4B896] bg-white shadow-sm focus:outline-none focus:border-[#F5A623] transition-colors" />
               </div>
               <div className="flex flex-col gap-1">
                 <input type="email" placeholder="E-mail" className="w-full p-4 rounded-xl border-2 border-[#D4B896] bg-white shadow-sm focus:outline-none focus:border-[#F5A623] transition-colors" />
               </div>
               <div className="flex flex-col gap-1">
                 <input type="tel" placeholder="Celular (WhatsApp)" className="w-full p-4 rounded-xl border-2 border-[#D4B896] bg-white shadow-sm focus:outline-none focus:border-[#F5A623] transition-colors" />
               </div>
               
               <button className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-heading text-[1.3rem] font-bold py-5 px-6 rounded-xl shadow-[0_6px_0_#15803D] active:translate-y-[6px] active:shadow-[0_0px_0_#15803D] transition-all flex flex-col items-center justify-center mt-6">
                 <span>COMPRAR AGORA</span>
               </button>
             </form>
           </div>
        </section>

        {/* GUARANTEE */}
        <section className="bg-white py-16 px-6 flex flex-col items-center text-center border-t border-[#E8D5B0]">
          <div className="relative mb-8">
            <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" className="w-36 h-36 object-contain filter invert-[.8] sepia-[1] saturate-[4] hue-rotate-[30deg]" alt="Guarantee Seal" />
            <div className="absolute inset-0 flex items-center justify-center flex-col pt-3">
              <span className="font-bold text-[#D97706] text-2xl">7</span>
              <span className="font-bold text-[#D97706] text-xs uppercase">Dias</span>
            </div>
          </div>
          <h2 className="font-heading text-[2rem] font-bold text-[#2C1A0E] mb-5">
            Risco Zero! Garantia de 7 Dias.
          </h2>
          <p className="text-[#7A6652] text-[1.15rem] leading-[1.6] max-w-[500px] font-medium">
            Se por qualquer motivo você achar que a coleção 1001 Parábolas Kids não é para sua família, basta nos enviar um único e-mail dentro de 7 dias e devolveremos 100% do seu dinheiro. Sem letras miúdas.
          </p>
        </section>
        {/* Seção da Especialista */}
<section className="py-16 px-6 bg-[#FDF6E3]">
  <div className="max-w-[600px] mx-auto text-center">
    <p className="text-sm uppercase tracking-widest text-[#8B6914] mb-4">Quem criou esse material</p>
    <div className="w-24 h-24 rounded-full bg-[#D4A843] mx-auto mb-4 overflow-hidden">
      <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Ana Paula Mendes" className="w-full h-full object-cover"/>
    </div>
    <h3 className="text-2xl font-bold text-[#2C1A0E] mb-2">Ana Paula Mendes</h3>
    <p className="text-[#8B6914] mb-4 font-medium">Pedagoga e Educadora Cristã</p>
    <p className="text-[#2C1A0E]/80 leading-relaxed">Com mais de 10 anos de experiência trabalhando com crianças, Ana Paula desenvolveu as 1001 Parábolas Kids para ajudar famílias a criar momentos de fé e aprendizado. Seu objetivo é transformar histórias simples em lições eternas no coração dos pequenos.</p>
  </div>
</section>

{/* FAQ */}
<section className="py-16 px-6 bg-[#2C1A0E]">
  <div className="max-w-[600px] mx-auto">
    <h2 className="text-3xl font-bold text-[#D4A843] text-center mb-10">Perguntas Frequentes</h2>
    {[
      { q: "Para qual idade é indicado?", a: "Para crianças de 3 a 12 anos." },
      { q: "Como recebo o material após a compra?", a: "O acesso é enviado imediatamente para o seu e-mail." },
      { q: "Funciona no celular?", a: "Sim, pode ser lido no celular, tablet ou computador, ou impresso." },
      { q: "Posso usar em sala de aula ou culto infantil?", a: "Sim, o material é perfeito para uso em casa, escola e igreja." },
      { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia. Se não ficar satisfeito, devolvemos seu dinheiro." }
    ].map((item, i) => (
      <div key={i} className="mb-6 border-b border-[#D4A843]/30 pb-6">
        <p className="font-bold text-[#FDF6E3] mb-2">❓ {item.q}</p>
        <p className="text-[#FDF6E3]/70">{item.a}</p>
      </div>
    ))}
  </div>
</section>
        {/* FOOTER */}
        <footer className="bg-[#1C1C1E] text-center py-14 text-[12px] text-[#FDF6E3]/40 px-6">
          <div className="flex justify-center gap-6 mb-8 font-medium text-[#FDF6E3]/60">
            <a href="#" className="hover:text-white transition-colors underline">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors underline">Políticas de Privacidade</a>
          </div>
          <p className="max-w-[500px] mx-auto leading-[1.8] opacity-70">
            © 2026 1001 Parábolas Kids. Todos os direitos reservados.<br/><br/>
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
        </footer>

      </div>
    </div>
  );
}
