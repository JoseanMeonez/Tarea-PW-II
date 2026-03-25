export default function Home() {
  const servicios = [
    { nombre: "Mantenimiento Preventivo", precio: "L. 500", img: "/servicios/mantenimiento.jpg", desc: "Limpieza profunda y cambio de pasta térmica." },
    { nombre: "Revisión General", precio: "L. 300", img: "/servicios/diagnostico.jpg", desc: "Diagnóstico completo de hardware y software." },
    { nombre: "Instalación de Windows", precio: "L. 1,200", img: "/servicios/windows.jpg", desc: "Instalación oficial con licencia y drivers." },
    { nombre: "Reparaciones Variadas", precio: "Cotizar", img: "/servicios/reparacion.jpg", desc: "Cambio de pantallas, teclados y soldaduras." }
  ];

  const inventario = [
    { cat: "Mochilas", nombre: "Mochila Laptop Pro Azul", precio: "L. 1,150", img: "/Productos/mochila_azul.jpg" },
    { cat: "Mochilas", nombre: "Mochila Ejecutiva Negra", precio: "L. 1,250", img: "/Productos/mochila_negra.jpg" },
    { cat: "Mouses", nombre: "Mouse Alámbrico Office", precio: "L. 250", img: "/Productos/mouse_oficina.jpg" },
    { cat: "Mouses", nombre: "Mouse Alámbrico RGB Gaming", precio: "L. 450", img: "/Productos/mouse_rgb.jpg" },
    { cat: "Mouses", nombre: "Logitech G-Pro Wireless", precio: "L. 2,100", img: "/Productos/mouse_logitech.jpg" },
    { cat: "Mouses", nombre: "Razer Viper Wireless", precio: "L. 1,900", img: "/Productos/mouse_razer.jpg" },
    { cat: "Teclados", nombre: "Teclado Membrana Office", precio: "L. 400", img: "/Productos/teclado_oficina_basico.jpg" },
    { cat: "Teclados", nombre: "Teclado Slim Silencioso", precio: "L. 650", img: "/Productos/teclado_oficina_silencioso.jpg" },
    { cat: "Teclados", nombre: "Teclado Mecánico Gaming RGB", precio: "L. 1,550", img: "/Productos/teclado_mecanico.jpg" },
  ];

  const whatsappHref = (item: string) =>
    `https://wa.me/50487505896?text=${encodeURIComponent(`Hola SOPORTECK HN, me interesa: ${item}`)}`;

  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-b border-zinc-800">
        <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black text-blue-500 tracking-tighter uppercase">SOPORTECK HN</h1>
            <p className="text-[10px] text-zinc-500 font-mono">Soporte técnico y periféricos en Honduras</p>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#servicios" className="hover:text-blue-500 transition-colors">Servicios</a>
            <a href="#productos" className="hover:text-purple-500 transition-colors">Catálogo</a>
            <a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a>
            <div className="hidden md:flex items-center gap-4 border-l border-zinc-700 pl-8">
              <span className="text-zinc-400">Tel: <span className="text-white">8750-5896</span></span>
              <a
                href={whatsappHref("Asesoría Técnica")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-white hover:text-black text-white px-5 py-2 rounded-full text-xs font-bold transition-all"
              >
                Asesoría Urgente
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-32 max-w-7xl mx-auto px-8 pb-20 space-y-32">
        <section id="servicios" aria-labelledby="titulo-servicios">
          <div className="text-center mb-16">
            <h2 id="titulo-servicios" className="text-4xl font-extrabold text-blue-500 mb-4 tracking-tight">SERVICIOS TÉCNICOS</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {servicios.map((s) => (
              <article key={s.nombre} className="group border border-zinc-800 rounded-3xl overflow-hidden bg-zinc-900/20 hover:border-blue-500 transition-all duration-300">
                <img src={s.img} alt={s.nombre} className="w-full h-60 object-cover" />
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">{s.nombre}</h3>
                    <span className="bg-blue-900/50 text-blue-400 px-4 py-1 rounded-full text-sm font-bold border border-blue-800">{s.precio}</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed mb-6">{s.desc}</p>
                  <a
                    href={whatsappHref(s.nombre)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-bold hover:text-white transition-colors flex items-center gap-2"
                  >
                    Solicitar Servicio →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="productos" aria-labelledby="titulo-productos">
          <div className="text-center mb-16">
            <h2 id="titulo-productos" className="text-5xl font-black text-purple-500 mb-4 tracking-widest uppercase">CATÁLOGO GAMING</h2>
            <div className="h-1 w-32 bg-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {inventario.map((p) => (
              <article key={p.nombre} className="border border-zinc-800 rounded-3xl overflow-hidden bg-transparent hover:border-purple-500 hover:scale-[1.02] transition-all duration-300 group">
                <img src={p.img} alt={p.nombre} className="w-full h-72 object-cover" />
                <div className="p-6">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">{p.cat}</span>
                  <h3 className="text-xl font-bold mt-2 h-14 leading-tight group-hover:text-purple-400 transition-colors">{p.nombre}</h3>
                  <p className="text-purple-500 text-3xl font-black mt-4">{p.precio}</p>
                  <a
                    href={whatsappHref(p.nombre)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-6 bg-purple-600 hover:bg-white hover:text-black text-white py-4 rounded-2xl font-black transition-all shadow-lg shadow-purple-900/20 text-center"
                  >
                    COMPRAR POR WHATSAPP
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contacto" className="bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-white tracking-tighter">SOPORTECK HN</h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              Líderes en soporte técnico especializado y venta de periféricos de alto rendimiento en San Pedro Sula.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-3">
                <span className="text-blue-500 font-bold">WhatsApp:</span> 
                <a href="https://wa.me/50487505896" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">8750-5896</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-blue-500 font-bold">Email:</span> 
                <a href="mailto:ventas@soporteckhn.com" className="text-zinc-400 hover:text-white transition-colors">ventas@soporteckhn.com</a>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm italic">Ubicación del Taller</h4>
            <div className="p-6 border border-zinc-800 rounded-2xl bg-black">
              <p className="text-zinc-300 font-medium">Ave. Circunvalación, 7 Calle</p>
              <p className="text-zinc-500 text-xs mt-1">San Pedro Sula, Cortés, Honduras</p>
              <p className="text-[10px] text-zinc-700 mt-4 uppercase font-bold tracking-tighter italic">**Ubicación de referencia para demo académica**</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm italic">Nuestras Redes</h4>
            <div className="flex flex-col gap-4 text-sm">
              <a href="https://facebook.com/soporteckhn" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-zinc-500 hover:text-blue-500 transition-colors">
                <span className="bg-zinc-900 p-2 rounded-lg group-hover:bg-blue-500/10 tracking-tighter">FB</span>
                facebook.com/soporteckhn
              </a>
              <a href="https://instagram.com/soporteckhn_gaming" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-zinc-500 hover:text-purple-500 transition-colors">
                <span className="bg-zinc-900 p-2 rounded-lg group-hover:bg-purple-500/10 tracking-tighter">IG</span>
                @soporteckhn_gaming
              </a>
              <a href="https://tiktok.com/@soporteck_tecnico" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors">
                <span className="bg-zinc-900 p-2 rounded-lg group-hover:bg-white/10 tracking-tighter">TK</span>
                @soporteck_tecnico
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center py-8 border-t border-zinc-900 text-[10px] text-zinc-600 uppercase tracking-widest">
          Desarrollado con Next.js 19 • UTH © 2026 Programación Web II
        </div>
      </footer>
    </div>
  );
}
