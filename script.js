/* =========================================================
   SOROAI JAVASCRIPT
========================================================= */


/* =========================================================
   THEME
========================================================= */

const savedTheme = localStorage.getItem("soroai-theme");

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
} else {
  document.documentElement.setAttribute("data-theme", "dark");
}


const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  const current =
    document.documentElement.getAttribute("data-theme");

  const next =
    current === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", next);

  localStorage.setItem("soroai-theme", next);

});


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuBtn =
  document.getElementById("mobileMenuBtn");

const mobileMenu =
  document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("show");

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });

});


/* =========================================================
   MODALS
========================================================= */

function openModal(id) {

  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.add("show");
  }

}


function closeModal(id) {

  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.remove("show");
  }

}


document.querySelectorAll(".modal").forEach(modal => {

  modal.addEventListener("click", event => {

    if (event.target === modal) {
      modal.classList.remove("show");
    }

  });

});


/* =========================================================
   TOOL DATABASE
========================================================= */

const tools = {

  logo: {
    name: "AI Logo Generator",
    url: "/tools/image-generator",
    description:
      "Create logo concepts, brand visuals and creative ideas with AI.",
    affiliate:
      "Explore AI design tools →"
  },

  image: {
    name: "AI Image Generator",
    url: "/tools/image-generator",
    description:
      "Create images from simple text prompts for social media, websites and marketing.",
    affiliate:
      "Explore image tools →"
  },

  writing: {
    name: "AI Writer",
    url: "/tools/ai-writer",
    description:
      "Generate blog posts, marketing copy, captions and other written content.",
    affiliate:
      "Explore AI writing tools →"
  },

  seo: {
    name: "SEO Analyzer",
    url: "/tools/seo-analyzer",
    description:
      "Analyze websites and discover SEO opportunities, content gaps and improvements.",
    affiliate:
      "Open SEO tools →"
  },

  video: {
    name: "AI Video Tools",
    url: "/tools/video-script",
    description:
      "Create scripts, video ideas and AI-powered video content.",
    affiliate:
      "Explore video tools →"
  },

  voice: {
    name: "AI Voice Tools",
    url: "/tools/email-campaign",
    description:
      "Find AI voice generation and voiceover tools for content creators.",
    affiliate:
      "Explore voice tools →"
  },

  email: {
    name: "AI Email Campaign",
    url: "/tools/email-campaign",
    description:
      "Create email campaign ideas and sequences with AI.",
    affiliate:
      "Open email tools →"
  },

  keyword: {
    name: "Keyword Research",
    url: "/tools/keyword-research",
    description:
      "Discover keywords and content opportunities for your website.",
    affiliate:
      "Open keyword tools →"
  }

};


/* =========================================================
   ONE BOX TOOL FINDER
========================================================= */

function findTool() {

  const input =
    document.getElementById("toolSearch");

  const result =
    document.getElementById("finderResult");

  const query =
    input.value.toLowerCase().trim();


  if (!query) {

    result.style.display = "block";

    result.innerHTML = `
      <strong>Tell me what you need.</strong>
      <p style="color:var(--muted);font-size:10px;margin-top:5px;">
        Example: logo maker, SEO, video, writing, image or voice.
      </p>
    `;

    return;
  }


  let tool = null;


  if (
    query.includes("logo") ||
    query.includes("brand")
  ) {
    tool = tools.logo;

  } else if (
    query.includes("image") ||
    query.includes("photo") ||
    query.includes("picture")
  ) {
    tool = tools.image;

  } else if (
    query.includes("write") ||
    query.includes("blog") ||
    query.includes("content") ||
    query.includes("article")
  ) {
    tool = tools.writing;

  } else if (
    query.includes("seo") ||
    query.includes("google") ||
    query.includes("website ranking")
  ) {
    tool = tools.seo;

  } else if (
    query.includes("video") ||
    query.includes("youtube") ||
    query.includes("reel") ||
    query.includes("tiktok")
  ) {
    tool = tools.video;

  } else if (
    query.includes("voice") ||
    query.includes("voiceover")
  ) {
    tool = tools.voice;

  } else if (
    query.includes("email") ||
    query.includes("mail")
  ) {
    tool = tools.email;

  } else if (
    query.includes("keyword") ||
    query.includes("research")
  ) {
    tool = tools.keyword;
  }


  result.style.display = "block";


  if (tool) {

    result.innerHTML = `

      <div style="
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:10px;
      ">

        <div>

          <div style="
            color:var(--gold-light);
            font-size:9px;
            text-transform:uppercase;
            letter-spacing:.1em;
          ">
            SOROAI RECOMMENDS
          </div>

          <strong style="
            display:block;
            margin-top:4px;
            font-size:14px;
          ">
            ${tool.name}
          </strong>

          <p style="
            color:var(--muted);
            font-size:10px;
            margin-top:4px;
          ">
            ${tool.description}
          </p>

        </div>

        <a
          href="${tool.url}"
          style="
            white-space:nowrap;
            padding:8px 11px;
            border-radius:7px;
            background:var(--gold-light);
            color:#18130a;
            font-size:9px;
            font-weight:700;
          "
        >
          Open →
        </a>

      </div>

    `;

  } else {

    result.innerHTML = `

      <strong>
        I can help you find it.
      </strong>

      <p style="
        color:var(--muted);
        font-size:10px;
        margin-top:5px;
      ">
        Try: "I need a logo", "I want to make videos",
        "SEO tool", "AI writing", or "voice generator".
      </p>

    `;

  }

}


