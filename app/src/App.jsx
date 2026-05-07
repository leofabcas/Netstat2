import React from 'react';
import './index.css';

function App() {
  return (
    <div className="bg-background text-on-background min-h-screen dark">
      

<svg className="noise-overlay">
<filter id="noise">
<feTurbulence baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" type="fractalNoise"></feTurbulence>
</filter>
<rect filter="url(#noise)" height="100%" width="100%" /></rect>
</svg>

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between max-w-5xl px-8 bg-slate-950/40 backdrop-blur-xl rounded-full mt-6 mx-auto w-fit py-3 border border-white/10 shadow-2xl transition-all duration-500">
<div className="text-xl font-black tracking-widest text-white uppercase font-['Plus_Jakarta_Sans']">NETSTAT -AR</div>
<div className="hidden md:flex items-center gap-8 mx-12">
<a className="font-['Plus_Jakarta_Sans'] tracking-tighter uppercase text-xs font-bold text-white border-b border-white/40 pb-1 hover:text-white transition-colors duration-500" href="#network">Network</a>
<a className="font-['Plus_Jakarta_Sans'] tracking-tighter uppercase text-xs font-bold text-white/50 hover:text-white transition-colors duration-500" href="#telemetry">Telemetry</a>
<a className="font-['Plus_Jakarta_Sans'] tracking-tighter uppercase text-xs font-bold text-white/50 hover:text-white transition-colors duration-500" href="#vision">Vision</a>
<a className="font-['Plus_Jakarta_Sans'] tracking-tighter uppercase text-xs font-bold text-white/50 hover:text-white transition-colors duration-500" href="#protocol">Protocol</a>
</div>
<button className="bg-white text-slate-950 px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider magnetic-effect cursor-pointer active:scale-95 transition-all">Connect</button>
</nav>

<section className="relative h-[1024px] w-full overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover grayscale opacity-40" data-alt="A cinematic, low-angle shot of a massive, hyper-modern datacenter corridor filled with glowing blue server racks stretching into infinity. The lighting is moody and high-contrast, featuring deep blacks and electric blue highlights. Atmospheric mist caught in the light beams adds a sense of immense scale and technical mystery. The overall aesthetic is cold, precise, and sophisticated." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq5sKC_eIkEAyWKaXbeHbJQclzX8674_gjGezRHg_pux273gXrGv0ararEGu4tyIk9FFoK3PNpTlzjutILNB4uglh-hgq-E2G_3IWDYA9UOIfzlxmOIUIAv53u9z84oTAuv4ftiLxhLp1omsSRY3fKzwa5GvlEn8Jw_6Vlz5-VdNM2KJ4YGe6vOSGxZ6SMp9f662ltZzaRJhPhUx-1yo3JWVWNXI5UxzlQbjIXK6Dy9tCkkRot1NwFDp7W9PpxwJL1NlPSDIj38yE" />
<div className="absolute inset-0 hero-gradient"></div>
</div>
<div className="relative z-10 flex flex-col justify-end h-full px-margin-global pb-24 max-w-7xl mx-auto">
<div className="max-w-3xl space-y-6">
<h1 className="flex flex-col">
<span className="font-display-lg text-display-lg text-white">Soluciones integrales</span>
<span className="font-drama-italic text-[120px] leading-tight text-primary italic -mt-4">Infraestructura&nbsp;</span>
</h1>
<p className="text-on-surface-variant max-w-xl font-body-standard text-lg opacity-80">Garantizamos interconectividad de máxima calidad, estabilidad y eficiencia para empresas y hogares inteligentes.</p>
<div className="pt-8">
<button className="group flex items-center gap-4 bg-primary text-on-primary px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm magnetic-effect transition-all hover:bg-white hover:text-black">
                        Listos para el cambio?
                        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-margin-global bg-surface-container-lowest" id="telemetry">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-grid">

<div className="lg:col-span-4 space-y-8">
<h2 className="font-headline-md text-headline-md text-white">Experiencia</h2>
<div className="space-y-4 relative h-[300px]">
<div className="glass-panel p-8 rounded-xl absolute w-full transition-all duration-700 opacity-100 translate-y-0">
<span className="text-primary font-telemetry-data text-xs uppercase tracking-widest mb-2 block">Protocol 01</span>
<h4 className="font-bold text-white text-xl">Arquitectura Robusta</h4>
</div>
<div className="glass-panel p-8 rounded-xl absolute w-full transition-all duration-700 opacity-30 translate-y-12 scale-95">
<span className="text-primary font-telemetry-data text-xs uppercase tracking-widest mb-2 block">Protocol 02</span>
<h4 className="font-bold text-white text-xl">Escalabilidad Dinámica</h4>
</div>
<div className="glass-panel p-8 rounded-xl absolute w-full transition-all duration-700 opacity-10 translate-y-24 scale-90">
<span className="text-primary font-telemetry-data text-xs uppercase tracking-widest mb-2 block">Protocol 03</span>
<h4 className="font-bold text-white text-xl">Seguridad Encriptada</h4>
</div>
</div>
</div>

<div className="lg:col-span-4 glass-panel p-container-padding rounded-xl flex flex-col justify-between border-primary/20">
<div className="flex justify-between items-center mb-8">
<h2 className="font-headline-md text-headline-md text-white">Telemetría</h2>
<div className="w-3 h-3 bg-emerald-400 rounded-full pulse-dot"></div>
</div>
<div className="bg-black/40 p-6 rounded-lg border border-white/5 flex-grow font-telemetry-data text-primary">
<p className="mb-2 text-white/40">// SYSTEM STATUS: OPTIMIZING</p>
<p className="mb-2"><span className="text-white">&gt;</span> Eliminando cuellos de botella... <span className="animate-pulse">|</span></p>
<p className="text-xs text-white/30 mt-4">CORE_LOAD: 24% | LATENCY: 2ms</p>
</div>
</div>

<div className="lg:col-span-4 glass-panel rounded-xl overflow-hidden group">
<div className="h-64 relative">
<div className="absolute inset-0 bg-slate-900 opacity-50"></div>
<img className="w-full h-full object-cover mix-blend-overlay opacity-30" data-alt="A glowing blue global digital map displayed on a technical monitoring interface. Thin lines of light represent fiber optic connections pulsing between major metropolitan hubs. The background is a deep, obsidian black, making the neon blue and soft white data points stand out with high-contrast clarity. The scene evokes a sense of global connectivity and sophisticated telecommunications infrastructure." data-location="Worldwide Network Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOLnf2QROWMPCoGtv30rW8OEVBJME1L185M89aWyat86Mbn2cGOZjHrScH3Xhr1y0wigzEJ3LFkRrImtBzW2hQGc67JVH7tUI2rsVKGLnEcDUdR4MStkD4hp4u9QTzv_jOTmm4Gt3ZLr5fpXzdqkr5SO9TAXoGXiLkkOANMgnCHPu0tPqr75khzctdlarF3bafZkmBp1fZA7kRgKVBzfNGFr0W6UnE4FDyd_gSVs-IvGeE96KNP6F8H8bQjdI7gQuUrXibp77Ys7Q" />
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-6xl opacity-50 group-hover:scale-110 transition-transform duration-700">public</span>
</div>
</div>
<div className="p-8">
<h3 className="font-bold text-white mb-2">Connectivity Map</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">NETSTAT AR te asegura estar un paso adelante con una visualización en tiempo real de tu infraestructura crítica.</p>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest py-32 space-y-32" id="network">

<div className="relative min-h-[819px] flex items-center">
<div className="absolute inset-0 parallax-bg" style={{"backgroundImage": "url('https"}}></div>
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative z-10 max-w-7xl mx-auto px-margin-global grid grid-cols-1 md:grid-cols-2 gap-20">
<div className="space-y-6">
<span className="text-primary font-telemetry-data tracking-widest uppercase text-sm">Infraestructura</span>
<h2 className="font-display-lg text-6xl text-white">Cableado &amp; Racks</h2>
<p className="text-on-surface-variant text-lg">Precisión quirúrgica en cada conexión. Diseñamos el sistema circulatorio de tu empresa con estándares internacionales de categoría superior.</p>
<div className="pt-8">
<button className="border border-white/20 hover:border-primary px-8 py-3 rounded-full uppercase tracking-widest text-xs font-bold transition-all magnetic-effect">Ver Detalle</button>
</div>
</div>
</div>
</div>

<div className="relative min-h-[819px] flex items-center flex-row-reverse">
<div className="absolute inset-0 parallax-bg" style={{"backgroundImage": "url('https"}}></div>
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative z-10 max-w-7xl mx-auto px-margin-global grid grid-cols-1 md:grid-cols-2 gap-20">
<div className="md:col-start-2 space-y-6 text-right md:text-left">
<span className="text-primary font-telemetry-data tracking-widest uppercase text-sm">Networking</span>
<h2 className="font-display-lg text-6xl text-white">LAN / WAN / Wireless</h2>
<p className="text-on-surface-variant text-lg">Eliminamos la latencia del vocabulario de tu organización. Conectividad invisible, constante y de alta velocidad en cualquier entorno.</p>
</div>
</div>
</div>

<div className="relative min-h-[819px] flex items-center">
<div className="absolute inset-0 parallax-bg" style={{"backgroundImage": "url('https"}}></div>
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative z-10 max-w-7xl mx-auto px-margin-global grid grid-cols-1 md:grid-cols-2 gap-20">
<div className="space-y-6">
<span className="text-primary font-telemetry-data tracking-widest uppercase text-sm">Domótica</span>
<h2 className="font-display-lg text-6xl text-white">Hogar Inteligente</h2>
<p className="text-on-surface-variant text-lg">La automatización al servicio de la comodidad. Control total de tu entorno mediante una interfaz minimalista y eficiente.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-margin-global bg-surface-container-lowest" id="vision">
<div className="max-w-4xl mx-auto space-y-12">
<div className="text-center mb-20">
<h2 className="font-headline-md text-6xl text-white mb-4">Nuestra Visión</h2>
<div className="h-1 w-24 bg-primary mx-auto"></div>
</div>

<div className="glass-panel p-16 rounded-xl relative overflow-hidden transition-all duration-500 sticky top-40 bg-surface-container-highest">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<blockquote className="font-drama-italic text-3xl text-on-surface leading-tight italic">
                            "Nuestro Objetivo es que evoluciones con tecnología de alto nivel..."
                        </blockquote>
<p className="mt-6 font-telemetry-data text-primary uppercase tracking-tighter">— NETSTAT PROTOCOL</p>
</div>
<div className="w-32 h-32 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-8xl opacity-20 animate-spin" style={{"animationDuration": "10s"}}>hexagon</span>
</div>
</div>
</div>

<div className="glass-panel p-16 rounded-xl relative overflow-hidden transition-all duration-500 sticky top-48 bg-surface-container-high scale-[0.98] blur-[1px]">
<div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<h3 className="font-headline-md text-white mb-4">Escaneo Láser</h3>
<p className="text-on-surface-variant">Análisis exhaustivo de vulnerabilidades y rendimiento de red mediante hardware de última generación.</p>
</div>
<div className="w-32 h-32 flex items-center justify-center relative">
<div className="absolute w-full h-0.5 bg-primary/40 animate-bounce top-0"></div>
<span className="material-symbols-outlined text-primary text-8xl opacity-10">grid_view</span>
</div>
</div>
</div>

<div className="glass-panel p-16 rounded-xl relative overflow-hidden transition-all duration-500 sticky top-56 bg-surface-container scale-[0.95] blur-[2px]">
<div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<h3 className="font-headline-md text-white mb-4">Pulso Dinámico</h3>
<p className="text-on-surface-variant">Monitorización constante que garantiza el latido vital de tus operaciones críticas sin interrupciones.</p>
</div>
<div className="w-32 h-32 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-8xl opacity-10 animate-pulse">monitoring</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-margin-global bg-surface-dim" id="protocol">
<div className="max-w-7xl mx-auto">
<div className="glass-panel p-12 md:p-20 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden relative">
<div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
<div className="space-y-8 relative z-10">
<h2 className="font-display-lg text-5xl text-white">Iniciemos el <br /><span className="text-primary italic font-drama-italic">Protocolo.</span></h2>
<p className="text-on-surface-variant max-w-md">Contáctanos para una auditoría personalizada de tu infraestructura técnica. Estamos listos para elevar tus estándares.</p>
<div className="space-y-6 pt-8">
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
<span className="material-symbols-outlined">alternate_email</span>
</div>
<span className="font-telemetry-data text-white">hola@cliks.com.ar</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
<span className="material-symbols-outlined">call</span>
</div>
<span className="font-telemetry-data text-white">+54 9 11 0000 0000</span>
</div>
</div>
</div>
<form className="space-y-6 relative z-10">
<div className="space-y-2">
<label className="font-telemetry-data text-xs uppercase text-white/40 ml-4">Nombre</label>
<input className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/20 font-telemetry-data" placeholder="Tu nombre completo" type="text" />
</div>
<div className="space-y-2">
<label className="font-telemetry-data text-xs uppercase text-white/40 ml-4">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/20 font-telemetry-data" placeholder="ejemplo@dominio.com" type="email" />
</div>
<div className="space-y-2">
<label className="font-telemetry-data text-xs uppercase text-white/40 ml-4">Cuéntanos sobre tu proyecto</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-white/20 font-telemetry-data" placeholder="Descríbenos brevemente tu necesidad técnica..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-bold uppercase tracking-widest py-5 rounded-full magnetic-effect hover:bg-primary transition-all" type="submit">Enviar Transmisión</button>
</form>
</div>
</div>
</section>

<footer className="w-full mt-auto bg-[#000814] rounded-t-[3rem] pt-20 pb-10 px-12 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
<div className="space-y-4">
<div className="text-2xl font-bold text-white tracking-tighter uppercase font-['Plus_Jakarta_Sans']">NETSTAT -AR</div>
<p className="text-slate-500 font-['Plus_Jakarta_Sans'] text-[10px] tracking-widest uppercase">© 2024 NETSTAT -AR. ENCRYPTED PROTOCOL.</p>
</div>
<div className="flex flex-wrap gap-12">
<div className="space-y-6">
<h5 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Sitemap</h5>
<ul className="space-y-3">
<li><a className="text-slate-500 font-['Plus_Jakarta_Sans'] text-[10px] tracking-widest uppercase hover:text-white transition-all" href="#">Network</a></li>
<li><a className="text-slate-500 font-['Plus_Jakarta_Sans'] text-[10px] tracking-widest uppercase hover:text-white transition-all" href="#">Telemetry</a></li>
<li><a className="text-slate-500 font-['Plus_Jakarta_Sans'] text-[10px] tracking-widest uppercase hover:text-white transition-all" href="#">Vision</a></li>
</ul>
</div>
<div className="space-y-6">
<h5 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Legal</h5>
<ul className="space-y-3">
<li><a className="text-slate-500 font-['Plus_Jakarta_Sans'] text-[10px] tracking-widest uppercase hover:text-white transition-all" href="#">Privacy Policy</a></li>
<li><a className="text-slate-500 font-['Plus_Jakarta_Sans'] text-[10px] tracking-widest uppercase hover:text-white transition-all" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
<span className="text-emerald-400 font-['Plus_Jakarta_Sans'] text-[10px] tracking-widest uppercase drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">Status: Active</span>
</div>
</div>
<div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 opacity-30 text-[10px] uppercase tracking-widest font-telemetry-data">
<p>Designed by Cliks Informática</p>
<div className="flex gap-8">
<span>ARGENTINA BRANCH // 01</span>
<span>EST. 2024</span>
</div>
</div>
</div>
</footer>

    </div>
  );
}

export default App;
