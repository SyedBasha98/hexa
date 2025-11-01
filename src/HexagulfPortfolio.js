import React, { useEffect, useState } from "react"; 
import logo from "./assets/hexagulf-logo.png";
import oilgas from '../src/assets/Oil & Gas.webp'
import healthcare from '../src/assets/Healthcare.jpg'
import construction from '../src/assets/Construction & Infrastructure.jpg'
import education from '../src/assets/Education & Research.jpg'
import petrochemical from '../src/assets/Petrochemical & Refining.jpg'
import marine from '../src/assets/Marine Offshore.jpg'

/* =========================================
   Corrected Image URLs - Working images
========================================= */
const FALLBACK_IMAGES = {
  // Industrial images
  oil: "https://www.oilandgasmiddleeast.com/cloud/2024/02/16/Create_a_rectangular_image_1792x1024_depicting_t.jpeg",
  pipes: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&h=400&fit=crop", 
  valves: "https://www.eurovalve.co.uk/images/eurovalve-valve-actuator-specialists-banner.jpg",
  flanges: "https://images.unsplash.com/photo-1581092160607-ee22731af5c4?w=600&h=400&fit=crop",
  bolts: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop",
  steel: "https://images.unsplash.com/photo-1541976076360-2c3e683c8612?w=600&h=400&fit=crop",
  marine: "https://images.unsplash.com/photo-1566024164372-02838bc8ef4e?w=600&h=400&fit=crop",
  instr: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
  yard: "https://images.unsplash.com/photo-1581092580564-896dc578b336?w=600&h=400&fit=crop",
  port: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  refinery: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
  
  // Scientific & Lab images
  lab: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
  lab2: "https://tse1.mm.bing.net/th/id/OIP.JyHxkcgFsjWRaZKzTR5dugHaEW?pid=Api&P=0&h=180",
  lab3: "https://images.unsplash.com/photo-1581092160607-ee22731af5c4?w=600&h=400&fit=crop",
  lab4: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
  
  // Technology images
  software: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  software2: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
  software3: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  software4: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",
  
  // Other categories
  education: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
  healthcare: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
  
  // Hero background
  hero: "https://images.unsplash.com/photo-1565373679108-4dd20b7d0196?w=1200&h=800&fit=crop"
};

// Updated U object with reliable images
const U = {
  oil: () => FALLBACK_IMAGES.oil,
  pipes: () => FALLBACK_IMAGES.pipes,
  valves: () => FALLBACK_IMAGES.valves,
  flanges: () => FALLBACK_IMAGES.flanges,
  bolts: () => FALLBACK_IMAGES.bolts,
  steel: () => FALLBACK_IMAGES.steel,
  marine: () => FALLBACK_IMAGES.marine,
  instr: () => FALLBACK_IMAGES.instr,
  yard: () => FALLBACK_IMAGES.yard,
  port: () => FALLBACK_IMAGES.port,
  refinery: () => FALLBACK_IMAGES.refinery,
  lab: (i = 1) => i === 1 ? FALLBACK_IMAGES.lab : i === 2 ? FALLBACK_IMAGES.lab2 : i === 3 ? FALLBACK_IMAGES.lab3 : FALLBACK_IMAGES.lab4,
  software: (i = 1) => i === 1 ? FALLBACK_IMAGES.software : i === 2 ? FALLBACK_IMAGES.software2 : i === 3 ? FALLBACK_IMAGES.software3 : FALLBACK_IMAGES.software4,
  education: () => FALLBACK_IMAGES.education,
  healthcare: () => FALLBACK_IMAGES.healthcare,
  logo: () => logo,
  hero: () => FALLBACK_IMAGES.hero
};

/* =========================================
   White Logo Component with White Background Shapes
========================================= */
const WhiteLogo = ({ 
  className = "", 
  withBackground = false, 
  backgroundShape = "hexagon",
  size = "medium" 
}) => {
  // Size configurations
  const sizeConfig = {
    small: { container: 40, logo: 24, bg: 36 },
    medium: { container: 50, logo: 30, bg: 46 },
    large: { container: 60, logo: 36, bg: 56 }
  };

  const config = sizeConfig[size];

  if (withBackground) {
    const BackgroundShape = () => {
      switch (backgroundShape) {
        case "circle":
          return (
            <svg width={config.container} height={config.container} viewBox={`0 0 ${config.container} ${config.container}`} className="logo-bg-shape">
              <circle 
                cx={config.container/2} 
                cy={config.container/2} 
                r={config.bg/2} 
                fill="#FFFFFF" 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth="1"
              />
            </svg>
          );
        case "square":
          return (
            <svg width={config.container} height={config.container} viewBox={`0 0 ${config.container} ${config.container}`} className="logo-bg-shape">
              <rect 
                x="2" y="2" 
                width={config.container-4} 
                height={config.container-4} 
                rx="8" 
                fill="#FFFFFF" 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth="1"
              />
            </svg>
          );
        case "diamond":
          return (
            <svg width={config.container} height={config.container} viewBox={`0 0 ${config.container} ${config.container}`} className="logo-bg-shape">
              <path 
                d={`M${config.container/2},2 L${config.container-2},${config.container/2} L${config.container/2},${config.container-2} L2,${config.container/2} Z`} 
                fill="#FFFFFF"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
              />
            </svg>
          );
        case "hexagon":
        default:
          return (
            <svg width={config.container} height={config.container} viewBox={`0 0 ${config.container} ${config.container}`} className="logo-bg-shape">
              <path 
                d={`M${config.container/2},2 L${config.container-2},${config.container*0.3} L${config.container-2},${config.container*0.7} L${config.container/2},${config.container-2} L2,${config.container*0.7} L2,${config.container*0.3} Z`} 
                fill="#FFFFFF"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
              />
            </svg>
          );
      }
    };

    return (
      <div className={`logo-with-bg ${className}`} style={{ 
        display: 'inline-flex', 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <BackgroundShape />
        <img 
          src={U.logo()} 
          alt="Hexagulf" 
          style={{ 
            height: `${config.logo}px`,
            width: 'auto',
            objectFit: 'contain',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2
          }}
        />
      </div>
    );
  }

  return (
    <img 
      src={U.logo()} 
      alt="Hexagulf" 
      className={className}
      style={{ 
        height: `${config.logo}px`,
        width: 'auto',
        objectFit: 'contain'
      }}
    />
  );
};

/* =========================================
   Image Component with Loading State
========================================= */
const OptimizedImage = ({ src, alt, className, fallback = FALLBACK_IMAGES.oil }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setImageSrc(src);
    
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoading(false);
      setError(false);
    };
    img.onerror = () => {
      setLoading(false);
      setError(true);
      setImageSrc(fallback);
    };
  }, [src, fallback]);

  return (
    <div className={`image-container ${loading ? 'image-loading' : ''} ${error ? 'image-error' : ''}`}>
      {loading && (
        <div className="image-skeleton">
          <div className="skeleton-shimmer"></div>
        </div>
      )}
      <img 
        src={imageSrc} 
        alt={alt} 
        className={className}
        style={{ display: loading ? 'none' : 'block' }}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
          setImageSrc(fallback);
        }}
      />
    </div>
  );
};