/* =========================================================
   ASSISTANT
========================================================= */

function toggleAssistant() {

  const assistant =
    document.getElementById("assistant");

  const arrow =
    document.getElementById("assistantArrow");

  assistant.classList.toggle("open");

  arrow.textContent =
    assistant.classList.contains("open")
      ? "⌄"
      : "⌃";

}


function addMessage(text, type) {

  const messages =
    document.getElementById("chatMessages");

  const div =
    document.createElement("div");

  div.className =
    type === "user"
      ? "user-message"
      : "bot-message";

  div.innerHTML = text;

  messages.appendChild(div);

  messages.scrollTop =
    messages.scrollHeight;

}


function sendChat() {

  const input =
    document.getElementById("chatInput");

  const text =
    input.value.trim();

  if (!text) return;


  addMessage(text, "user");

  input.value = "";


  setTimeout(() => {

    const lower = text.toLowerCase();

    let response = `
      I recommend starting with the SOROAI One Box.
      Tell me the exact result you want and I'll guide you.
    `;


    if (
      lower.includes("logo") ||
      lower.includes("brand")
    ) {

      response = `
        For a logo, try our
        <a href="/tools/image-generator"
           style="color:var(--gold-light)">
          AI Image Generator
        </a>.
        You can also explore AI design tools through
        our Earn with AI section.
      `;

    } else if (
      lower.includes("seo") ||
      lower.includes("google")
    ) {

      response = `
        For SEO, start with
        <a href="/tools/seo-analyzer"
           style="color:var(--gold-light)">
          SEO Analyzer
        </a>.
        It is designed to help identify website SEO opportunities.
      `;

    } else if (
      lower.includes("video") ||
      lower.includes("youtube") ||
      lower.includes("tiktok")
    ) {

      response = `
        For video creation, try
        <a href="/tools/video-script"
           style="color:var(--gold-light)">
          AI Video Script
        </a>.
        You can use it for YouTube, Shorts, Reels and TikTok ideas.
      `;

    } else if (
      lower.includes("write") ||
      lower.includes("blog") ||
      lower.includes("content")
    ) {

      response = `
        For writing and content,
        <a href="/tools/ai-writer"
           style="color:var(--gold-light)">
          AI Writer
        </a>
        is the right starting point.
      `;

    } else if (
      lower.includes("keyword") ||
      lower.includes("research")
    ) {

      response = `
        Try our
        <a href="/tools/keyword-research"
           style="color:var(--gold-light)">
          Keyword Research
        </a>
        tool to discover content opportunities.
      `;

    }


    addMessage(response, "bot");

  }, 450);

}


/* =========================================================
   SHARE
========================================================= */

function shareContent(text) {

  const shareText =
    `${text} — Made with SOROAI`;

  const xUrl =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  window.open(
    xUrl,
    "_blank",
    "width=600,height=500"
  );

}


/* =========================================================
   SEO TOOL PAGE DATA
========================================================= */

