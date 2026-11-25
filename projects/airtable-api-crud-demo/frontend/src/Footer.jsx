import { FiCodepen, FiFacebook, FiGithub, FiGlobe, FiHeart, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";
import styled from "styled-components";

const links = [["Portfolio", "https://www.ashishranjan.net", FiGlobe], ["GitHub", "https://github.com/a2rp", FiGithub], ["CodePen", "https://codepen.io/ash1198", FiCodepen], ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FiLinkedin], ["Facebook", "https://www.facebook.com/theash.ashish/", FiFacebook], ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FiYoutube], ["Email", "mailto:ash.ranjan09@gmail.com", FiMail]];
const support = [["Support", "https://a2rp-donation-page.netlify.app/"], ["Buy Me A Coffee", "https://buymeacoffee.com/a2rp"], ["Patreon", "https://patreon.com/a2rp"]];

export default function Footer() {
    const year = new Date().getFullYear();
    return <Wrap><div className="footerGrid"><div><span className="eyebrow"><FiHeart /> Built for simple workflows</span><h2>Keep every contact within reach.</h2><p>React, Express, and Airtable working together in one focused interface.</p></div><div className="columns"><div><h3>Links</h3>{links.map(([label, href, Icon]) => <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}><Icon />{label}</a>)}</div><div><h3>Support</h3>{support.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer"><FiHeart />{label}</a>)}</div></div></div><div className="copyright">Copyright &copy; {year} <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></div></Wrap>;
}

const Wrap = styled.footer`
  margin-top: 80px; padding: 44px 0 20px; border-top: 1px solid var(--color-border); color: var(--color-text);
  .footerGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
  .eyebrow { display: inline-flex; gap: 8px; align-items: center; color: var(--color-primary); font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; }
  h2 { margin: 14px 0 8px; font-size: clamp(1.7rem, 4vw, 2.8rem); line-height: 1; letter-spacing: -.05em; } p { color: var(--color-text-muted); }
  .columns { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; } h3 { margin-bottom: 10px; font-size: .78rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: .1em; }
  .columns a { display: flex; align-items: center; gap: 8px; padding: 6px 0; color: var(--color-text-muted); text-decoration: none; transition: .2s; } .columns a:hover { color: var(--color-primary); transform: translateX(4px); }
  .copyright { margin-top: 34px; padding-top: 16px; border-top: 1px solid var(--color-border); color: var(--color-text-muted); font-size: .78rem; } .copyright a { color: var(--color-text); text-decoration: none; }
  @media (max-width: 700px) { .footerGrid { grid-template-columns: 1fr; } }
`;