const cx = (...c) => c.filter(Boolean).join(" ");

/* ---------- UI strings ---------- */
const STR = {
  LANGS: { en: "English", ar: "العربية" },
  NAV: { 
    home: { en: "Home", ar: "الرئيسية" },
    about: { en: "About Us", ar: "من نحن" },
    divisions: { en: "Our Divisions", ar: "أقسامنا" },
    industries: { en: "Industries", ar: "القطاعات" },
    blog: { en: "Blog", ar: "المدونة" },
    contact: { en: "Contact", ar: "اتصل بنا" },
  },
  HERO: {
    kicker: { en: "Saudi-based • Multi-Industry • Technology • Innovation", ar: "شركة سعودية • متعددة القطاعات • تكنولوجيا • ابتكار" },
    h1: { en: "Hexagulf Establishment: Integrated Solutions Under One Roof", ar: "مؤسسة هيكساگلف: حلول متكاملة تحت سقف واحد" },
    lead: { en: "Your trusted partner for industrial supplies, scientific equipment, and technology solutions across Saudi Arabia and the GCC. Quality, reliability, and innovation in every delivery.", ar: "شريكك الموثوق لتوريد المستلزمات الصناعية، المعدات العلمية، وحلول التكنولوجيا في المملكة العربية السعودية ودول الخليج. الجودة، الموثوقية، والابتكار في كل تسليم." },
    cta1: { en: "Request a Quote", ar: "اطلب عرض سعر" },
    cta2: { en: "Explore Divisions", ar: "استكشاف الأقسام" },
  },
};

/* ===============================
   DIVISIONS DATA
=============================== */
const DIVISIONS = [
  {
    key: "industrial",
    title: { en: "Industrial Materials & Oilfield Services", ar: "المواد الصناعية وخدمات النفط والغاز" },
    icon: "⚙️",
    cover: U.oil(),
    description: {
      en: "Comprehensive supply of critical materials and components for oil, gas, and industrial sectors with robust logistics and quality assurance.",
      ar: "توريد شامل للمواد والمكونات الحرجة لقطاعات النفط والغاز والصناعة مع خدمات لوجستية قوية وضمان جودة."
    },
    features: {
      en: ["API/ASTM/ASME Standards", "End-to-End Logistics", "Quality Inspection", "Technical Support"],
      ar: ["معايير API/ASTM/ASME", "خدمات لوجستية متكاملة", "التفتيش على الجودة", "الدعم الفني"]
    },
    link: "/divisions/industrial"
  },
  {
    key: "scientific",
    title: { en: "Scientific & Laboratory Equipment", ar: "المعدات العلمية والمختبرات" },
    icon: "🔬",
    cover: U.lab(1),
    description: {
      en: "Advanced laboratory instruments, scientific equipment, and educational tools for research institutions and quality control labs.",
      ar: "أجهزة المختبرات المتقدمة، المعدات العلمية، وأدوات التعليم لمؤسسات البحث ومختبرات ضبط الجودة."
    },
    features: {
      en: ["Research Instruments", "Calibration Services", "Educational Kits", "Maintenance & Support"],
      ar: ["أجهزة البحث العلمي", "خدمات المعايرة", "مجموعات التعليم", "الصيانة والدعم"]
    },
    link: "/divisions/scientific"
  },
  {
    key: "technology",
    title: { en: "Software & Technology Solutions", ar: "حلول البرمجيات والتقنية" },
    icon: "💻",
    cover: U.software(1),
    description: {
      en: "Custom software solutions, enterprise systems, and digital transformation services for industrial and educational sectors.",
      ar: "حلول برمجية مخصصة، أنظمة المؤسسات، وخدمات التحول الرقمي للقطاعات الصناعية والتعليمية."
    },
    features: {
      en: ["Enterprise Software", "E-Learning Platforms", "Process Simulation", "Digital Transformation"],
      ar: ["برمجيات المؤسسات", "منصات التعلم الإلكتروني", "محاكاة العمليات", "التحول الرقمي"]
    },
    link: "/divisions/technology"
  }
];