const seoPages = {

  "/tools/image-generator": {
    title: "AI Image Generator",
    description:
      "Create original visual concepts from text prompts with AI. SOROAI's AI Image Generator is designed for creators, marketers, businesses and anyone who needs visual content quickly. Describe the subject, style, mood or idea you want and turn a simple concept into a detailed image prompt. AI image tools can help with social media posts, website graphics, product concepts, advertising ideas, thumbnails and creative experiments. Before choosing an image generator, consider image quality, commercial usage rights, editing features and pricing. SOROAI helps you discover useful image-generation solutions and related AI products in one place."
  },

  "/tools/ai-writer": {
    title: "AI Writer",
    description:
      "AI writing tools can help create drafts, blog ideas, marketing copy, captions, product content and other written material. SOROAI's AI Writer page helps users understand what type of writing tool may fit their workflow. Start by defining your goal, audience and desired tone. AI can generate a first draft quickly, but important facts, names, statistics and claims should always be reviewed before publishing. For businesses, a consistent brand voice is also important. Explore SOROAI's writing tools and discover AI services that can support everyday content creation."
  },

  "/tools/seo-analyzer": {
    title: "SEO Analyzer",
    description:
      "An SEO analyzer helps identify technical, content and on-page opportunities that may improve a website's search visibility. Common checks include page titles, descriptions, headings, keyword usage, links, mobile usability and performance-related factors. SOROAI's SEO Analyzer page helps users discover tools for auditing websites and researching SEO opportunities. SEO is not based on one single score, so use automated reports as a starting point and review important recommendations manually. Search performance can change over time depending on content quality, competition, technical changes and search-engine updates."
  },

  "/tools/video-script": {
    title: "AI Video Script Generator",
    description:
      "AI video script generators can help creators turn a topic into a structured script for YouTube videos, Shorts, TikTok and Reels. A useful script normally includes a strong opening hook, clear information, natural transitions and a call to action when appropriate. SOROAI helps creators discover AI video tools and workflows that can reduce the time required for planning content. Always review AI-generated scripts for accuracy and make sure the final content reflects your own style, audience and message."
  },

  "/tools/keyword-research": {
    title: "Keyword Research",
    description:
      "Keyword research helps website owners discover the words and questions people use when searching online. Good research can reveal content ideas, long-tail opportunities, related topics and potential gaps. SOROAI's Keyword Research page helps users discover AI-powered research tools that can support this process. Search volume alone should not determine what content you create. Consider relevance, search intent, competition and whether your website can provide a genuinely useful answer."
  },

  "/tools/email-campaign": {
    title: "AI Email Campaign Generator",
    description:
      "AI email campaign tools can help businesses plan newsletters, promotional campaigns, onboarding sequences and customer communication. A useful workflow starts with a clear audience and objective, followed by a strong subject line, concise message and relevant call to action. SOROAI helps users discover AI services that can support email marketing workflows. Always review generated emails for accuracy, brand voice and compliance with applicable email marketing requirements before sending them."
  }

};


/* =========================================================
   SEO PAGE ROUTER
========================================================= */

function renderSEOPage() {

  const path =
    window.location.pathname;

  const page =
    seoPages[path];

  if (!page) return;


  document.title =
    `${page.title} — SOROAI`;


  const main =
    document.querySelector("main");

  if (!main) return;


  main.innerHTML = `

    <section class="section" style="padding-top:100px;">

      <a
        href="/"
        style="
          color:var(--gold-light);
          font-size:11px;
        "
      >
        ← Back to SOROAI
      </a>

      <div style="
        max-width:850px;
        margin:50px auto;
      ">

        <span class="section-kicker">
          SOROAI TOOL
        </span>

        <h1 style="
          font-size:clamp(40px,7vw,72px);
          line-height:1;
          margin-top:15px;
          letter-spacing:-.06em;
        ">
          ${page.title}
        </h1>

        <p style="
          margin-top:25px;
          color:var(--muted);
          font-size:15px;
          line-height:1.8;
        ">
          ${page.description}
        </p>


        <div style="
          margin-top:35px;
          padding:25px;
          border:1px solid var(--border);
          border-radius:15px;
          background:var(--card);
        ">

          <strong>
            What do you want to create?
          </strong>

          <textarea
            id="seoToolInput"
            placeholder="Describe what you need..."
            style="
              width:100%;
              min-height:130px;
              margin-top:15px;
              padding:15px;
              resize:vertical;
              border:1px solid var(--border);
              border-radius:10px;
              background:transparent;
              color:var(--text);
              outline:none;
              font-family:inherit;
            "
          ></textarea>

          <button
            onclick="generateDemoResult()"
            class="gold-btn"
            style="
              margin-top:12px;
              border:0;
            "
          >
            Generate Result →
          </button>

          <div
            id="seoToolResult"
            style="
              display:none;
              margin-top:18px;
              padding:15px;
              border:1px solid var(--border);
              border-radius:10px;
              color:var(--muted);
              font-size:11px;
            "
          ></div>

        </div>

      </div>

    </section>

  `;

}


/* =========================================================
   DEMO TOOL RESULT
========================================================= */

function generateDemoResult() {

  const input =
    document.getElementById("seoToolInput");

  const result =
    document.getElementById("seoToolResult");


  if (!input || !result) return;


  const value =
    input.value.trim();


  if (!value) {

    result.style.display = "block";

    result.innerHTML =
      "Please describe what you want to create.";

    return;
  }


  result.style.display = "block";

  result.innerHTML = `

    <strong style="color:var(--gold-light)">
      SOROAI RESULT
    </strong>

    <p style="margin-top:8px">
      Your request:
      <strong style="color:var(--text)">
        ${escapeHTML(value)}
      </strong>
    </p>

    <p style="margin-top:8px">
      This is the SOROAI demo result area.
      The real AI API can be connected here later.
    </p>

    <button
      onclick="shareContent('Created with SOROAI')"
      style="
        margin-top:12px;
        padding:8px 12px;
        border:1px solid var(--border);
        border-radius:8px;
        background:transparent;
        color:var(--gold-light);
      "
    >
      Share on X ↗
    </button>

    <div style="
      margin-top:10px;
      font-size:8px;
      opacity:.55;
    ">
      Made with SOROAI
    </div>

  `;

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


/* =========================================================
   START
========================================================= */

renderSEOPage();
