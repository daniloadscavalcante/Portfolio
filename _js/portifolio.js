function initPortfolioPage() {
  const featured = [
    {
      t: "Vidraçaria Oliveira",
      img: "vidracaria.png",
      d: "Site institucional para vidraçaria, com formulário de orçamento (EmailJS), carrossel e componentes reutilizáveis.",
      tags: ["React", "React Router", "EmailJS"],
      l: [["Ver site", "https://freela-site-vidracaria.vercel.app/"]],
    },
    {
      t: "Studio Universo Feminino",
      img: "studio-universo.png",
      d: "Freela para atrair clientes de qualquer localidade. Site responsivo e no ar com domínio próprio.",
      tags: ["HTML", "CSS", "JavaScript"],
      l: [["Ver site", "https://www.studiouniversofeminino.com.br"]],
    },
    {
      t: "Eletrônica Jaclesom",
      img: "eletronica.png",
      d: "Freela com o objetivo de aumentar a visibilidade e a demanda por serviços, com agendamento de orçamento.",
      tags: ["HTML", "CSS", "JavaScript", "Slick"],
      l: [["Ver site", "https://eletronicajaclesom.netlify.app/"]],
    },
    {
      t: "Estúdio & Beleza",
      img: "estudio&beleza.png",
      d: "Protótipo no Figma e depois codificado, com duas versões: uma em HTML/CSS/JS e outra em React.",
      tags: ["Figma", "JavaScript", "React"],
      l: [
        ["Versão JS", "https://estudiobeleza.netlify.app/"],
        ["Versão React", "https://site-studio-beleza.vercel.app/"],
      ],
    },
    {
      t: "Petshop",
      img: "Petshop.png",
      d: "Projeto do curso de Bootstrap: protótipo no Figma antes da codificação, layout responsivo.",
      tags: ["Bootstrap", "Figma"],
      l: [["Ver site", "https://seupet.netlify.app/"]],
    },
    {
      t: "Fisioterapia",
      img: "fisio.png",
      d: "Site desenvolvido a partir de protótipo no Figma, com foco em design e responsividade.",
      tags: ["Figma", "HTML", "CSS"],
      l: [["Ver site", "https://fisiobody.netlify.app/"]],
    },
  ];
  const lab = [
    [
      "Teste técnico (vaga de estágio)",
      "HTML · CSS · Flexbox",
      "https://desafiochuva.netlify.app/",
    ],
    [
      "Landing page (clone)",
      "HTML · CSS · JS",
      "https://landing-page-ingles.netlify.app/",
    ],
    [
      "PizzaMia III",
      "HTML · CSS · JS · Bootstrap",
      "https://pizzamia3.netlify.app/",
    ],
    [
      "Página de anúncio (clone)",
      "HTML · CSS",
      "https://clonemercadolivre.netlify.app/",
    ],
    ["Mobile first", "HTML · CSS", "https://conceitoresponsive.netlify.app/"],
    ["Strata", "HTML · CSS", "https://projects-strata.netlify.app/"],
    [
      "Tela de login (game)",
      "HTML · CSS · BEM",
      "https://gamesnipe.netlify.app/",
    ],
    [
      "Login Facebook (clone)",
      "HTML · CSS · BEM",
      "https://clone-facebook-login.netlify.app/",
    ],
    [
      "Login Wise Up (clone)",
      "HTML · CSS · BEM",
      "https://clone-wise-up.netlify.app/",
    ],
    [
      "Landing page (desafio)",
      "HTML · CSS · BEM",
      "https://teste-webdesign.netlify.app/",
    ],
    [
      "Frontend Mentor · card 1",
      "HTML · CSS · BEM",
      "https://card-frontendmentor2.netlify.app/",
    ],
    [
      "Frontend Mentor · card 2",
      "HTML · CSS · BEM",
      "https://3-cardfrontendmentor.netlify.app/",
    ],
    [
      "Frontend Mentor · card 3",
      "HTML · CSS · BEM",
      "https://card-done-frontendmentor.netlify.app/",
    ],
  ];
  const $ = (s) => document.querySelector(s);
  $("#featured").innerHTML = featured
    .map(
      (p) =>
        `<article class="card rv"><div class="th"><img src="_img/${p.img}" alt="Captura de tela do projeto ${p.t}" loading="lazy"></div><div class="bd"><h3>${p.t}</h3><div class="tags">${p.tags.map((x) => `<span class="tag">${x}</span>`).join("")}</div><p>${p.d}</p><div class="row">${p.l.map((x, i) => `<a class="btn sm ${i ? "" : "primary"}" href="${x[1]}" target="_blank" rel="noopener">${x[0]} ↗</a>`).join("")}</div></div></article>`,
    )
    .join("");
  $("#lab").innerHTML = lab
    .map(
      (x) =>
        `<a href="${x[2]}" target="_blank" rel="noopener"><span>${x[0]}<small>${x[1]}</small></span><span aria-hidden="true">↗</span></a>`,
    )
    .join("");
  $("#labBtn").onclick = (e) => {
    const o = $("#lab").classList.toggle("open");
    e.target.textContent = o ? "Ocultar" : "Mostrar todos";
    e.target.setAttribute("aria-expanded", o);
  };
  const menu = $("#menu"),
    b = $("#burger");
  b.onclick = () => {
    const o = menu.classList.toggle("open");
    b.setAttribute("aria-expanded", o);
  };
  menu.querySelectorAll("a").forEach(
    (a) =>
      (a.onclick = () => {
        menu.classList.remove("open");
        b.setAttribute("aria-expanded", false);
      }),
  );
  $("#yr").textContent = new Date().getFullYear();
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  document.querySelectorAll(".rv").forEach((el) => io.observe(el));
  const links = [...menu.querySelectorAll("a")];
  const so = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting)
          links.forEach((a) =>
            a.classList.toggle(
              "on",
              a.getAttribute("href") === "#" + e.target.id,
            ),
          );
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  document.querySelectorAll("main section[id]").forEach((s) => so.observe(s));
}

function initCommercialPage() {
  const $ = (s) => document.querySelector(s),
    menu = $("#commercial-menu"),
    bg = $("#commercial-menu-toggle");
  bg.onclick = () => {
    const o = menu.classList.toggle("is-open");
    bg.setAttribute("aria-expanded", o);
  };
  menu.querySelectorAll("a").forEach(
    (a) =>
      (a.onclick = () => {
        menu.classList.remove("is-open");
        bg.setAttribute("aria-expanded", false);
      }),
  );
  $("#commercial-year").textContent = new Date().getFullYear();
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".commercial-reveal")
    .forEach((el) => io.observe(el));
  $("#commercial-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(f)).toString(),
    })
      .then((r) => {
        if (!r.ok) throw 0;
        f.reset();
        $("#commercial-form-status").classList.add("is-visible");
      })
      .catch(() => {
        $("#commercial-form-status").classList.add("is-visible", "has-error");
        $("#commercial-form-status").textContent =
          "Não foi possível enviar. Chame no WhatsApp ou por e-mail.";
      });
  });
}

if (document.body.classList.contains("portfolio-page")) {
  initPortfolioPage();
}

if (document.body.classList.contains("commercial-page")) {
  initCommercialPage();
}
