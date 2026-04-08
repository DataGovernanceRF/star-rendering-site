
:root{
  --bg:#0a0a0a;
  --panel:#141414;
  --panel-2:#1b1b1b;
  --text:#ffffff;
  --muted:#c3c3c3;
  --soft:#8f8f8f;
  --line:rgba(255,255,255,.10);
  --accent:#d4a54b;
  --accent-2:#f0bf62;
  --green:#21c063;
  --max:1180px;
  --radius:26px;
  --shadow:0 18px 50px rgba(0,0,0,.35);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  background:var(--bg);
  color:var(--text);
  line-height:1.6;
}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
.container{width:min(var(--max),calc(100% - 32px));margin:0 auto}
.topbar{
  position:sticky;top:0;z-index:1000;
  backdrop-filter:blur(10px);
  background:rgba(10,10,10,.88);
  border-bottom:1px solid var(--line);
}
.nav{
  display:flex;align-items:center;justify-content:space-between;
  gap:20px;padding:16px 0;
}
.brand{display:flex;align-items:center;gap:14px;min-width:0}
.brand img{height:52px;width:auto;border-radius:8px;background:#111}
.brand-text{min-width:0}
.brand-title{
  font-size:clamp(14px,2vw,20px);font-weight:700;letter-spacing:.16em;white-space:nowrap
}
.brand-sub{
  font-size:11px;text-transform:uppercase;letter-spacing:.22em;color:var(--soft)
}
.nav-links{display:flex;gap:28px;align-items:center}
.nav-links a{font-size:14px;color:#ddd}
.nav-links a:hover{color:#fff}
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:10px;
  border-radius:999px;padding:14px 22px;font-weight:600;border:1px solid transparent;
  transition:.2s ease;cursor:pointer
}
.btn-primary{background:var(--accent);color:#111}
.btn-primary:hover{background:var(--accent-2)}
.btn-secondary{border-color:rgba(255,255,255,.18);background:transparent;color:#fff}
.btn-secondary:hover{background:rgba(255,255,255,.07)}
.hero{
  position:relative;overflow:hidden;
  background:
    radial-gradient(circle at top right, rgba(212,165,75,.18), transparent 28%),
    radial-gradient(circle at left, rgba(255,255,255,.08), transparent 18%);
}
.hero-grid{
  display:grid;grid-template-columns:1.02fr .98fr;gap:48px;align-items:center;
  padding:58px 0 88px;
}
.eyebrow{
  display:inline-flex;padding:7px 14px;border-radius:999px;
  border:1px solid rgba(212,165,75,.24);background:rgba(212,165,75,.10);
  color:var(--accent-2);font-size:11px;text-transform:uppercase;letter-spacing:.28em
}
h1{font-size:clamp(38px,6vw,64px);line-height:1.05;margin:18px 0 0}
h2{font-size:clamp(30px,4vw,46px);line-height:1.1;margin:0}
.hero p.lead,.section-intro,.copy-lg{font-size:18px;color:var(--muted)}
.button-row{display:flex;flex-wrap:wrap;gap:14px;margin-top:30px}
.pill-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:34px}
.pill{
  border:1px solid var(--line);background:rgba(255,255,255,.05);
  border-radius:22px;padding:16px
}
.pill-title{font-size:14px;font-weight:600}
.pill-sub{font-size:14px;color:var(--soft);margin-top:4px}
.showcase-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.card-photo,.project-card,.service-card,.trust-card,.contact-card,.legal-card{
  background:rgba(255,255,255,.05);border:1px solid var(--line);
  border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow)
}
.card-photo img{height:340px;width:100%;object-fit:cover}
.card-caption{padding:18px 20px;border-top:1px solid var(--line)}
.label{font-size:11px;text-transform:uppercase;letter-spacing:.24em;color:var(--soft)}
.label.accent{color:var(--accent-2)}
.note{
  margin-top:16px;border-radius:var(--radius);padding:20px;border:1px solid var(--line);
  background:rgba(255,255,255,.05);color:var(--muted);font-size:14px
}
section{padding:82px 0}
.section-head{max-width:780px;margin-bottom:28px}
.service-grid,.project-grid,.legal-grid{display:grid;gap:22px}
.service-grid{grid-template-columns:repeat(4,1fr)}
.project-grid{grid-template-columns:repeat(4,1fr)}
.service-card{padding:26px}
.icon{
  width:52px;height:52px;border-radius:18px;background:rgba(212,165,75,.14);
  color:var(--accent-2);display:grid;place-items:center;font-size:22px;margin-bottom:18px
}
.service-card h3,.project-card h3{margin:0;font-size:22px}
.service-card p,.project-card p,.muted{color:var(--muted)}
.band{
  border-top:1px solid var(--line);border-bottom:1px solid var(--line);
  background:rgba(255,255,255,.03)
}
.about-grid{display:grid;grid-template-columns:1.12fr .88fr;gap:32px;align-items:start}
.trust-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:26px}
.trust-card{padding:18px 18px;display:flex;gap:12px;align-items:flex-start}
.check{color:var(--accent-2);font-weight:700}
.side-card{padding:28px}
.project-card img{height:270px;width:100%;object-fit:cover}
.project-card .content{padding:20px}
.gold-band{
  background:var(--accent);color:#171717
}
.gold-grid{display:grid;grid-template-columns:1fr .9fr;gap:34px;align-items:center}
.stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.stat{
  border-radius:22px;background:rgba(0,0,0,.10);padding:18px;text-align:center
}
.stat strong{display:block;font-size:28px}
.contact-grid{display:grid;grid-template-columns:.95fr 1.05fr;gap:28px}
.contact-list{display:grid;gap:12px;margin-top:24px}
.stars{color:var(--accent-2);font-size:20px;letter-spacing:2px}
.form-wrap{padding:30px}
.form-grid{display:grid;gap:16px}
.row-2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
input,textarea{
  width:100%;border-radius:16px;border:1px solid var(--line);
  background:rgba(255,255,255,.05);color:#fff;padding:14px 16px;font:inherit
}
textarea{min-height:150px;resize:vertical}
footer{
  border-top:1px solid var(--line);background:#0b0b0b
}
.footer-grid{display:grid;grid-template-columns:1fr auto;gap:20px;padding:34px 0 24px}
.footer-brand{display:flex;gap:14px;align-items:flex-start}
.footer-brand img{height:42px;width:auto;border-radius:8px}
.footer-links{display:grid;gap:8px}
.footer-links a:hover{color:#fff}
.disclaimer{
  border-top:1px solid var(--line);padding:20px 0 34px;
  font-size:12px;color:#9a9a9a
}
.page-hero{padding:62px 0 34px}
.page-hero p{max-width:760px;color:var(--muted);font-size:18px}
.gallery-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
.gallery-item img{height:360px;width:100%;object-fit:cover}
.gallery-item .content{padding:18px}
.wa{
  position:fixed;right:18px;bottom:18px;z-index:999;
  background:var(--green);color:#fff;border-radius:999px;padding:14px 18px;
  box-shadow:var(--shadow);font-weight:700
}
.wa:hover{filter:brightness(1.05)}
.small{font-size:14px}
.mobile-toggle{display:none}
@media (max-width:1100px){
  .service-grid,.project-grid{grid-template-columns:repeat(2,1fr)}
  .hero-grid,.about-grid,.gold-grid,.contact-grid{grid-template-columns:1fr}
}
@media (max-width:760px){
  .nav{align-items:flex-start}
  .nav-links{display:none}
  .mobile-toggle{display:inline-flex}
  .hero-grid{padding:34px 0 56px}
  .pill-grid,.showcase-grid,.trust-grid,.row-2,.gallery-grid,.service-grid,.project-grid,.footer-grid,.stat-grid{grid-template-columns:1fr}
  .card-photo img{height:260px}
  .project-card img,.gallery-item img{height:240px}
  .brand-title{white-space:normal;line-height:1.2}
}