/* ===============================
   INDUSTRIES DATA - Using Imported Images
=============================== */
const INDUSTRIES = [
  {
    key: "oil-gas",
    title: { en: "Oil & Gas", ar: "النفط والغاز" },
    cover: oilgas,
    divisions: ["industrial", "scientific", "technology"],
    description: {
      en: "Comprehensive solutions for upstream, midstream, and downstream operations with certified materials and advanced technology.",
      ar: "حلول شاملة لعمليات المنبع والوسط والمصب بمواد معتمدة وتكنولوجيا متقدمة."
    }
  },
  {
    key: "petrochemical",
    title: { en: "Petrochemical & Refining", ar: "البتروكيماويات والتكرير" },
    cover: petrochemical,
    divisions: ["industrial", "scientific"],
    description: {
      en: "Specialized equipment and materials for petrochemical plants and refineries with focus on safety and efficiency.",
      ar: "معدات ومواد متخصصة لمصانع البتروكيماويات والمصافي مع التركيز على السلامة والكفاءة."
    }
  },
  {
    key: "marine",
    title: { en: "Marine & Offshore", ar: "البحرية والإسفنجية" },
    cover: marine,
    divisions: ["industrial"],
    description: {
      en: "Marine equipment and offshore solutions with class approvals and international standards compliance.",
      ar: "معدات بحرية وحلول إسفنجية باعتمادات التصنيف والامتثال للمعايير الدولية."
    }
  },
  {
    key: "education",
    title: { en: "Education & Research", ar: "التعليم والبحث العلمي" },
    cover: education,
    divisions: ["scientific", "technology"],
    description: {
      en: "Laboratory equipment, educational technology, and research instruments for universities and research centers.",
      ar: "معدات المختبرات، تكنولوجيا التعليم، وأجهزة البحث العلمي للجامعات ومراكز الأبحاث."
    }
  },
  {
    key: "healthcare",
    title: { en: "Healthcare", ar: "الرعاية الصحية" },
    cover: healthcare,
    divisions: ["scientific"],
    description: {
      en: "Medical laboratory equipment and scientific instruments for healthcare facilities and research laboratories.",
      ar: "معدات المختبرات الطبية والأجهزة العلمية للمرافق الصحية ومختبرات الأبحاث."
    }
  },
  {
    key: "construction",
    title: { en: "Construction & Infrastructure", ar: "البناء والبنية التحتية" },
    cover: construction,
    divisions: ["industrial"],
    description: {
      en: "Structural materials, fasteners, and construction supplies for major infrastructure projects.",
      ar: "مواد إنشائية، مواد تثبيت، ومستلزمات بناء للمشاريع التحتية الكبرى."
    }
  }
];

/* ===============================
   PRODUCTS DATA
=============================== */
const PRODUCTS = [
  {
    key: "pipes",
    division: "industrial",
    cover: U.pipes(),
    title: { en: "Pipes, Tubing & OCTG", ar: "الأنابيب وأنابيب البترول و(OCTG)" },
    bullets: { en: ["Seamless, ERW, LSAW", "API/ASTM/ASME Standards"], ar: ["سلسة، ERW، LSAW", "معايير API/ASTM/ASME"] },
    description: {
      en: "High-quality steel tubulars for drilling, casing, production, and transportation applications in extreme conditions.",
      ar: "أنابيب فولاذية عالية الجودة لتطبيقات الحفر والتغليف والإنتاج والنقل في الظروف القاسية."
    },
    specs: { en: ["API 5CT, API 5L", "ASTM A106/A53", "NACE MR0175"], ar: ["API 5CT، API 5L", "ASTM A106/A53", "NACE MR0175"] },
  },
  {
    key: "valves",
    division: "industrial",
    cover: U.valves(),
    title: { en: "Valves & Actuators", ar: "الصمامات والمشغلات" },
    bullets: { en: ["Gate, Globe, Check, Ball", "Pneumatic/Electric/Hydraulic"], ar: ["بوابة، جلو، فحص، كرة", "هوائية/كهربائية/هيدروليكية"] },
    description: {
      en: "Comprehensive range of valves and actuators for precise flow control in demanding industrial applications.",
      ar: "مجموعة شاملة من الصمامات والمشغلات للتحكم الدقيق في التدفق للتطبيقات الصناعية المتطلبة."
    },
    specs: { en: ["API 6D/600, B16.34", "API 607/6FA", "NACE trims"], ar: ["API 6D/600 وB16.34", "API 607/6FA", "ترايم NACE"] },
  },
  {
    key: "lab-equipment",
    division: "scientific",
    cover: U.lab(2),
    title: { en: "Laboratory Instruments", ar: "أجهزة المختبرات" },
    bullets: { en: ["Spectrophotometers, Microscopes", "Analytical Instruments"], ar: ["مقاييس الطيف، المجاهر", "أجهزة التحليل"] },
    description: {
      en: "Precision laboratory instruments for research, quality control, and scientific analysis across various industries.",
      ar: "أجهزة مختبرات دقيقة للبحث العلمي وضبط الجودة والتحليل العلمي عبر مختلف القطاعات."
    },
    specs: { en: ["ISO 17025 Calibration", "GMP/GLP Compliance", "IQ/OQ/PQ Documentation"], ar: ["معايرة ISO 17025", "امتثال GMP/GLP", "توثيق IQ/OQ/PQ"] },
  },
  {
    key: "software",
    division: "technology",
    cover: U.software(2),
    title: { en: "Enterprise Software", ar: "برمجيات المؤسسات" },
    bullets: { en: ["EAM Systems", "LIMS", "E-Learning Platforms"], ar: ["أنظمة إدارة الأصول", "نظم إدارة المختبرات", "منصات التعلم الإلكتروني"] },
    description: {
      en: "Custom software solutions for asset management, laboratory information, and digital education platforms.",
      ar: "حلول برمجية مخصصة لإدارة الأصول ومعلومات المختبرات ومنصات التعليم الرقمي."
    },
    specs: { en: ["Cloud-Based Solutions", "Custom Development", "Integration Services"], ar: ["حلول سحابية", "تطوير مخصص", "خدمات التكامل"] },
  }
];

/* ===============================
   BLOG POSTS DATA
=============================== */
const BLOG_POSTS = [
  {
    key: "b1",
    cover: U.oil(),
    title: { 
      en: "The Future of Oil & Gas: Digital Transformation and Sustainability", 
      ar: "مستقبل النفط والغاز: التحول الرقمي والاستدامة" 
    },
    excerpt: {
      en: "Exploring how digital technologies and sustainable practices are reshaping the oil and gas industry in Saudi Arabia.",
      ar: "استكشاف كيفية إعادة تشكيل التكنولوجيات الرقمية والممارسات المستدامة لصناعة النفط والغاز في المملكة العربية السعودية."
    },
    category: { en: "Industry Insights", ar: "رؤى صناعية" },
    date: "2024-01-15"
  },
  {
    key: "b2",
    cover: U.lab(4),
    title: { 
      en: "Advancements in Laboratory Technology for Quality Control", 
      ar: "التطورات في تكنولوجيا المختبرات لضبط الجودة" 
    },
    excerpt: {
      en: "Latest innovations in laboratory instruments and their impact on quality assurance in industrial settings.",
      ar: "أحدث الابتكارات في أجهزة المختبرات وتأثيرها على ضمان الجودة في البيئات الصناعية."
    },
    category: { en: "Scientific Equipment", ar: "المعدات العلمية" },
    date: "2024-01-10"
  }
];

const LBL = {
  readMore: { en: "Read More", ar: "اقرأ المزيد" },
};

/* ===============================
   MOBILE MENU COMPONENT
=============================== */
const MobileMenu = ({ isOpen, onClose, lang, setLang, active, setActive, t }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay">
      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <div className="brand">
            <WhiteLogo withBackground={true} backgroundShape="hexagon" size="small" />
          </div>
          <button className="mobile-close" onClick={onClose}>✕</button>
        </div>
        <nav className="mobile-nav-links">
          {[
            ["home", STR.NAV.home],
            ["about", STR.NAV.about],
            ["divisions", STR.NAV.divisions],
            ["industries", STR.NAV.industries],
            ["blog", STR.NAV.blog],
            ["contact", STR.NAV.contact],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={cx("mobile-nav-item", active === id && "active")}
              onClick={() => {
                setActive(id);
                onClose();
              }}
            >
              {t(label)}
            </a>
          ))}
          <div className="mobile-lang-selector">
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              className="mobile-lang-select"
            >
              <option value="en">{STR.LANGS.en}</option>
              <option value="ar">{STR.LANGS.ar}</option>
            </select>
          </div>
        </nav>
      </div>
    </div>
  );
};

/* ===============================
   MAIN COMPONENT
=============================== */
export default function HexagulfOnePage() {
  const [lang, setLang] = useState("en");
  const isAR = lang === "ar";
  const t = (o) => (Array.isArray(o) ? o : o?.[lang]);
  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    division: "industrial"
  });

  useEffect(() => {
    document.documentElement.dir = isAR ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [isAR, lang]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "divisions", "industries", "blog", "contact"];
      const scrollY = window.pageYOffset + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY > offsetTop && scrollY <= offsetTop + offsetHeight) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `New Contact Request from Hexagulf Website:
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Division: ${formData.division}
Subject: ${formData.subject}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/966546339981?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    alert(isAR ? "شكرًا! سيتم تحويلك إلى واتساب لإكمال طلبك." : "Thank you! You'll be redirected to WhatsApp to complete your request.");
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <style>{`
        /* ===== CSS VARIABLES ===== */
        :root {
          /* Colors - Dark Pink Theme */
          --primary: #C2185B;
          --primary-dark: #8C0B42;
          --primary-light: #E91E63;
          --secondary: #FF4081;
          --secondary-dark: #C60055;
          --accent: #FF6B35;
          --accent-dark: #E55A2B;
          --dark: #0b1220;
          --dark-light: #1a1a2e;
          --dark-lighter: #16213e;
          --light: #f8fafc;
          --light-dark: #e2e8f0;
          --text: #e5e7eb;
          --text-light: #f1f5f9;
          --text-muted: #9aa4b2;
          --text-dark: #64748b;
          --border: rgba(255, 255, 255, 0.1);
          --border-light: rgba(255, 255, 255, 0.05);
          --success: #10b981;
          --warning: #f59e0b;
          --error: #ef4444;
          
          /* Typography */
          --font-primary: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
          --font-arabic: 'SF Arabic', 'Segoe UI', system-ui, sans-serif;
          
          /* Spacing */
          --section-padding: clamp(3rem, 8vw, 6rem);
          --container-max-width: 1280px;
          --border-radius: 12px;
          --border-radius-lg: 20px;
          --border-radius-xl: 30px;
          
          /* Shadows */
          --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
          --shadow-md: 0 8px 30px rgba(0, 0, 0, 0.2);
          --shadow-lg: 0 20px 50px rgba(0, 0, 0, 0.3);
          --shadow-xl: 0 25px 60px rgba(0, 0, 0, 0.4);
          
          /* Transitions */
          --transition-fast: 0.2s ease;
          --transition-normal: 0.3s ease;
          --transition-slow: 0.5s ease;
          
          /* Z-index */
          --z-dropdown: 1000;
          --z-sticky: 1020;
          --z-fixed: 1030;
          --z-modal: 1040;
          --z-tooltip: 1050;
        }

        /* ===== RESET & BASE STYLES ===== */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          font-size: 16px;
        }

        body {
          font-family: var(--font-primary);
          background: var(--dark);
          color: var(--text);
          line-height: 1.6;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        [dir="rtl"] {
          font-family: var(--font-arabic);
        }

        /* ===== LAYOUT COMPONENTS ===== */
        .container {
          width: 100%;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 clamp(1rem, 4vw, 2rem);
        }

        .section {
          padding: var(--section-padding) 0;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: clamp(2rem, 6vw, 4rem);
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--secondary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: clamp(1.125rem, 2.5vw, 1.5rem);
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ===== NAVIGATION - DARK PINK THEME WITH WHITE LOGO ===== */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: var(--z-fixed);
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all var(--transition-normal);
        }

        .navbar.scrolled {
          background: rgba(194, 24, 91, 0.98);
          box-shadow: var(--shadow-md);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: clamp(70px, 10vw, 80px);
          gap: 2rem;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          color: white;
          text-decoration: none;
          flex-shrink: 0;
        }

        .brand-logo {
          height: clamp(85px, 8vw, 85px);
          width: auto;
          object-fit: contain;
        }

        .brand-text {
          color: white;
          font-weight: 700;
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
        }

        .logo-with-bg {
          transition: transform var(--transition-normal);
        }

        .logo-with-bg:hover {
          transform: scale(1.05);
        }

        .logo-bg-shape {
          filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.3));
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .nav-links {
            gap: 0.25rem;
          }
        }

        .nav-link {
          padding: clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 2vw, 1.25rem);
          border-radius: var(--border-radius);
          transition: all var(--transition-fast);
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          position: relative;
          white-space: nowrap;
          font-size: clamp(0.875rem, 1.5vw, 1rem);
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.15);
          color: white;
        }

        .nav-link.active {
          color: white;
          background: rgba(255, 255, 255, 0.2);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 20%;
          right: 20%;
          height: 2px;
          background: white;
          border-radius: 2px;
        }

        .nav-select {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: var(--border-radius);
          padding: 0.5rem 1rem;
          color: white;
          font-size: 0.875rem;
          cursor: pointer;
          margin-left: 1rem;
          min-width: 120px;
        }

        .nav-select:focus {
          outline: none;
          border-color: white;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
        }

        .nav-select option {
          background: var(--primary-dark);
          color: white;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--border-radius);
          transition: background-color var(--transition-fast);
        }

        .mobile-menu-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        /* ===== MOBILE MENU ===== */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(11, 18, 32, 0.98);
          backdrop-filter: blur(10px);
          z-index: var(--z-modal);
          animation: fadeIn var(--transition-normal);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(400px, 90vw);
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          border-left: 1px solid rgba(255, 255, 255, 0.2);
          padding: 2rem;
          overflow-y: auto;
          animation: slideInRight var(--transition-normal);
        }

        [dir="rtl"] .mobile-menu {
          right: auto;
          left: 0;
          border-left: none;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          animation: slideInLeft var(--transition-normal);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .mobile-close {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--border-radius);
          transition: background-color var(--transition-fast);
        }

        .mobile-close:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mobile-nav-item {
          padding: 1rem 1.5rem;
          border-radius: var(--border-radius);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all var(--transition-fast);
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 500;
        }

        .mobile-nav-item.active,
        .mobile-nav-item:hover {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateX(8px);
        }

        [dir="rtl"] .mobile-nav-item.active,
        [dir="rtl"] .mobile-nav-item:hover {
          transform: translateX(-8px);
        }

        .mobile-lang-selector {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .mobile-lang-select {
          width: 100%;
          padding: 1rem;
          border-radius: var(--border-radius);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          font-size: 1rem;
        }

        .mobile-lang-select:focus {
          outline: none;
          border-color: white;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
        }

        .mobile-lang-select option {
          background: var(--primary-dark);
          color: white;
        }

        /* ===== HERO SECTION ===== */
        .hero {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          position: relative;
          background: linear-gradient(135deg, rgba(11, 18, 32, 0.95) 0%, rgba(11, 18, 32, 0.8) 100%);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${U.hero()}) center/cover no-repeat;
          opacity: 0.15;
          z-index: -1;
        }

        .hero-content {
          max-width: min(800px, 90vw);
          position: relative;
          z-index: 2;
        }

        .hero-kicker {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid var(--accent);
          border-radius: 50px;
          color: var(--accent);
          font-size: clamp(0.75rem, 2vw, 0.875rem);
          font-weight: 600;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .hero-title {
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--text-light) 0%, var(--secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: clamp(1.125rem, 3vw, 1.5rem);
          color: var(--text-muted);
          margin-bottom: clamp(2rem, 5vw, 3rem);
          line-height: 1.6;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* ===== BUTTONS ===== */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: clamp(0.875rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem);
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all var(--transition-normal);
          border: 2px solid transparent;
          cursor: pointer;
          font-size: clamp(0.875rem, 2vw, 1rem);
          white-space: nowrap;
          justify-content: center;
          text-align: center;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-color: transparent;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
          background: linear-gradient(135deg, var(--primary-dark), var(--secondary-dark));
        }

        .btn-secondary {
          background: transparent;
          color: var(--text);
          border-color: var(--border);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--secondary);
          color: var(--secondary);
          transform: translateY(-2px);
        }

        /* ===== DIVISIONS GRID ===== */
        .divisions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
          gap: clamp(1.5rem, 4vw, 2.5rem);
          margin-top: 3rem;
        }

        .division-card {
          background: linear-gradient(135deg, var(--dark-light), rgba(26, 26, 46, 0.5));
          border: 1px solid var(--border);
          border-radius: var(--border-radius-lg);
          padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2rem);
          text-align: center;
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .division-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
        }

        .division-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--secondary);
        }

        .division-icon {
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          margin-bottom: 1.5rem;
          display: block;
        }

        .division-title {
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-light);
          line-height: 1.3;
        }

        .division-description {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-size: clamp(0.875rem, 2vw, 1rem);
        }

        .division-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .feature-tag {
          padding: 0.375rem 0.75rem;
          background: rgba(255, 64, 129, 0.1);
          border: 1px solid rgba(255, 64, 129, 0.3);
          border-radius: 20px;
          font-size: 0.75rem;
          color: var(--secondary);
          font-weight: 500;
        }

        /* ===== INDUSTRIES GRID ===== */
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
          gap: clamp(1.5rem, 4vw, 2rem);
        }

        .industry-card {
          background: var(--dark-light);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          transition: all var(--transition-normal);
          border: 1px solid var(--border);
          backdrop-filter: blur(10px);
        }

        .industry-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: var(--secondary);
        }

        .industry-image {
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .industry-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .industry-card:hover .industry-image img {
          transform: scale(1.05);
        }

        .industry-content {
          padding: clamp(1.5rem, 3vw, 2rem);
        }

        .industry-title {
          font-size: clamp(1.125rem, 2.5vw, 1.25rem);
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-light);
        }

        .industry-description {
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          line-height: 1.6;
          font-size: 0.875rem;
        }

        .industry-divisions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .division-badge {
          padding: 0.25rem 0.75rem;
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid rgba(255, 107, 53, 0.3);
          border-radius: 12px;
          font-size: 0.75rem;
          color: var(--accent);
          font-weight: 500;
        }

        /* ===== PRODUCTS GRID ===== */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: clamp(1.5rem, 4vw, 2rem);
        }

        .product-card {
          background: var(--dark-light);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          transition: all var(--transition-normal);
          border: 1px solid var(--border);
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: var(--secondary);
        }

        .product-image {
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .product-content {
          padding: clamp(1.25rem, 3vw, 1.5rem);
        }

        .product-title {
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-light);
          line-height: 1.4;
        }

        .product-description {
          color: var(--text-muted);
          font-size: 0.875rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .product-bullets {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .product-bullet {
          padding: 0.25rem 0.5rem;
          background: rgba(255, 64, 129, 0.1);
          border-radius: 6px;
          font-size: 0.75rem;
          color: var(--secondary);
          font-weight: 500;
        }

        /* ===== BLOG GRID ===== */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
          gap: clamp(1.5rem, 4vw, 2rem);
        }

        .blog-card {
          background: var(--dark-light);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          transition: all var(--transition-normal);
          border: 1px solid var(--border);
          backdrop-filter: blur(10px);
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: var(--secondary);
        }

        .blog-image {
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .blog-card:hover .blog-image img {
          transform: scale(1.05);
        }

        .blog-content {
          padding: clamp(1.5rem, 3vw, 2rem);
        }

        .blog-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }

        .blog-category {
          background: var(--accent);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .blog-title {
          font-size: clamp(1.125rem, 2.5vw, 1.25rem);
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-light);
          line-height: 1.4;
        }

        .blog-excerpt {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          font-size: 0.875rem;
        }

        /* ===== CONTACT SECTION ===== */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: start;
        }

        .contact-form {
          background: var(--dark-light);
          padding: clamp(2rem, 4vw, 3rem);
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border);
          backdrop-filter: blur(10px);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--text-light);
          font-size: 0.875rem;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          border-radius: var(--border-radius);
          color: var(--text);
          font-size: 1rem;
          transition: all var(--transition-fast);
          font-family: inherit;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--secondary);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(255, 64, 129, 0.1);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
          line-height: 1.5;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-card {
          background: var(--dark-light);
          padding: clamp(1.5rem, 3vw, 2rem);
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border);
          backdrop-filter: blur(10px);
        }

        .info-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: var(--text-light);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        .info-item:last-child {
          margin-bottom: 0;
        }

        /* ===== FOOTER ===== */
        .footer {
          background: var(--dark-light);
          border-top: 1px solid var(--border);
          padding: clamp(3rem, 6vw, 4rem) 0 1.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: clamp(2rem, 4vw, 3rem);
          margin-bottom: 3rem;
        }

        .footer-brand {
          max-width: 400px;
        }

        .footer-logo {
          height: 40px;
          margin-bottom: 1rem;
          object-fit: contain;
        }

        .footer-description {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }

        .footer-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: var(--text-light);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          color: var(--text-muted);
          text-decoration: none;
          transition: color var(--transition-fast);
          font-size: 0.875rem;
        }

        .footer-link:hover {
          color: var(--secondary);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          text-align: center;
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        /* ===== IMAGE LOADING STATES ===== */
        .image-container {
          position: relative;
          overflow: hidden;
          background: var(--dark-lighter);
        }

        .image-loading {
          background: linear-gradient(90deg, var(--dark-lighter) 25%, var(--dark-light) 50%, var(--dark-lighter) 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }

        .image-skeleton {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .skeleton-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shimmer 1.5s infinite;
        }

        .image-error {
          background: var(--dark-lighter);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes shimmer {
          0% { transform: translateX(0); }
          100% { transform: translateX(200%); }
        }

        /* ===== RESPONSIVE DESIGN ===== */
        /* Large Desktop */
        @media (min-width: 1440px) {
          .container {
            max-width: 1400px;
          }
        }

        /* Desktop */
        @media (max-width: 1200px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        /* Tablet Landscape */
        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        /* Tablet Portrait */
        @media (max-width: 768px) {
          .section {
            padding: 4rem 0;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .hero-actions {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn {
            width: 100%;
            max-width: 300px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .footer-brand {
            max-width: none;
          }
        }

        /* Mobile Landscape */
        @media (max-width: 640px) {
          .container {
            padding: 0 1rem;
          }

          .division-card,
          .industry-card,
          .product-card,
          .blog-card {
            padding: 1.5rem;
          }

          .contact-form {
            padding: 1.5rem;
          }

          .info-card {
            padding: 1.5rem;
          }
        }

        /* Mobile Portrait */
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .divisions-grid,
          .industries-grid,
          .products-grid,
          .blog-grid {
            grid-template-columns: 1fr;
          }

          .mobile-menu {
            width: 100vw;
            padding: 1.5rem;
          }
        }

        /* Small Mobile */
        @media (max-width: 360px) {
          .container {
            padding: 0 0.75rem;
          }

          .division-card,
          .industry-card,
          .product-card,
          .blog-card {
            padding: 1rem;
          }

          .contact-form {
            padding: 1rem;
          }

          .hero-actions .btn {
            padding: 0.75rem 1rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand">
            <WhiteLogo withBackground={true} backgroundShape="hexagon" size="medium" />
            <span className="brand-text">Hexagulf</span>
          </a>
          
          <nav className="nav-links">
            {[
              ["home", STR.NAV.home],
              ["about", STR.NAV.about],
              ["divisions", STR.NAV.divisions],
              ["industries", STR.NAV.industries],
              ["blog", STR.NAV.blog],
              ["contact", STR.NAV.contact],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={cx("nav-link", active === id && "active")}
              >
                {t(label)}
              </a>
            ))}
            
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="nav-select"
            >
              <option value="en">{STR.LANGS.en}</option>
              <option value="ar">{STR.LANGS.ar}</option>
            </select>
          </nav>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        lang={lang}
        setLang={setLang}
        active={active}
        setActive={setActive}
        t={t}
      />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-kicker">{t(STR.HERO.kicker)}</div>
            <h1 className="hero-title">{t(STR.HERO.h1)}</h1>
            <p className="hero-description">{t(STR.HERO.lead)}</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">{t(STR.HERO.cta1)}</a>
              <a href="#divisions" className="btn btn-secondary">{t(STR.HERO.cta2)}</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isAR ? "من نحن" : "About Hexagulf"}</h2>
            <p className="section-subtitle">
              {isAR 
                ? "شركة سعودية رائدة تقدم حلولاً متكاملة across multiple industries" 
                : "A leading Saudi company delivering integrated solutions across multiple industries"
              }
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                marginBottom: '1.5rem',
                color: 'var(--text-light)',
                fontWeight: '700'
              }}>
                {isAR ? "رؤيتنا ورسالتنا" : "Our Vision & Mission"}
              </h3>
              <p style={{
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                lineHeight: '1.8',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)'
              }}>
                {isAR 
                  ? "نسعى لأن نكون الشريك المفضل في توفير الحلول المتكاملة للقطاعات الصناعية والعلمية والتقنية في المملكة العربية السعودية ومنطقة الخليج. نلتزم بتقديم منتجات وخدمات عالية الجودة تدعم التنمية المستدامة والتحول الرقمي." 
                  : "We strive to be the preferred partner for integrated solutions in industrial, scientific, and technological sectors across Saudi Arabia and the GCC. We are committed to delivering high-quality products and services that support sustainable development and digital transformation."
                }
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem'
              }}>
                {[
                  { title: {en: "Quality", ar: "الجودة"}, desc: {en: "International standards", ar: "معايير عالمية"} },
                  { title: {en: "Innovation", ar: "الابتكار"}, desc: {en: "Advanced solutions", ar: "حلول متقدمة"} },
                  { title: {en: "Reliability", ar: "الموثوقية"}, desc: {en: "Trusted partner", ar: "شريك موثوق"} },
                  { title: {en: "Excellence", ar: "التميز"}, desc: {en: "Premium service", ar: "خدمة متميزة"} }
                ].map((value, index) => (
                  <div key={index} style={{
                    background: 'var(--dark-light)',
                    padding: '1.5rem',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--secondary)',
                      marginBottom: '0.5rem'
                    }}>{t(value.title)}</div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)'
                    }}>{t(value.desc)}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{
              background: 'var(--dark-light)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderRadius: 'var(--border-radius-lg)',
              border: '1px solid var(--border)'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                marginBottom: '2rem',
                color: 'var(--text-light)',
                fontWeight: '700'
              }}>
                {isAR ? "قيمنا" : "Our Values"}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { title: {en: "Excellence", ar: "التميز"}, desc: {en: "Commitment to highest standards", ar: "الالتزام بأعلى المعايير"} },
                  { title: {en: "Integrity", ar: "النزاهة"}, desc: {en: "Ethical business practices", ar: "ممارسات الأعمال الأخلاقية"} },
                  { title: {en: "Partnership", ar: "الشراكة"}, desc: {en: "Building long-term relationships", ar: "بناء علاقات طويلة الأمد"} },
                  { title: {en: "Innovation", ar: "الابتكار"}, desc: {en: "Embracing new technologies", ar: "تبني التقنيات الجديدة"} }
                ].map((value, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--accent)',
                      borderRadius: '50%',
                      marginTop: '0.5rem',
                      flexShrink: '0'
                    }}></div>
                    <div>
                      <div style={{
                        fontWeight: '600',
                        color: 'var(--text-light)',
                        marginBottom: '0.25rem',
                        fontSize: '0.875rem'
                      }}>{t(value.title)}</div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        lineHeight: '1.5'
                      }}>{t(value.desc)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section id="divisions" className="section" style={{background: 'var(--dark-light)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isAR ? "أقسامنا" : "Our Divisions"}</h2>
            <p className="section-subtitle">
              {isAR 
                ? "مجموعة متكاملة من الخدمات والحلول تحت سقف واحد" 
                : "A comprehensive suite of services and solutions under one roof"
              }
            </p>
          </div>
          
          <div className="divisions-grid">
            {DIVISIONS.map((division) => (
              <div key={division.key} className="division-card">
                <div className="division-icon">{division.icon}</div>
                <h3 className="division-title">{t(division.title)}</h3>
                <p className="division-description">{t(division.description)}</p>
                <div className="division-features">
                  {t(division.features).map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isAR ? "القطاعات التي نخدمها" : "Industries We Serve"}</h2>
            <p className="section-subtitle">
              {isAR 
                ? "خبرة واسعة في تلبية احتياجات مختلف القطاعات" 
                : "Extensive expertise in meeting the needs of various sectors"
              }
            </p>
          </div>
          
          <div className="industries-grid">
            {INDUSTRIES.map((industry) => (
              <div key={industry.key} className="industry-card">
                <div className="industry-image">
                  <OptimizedImage src={industry.cover} alt={t(industry.title)} />
                </div>
                <div className="industry-content">
                  <h3 className="industry-title">{t(industry.title)}</h3>
                  <p className="industry-description">{t(industry.description)}</p>
                  <div className="industry-divisions">
                    {industry.divisions.map((divKey) => {
                      const division = DIVISIONS.find(d => d.key === divKey);
                      return division ? (
                        <span key={divKey} className="division-badge">{t(division.title)}</span>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section" style={{background: 'var(--dark-light)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isAR ? "منتجاتنا وخدماتنا" : "Products & Services"}</h2>
            <p className="section-subtitle">
              {isAR 
                ? "مجموعة واسعة من المنتجات والخدمات عالية الجودة" 
                : "A wide range of high-quality products and services"
              }
            </p>
          </div>
          
          <div className="products-grid">
            {PRODUCTS.map((product) => (
              <div key={product.key} className="product-card">
                <div className="product-image">
                  <OptimizedImage src={product.cover} alt={t(product.title)} />
                </div>
                <div className="product-content">
                  <h3 className="product-title">{t(product.title)}</h3>
                  <p className="product-description">{t(product.description)}</p>
                  <div className="product-bullets">
                    {t(product.bullets).map((bullet, index) => (
                      <span key={index} className="product-bullet">{bullet}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isAR ? "آخر الأخبار والمقالات" : "Latest News & Insights"}</h2>
            <p className="section-subtitle">
              {isAR 
                ? "ابق على اطلاع بأحدث التطورات في الصناعة" 
                : "Stay updated with the latest industry developments"
              }
            </p>
          </div>
          
          <div className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <article key={post.key} className="blog-card">
                <div className="blog-image">
                  <OptimizedImage src={post.cover} alt={t(post.title)} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category">{t(post.category)}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="blog-title">{t(post.title)}</h3>
                  <p className="blog-excerpt">{t(post.excerpt)}</p>
                  <button className="btn btn-secondary" style={{padding: '0.5rem 1rem', fontSize: '0.875rem'}}>
                    {t(LBL.readMore)}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{background: 'var(--dark-light)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isAR ? "اتصل بنا" : "Get In Touch"}</h2>
            <p className="section-subtitle">
              {isAR 
                ? "نحن هنا للإجابة على استفساراتك وتقديم الدعم" 
                : "We're here to answer your questions and provide support"
              }
            </p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">{isAR ? "الاسم" : "Name"}</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{isAR ? "الشركة" : "Company"}</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">{isAR ? "البريد الإلكتروني" : "Email"}</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{isAR ? "الهاتف" : "Phone"}</label>
                    <input 
                      type="tel" 
                      className="form-input" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">{isAR ? "القسم" : "Division"}</label>
                  <select 
                    className="form-select" 
                    name="division"
                    value={formData.division}
                    onChange={handleInputChange}
                  >
                    <option value="industrial">{isAR ? "المواد الصناعية" : "Industrial Materials"}</option>
                    <option value="scientific">{isAR ? "المعدات العلمية" : "Scientific Equipment"}</option>
                    <option value="technology">{isAR ? "حلول البرمجيات" : "Software Solutions"}</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">{isAR ? "الموضوع" : "Subject"}</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required 
                    />
                </div>
                
                <div className="form-group">
                  <label className="form-label">{isAR ? "الرسالة" : "Message"}</label>
                  <textarea 
                    className="form-textarea" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                  {isAR ? "إرسال الرسالة" : "Send Message"}
                </button>
              </form>
            </div>
            
            <div className="contact-info">
              <div className="info-card">
                <h3 className="info-title">{isAR ? "معلومات التواصل" : "Contact Information"}</h3>
                <div className="info-item">
                  <span>📍</span>
                  <span>{isAR ? "الخبر، المملكة العربية السعودية" : "Al Khobar, Saudi Arabia"}</span>
                </div>
                <div className="info-item">
                  <span>📞</span>
                  <span>+966 54 633 9981</span>
                </div>
                <div className="info-item">
                  <span>📱</span>
                  <span>+966 54 633 9981 (WhatsApp)</span>
                </div>
                <div className="info-item">
                  <span>📧</span>
                  <span>sales@hexagulf.com</span>
                </div>
                <div className="info-item">
                  <span>🌐</span>
                  <span>www.hexagulf.com</span>
                </div>
              </div>
              
              <div className="info-card">
                <h3 className="info-title">{isAR ? "ساعات العمل" : "Business Hours"}</h3>
                <div className="info-item">
                  <span>🕒</span>
                  <span>{isAR ? "الأحد - الخميس: 8 ص - 5 م" : "Sunday - Thursday: 8 AM - 5 PM"}</span>
                </div>
                <div className="info-item">
                  <span>🕒</span>
                  <span>{isAR ? "الجمعة - السبت: مغلق" : "Friday - Saturday: Closed"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <WhiteLogo withBackground={true} backgroundShape="hexagon" size="small" className="footer-logo" />
              <p className="footer-description">
                {isAR 
                  ? "مؤسسة هيكساگلف - شريكك الموثوق للحلول المتكاملة في المجالات الصناعية والعلمية والتقنية." 
                  : "Hexagulf Establishment - Your trusted partner for integrated solutions in industrial, scientific, and technological fields."
                }
              </p>
            </div>
            
            <div>
              <h4 className="footer-title">{isAR ? "روابط سريعة" : "Quick Links"}</h4>
              <div className="footer-links">
                {[
                  ["home", STR.NAV.home],
                  ["about", STR.NAV.about],
                  ["divisions", STR.NAV.divisions],
                  ["industries", STR.NAV.industries],
                ].map(([id, label]) => (
                  <a key={id} href={`#${id}`} className="footer-link">{t(label)}</a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="footer-title">{isAR ? "الخدمات" : "Services"}</h4>
              <div className="footer-links">
                {DIVISIONS.map((division) => (
                  <a key={division.key} href={`#divisions`} className="footer-link">{t(division.title)}</a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="footer-title">{isAR ? "التواصل" : "Connect"}</h4>
              <div className="footer-links">
               <a href="https://www.linkedin.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                 LinkedIn</a>
               <a href="https://www.twitter.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                  Twitter
                  </a>

                <a href="mailto:sales@hexagulf.com" className="footer-link">Email</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Hexagulf Establishment. {isAR ? "جميع الحقوق محفوظة" : "All rights reserved."}</p>
          </div>
        </div>
      </footer>
    </>
  );
}