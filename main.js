/* ========================================
   The Earth Rotates - 3D Multilingual Edition
   ======================================== */

// ========== Translations ==========
const translations = {
    en: {
        era: "Ancient ~ 19th Century",
        title1: "The Earth",
        title2: "Rotates",
        subtitle: "Humanity's journey to understand the cosmos",
        part1_title: "Age of Intuition",
        part1_period: "Ancient ~ 6th Century BC",
        part1_quote: "\"Believe what you see\"",
        part1_desc: "The horizon stretched endlessly flat.\nThe sky was a dome above.\nThat was the entire world.",
        part2_title: "Discovery of Form",
        part2_period: "6th Century BC ~ 16th Century",
        part2_quote: "\"Round, but motionless\"",
        part2_desc: "Pythagoras spoke of the sphere.\nAristotle proved it.\nYet Earth remained the center of all.",
        part3_title: "The Revolution",
        part3_period: "16th ~ 17th Century",
        part3_quote: "\"The Earth moves\"",
        part3_desc: "Copernicus placed the Sun at the center.\nGalileo confirmed it through his telescope.\nKepler revealed the elliptical orbits.",
        part4_title: "The Proof",
        part4_period: "Late 17th ~ 19th Century",
        part4_quote: "\"Proving why it rotates\"",
        part4_desc: "Newton revealed gravity.\nFoucault demonstrated with his pendulum.\nThe Earth was rotating beneath our feet.",
        finale_quote: "\"And yet it moves\"",
        finale_attr: "— Galileo Galilei",
        // Planet names
        sun: "Sun",
        mercury: "Mercury",
        venus: "Venus",
        earth: "Earth",
        mars: "Mars",
        moon: "Moon",
        stars: "Stars"
    },
    ko: {
        era: "고대 ~ 19세기",
        title1: "지구는",
        title2: "돈다",
        subtitle: "인류가 우주를 이해하기까지",
        part1_title: "직관의 시대",
        part1_period: "고대 ~ 기원전 6세기",
        part1_quote: "\"눈에 보이는 대로 믿다\"",
        part1_desc: "수평선은 끝없이 평평했다.\n하늘은 돔처럼 덮여 있었다.\n그것이 세상의 전부였다.",
        part2_title: "형태의 발견",
        part2_period: "기원전 6세기 ~ 16세기",
        part2_quote: "\"둥글지만, 움직이지 않는다\"",
        part2_desc: "피타고라스가 구를 말했다.\n아리스토텔레스가 증명했다.\n하지만 지구는 여전히 우주의 중심이었다.",
        part3_title: "관점의 전복",
        part3_period: "16세기 ~ 17세기",
        part3_quote: "\"지구가 돈다\"",
        part3_desc: "코페르니쿠스가 태양을 중심에 놓았다.\n갈릴레오가 망원경으로 확인했다.\n케플러가 타원 궤도를 밝혔다.",
        part4_title: "증명",
        part4_period: "17세기 후반 ~ 19세기",
        part4_quote: "\"왜 도는지 증명하다\"",
        part4_desc: "뉴턴이 중력을 밝혔다.\n푸코가 진자로 보여주었다.\n지구는 발밑에서 돌고 있었다.",
        finale_quote: "\"그래도 지구는 돈다\"",
        finale_attr: "— 갈릴레오 갈릴레이",
        sun: "태양",
        mercury: "수성",
        venus: "금성",
        earth: "지구",
        mars: "화성",
        moon: "달",
        stars: "항성"
    },
    ja: {
        era: "古代〜19世紀",
        title1: "地球は",
        title2: "回る",
        subtitle: "人類が宇宙を理解するまでの旅",
        part1_title: "直観の時代",
        part1_period: "古代〜紀元前6世紀",
        part1_quote: "「見えるままに信じる」",
        part1_desc: "地平線は果てしなく平らだった。\n空はドームのように覆われていた。\nそれが世界のすべてだった。",
        part2_title: "形の発見",
        part2_period: "紀元前6世紀〜16世紀",
        part2_quote: "「丸いが、動かない」",
        part2_desc: "ピタゴラスが球を語った。\nアリストテレスが証明した。\nしかし地球は依然として宇宙の中心だった。",
        part3_title: "視点の転換",
        part3_period: "16世紀〜17世紀",
        part3_quote: "「地球が回る」",
        part3_desc: "コペルニクスが太陽を中心に置いた。\nガリレオが望遠鏡で確認した。\nケプラーが楕円軌道を明らかにした。",
        part4_title: "証明",
        part4_period: "17世紀後半〜19世紀",
        part4_quote: "「なぜ回るのかを証明する」",
        part4_desc: "ニュートンが重力を明らかにした。\nフーコーが振り子で示した。\n地球は足元で回っていた。",
        finale_quote: "「それでも地球は回る」",
        finale_attr: "— ガリレオ・ガリレイ",
        sun: "太陽",
        mercury: "水星",
        venus: "金星",
        earth: "地球",
        mars: "火星",
        moon: "月",
        stars: "恒星"
    },
    zh: {
        era: "古代〜19世纪",
        title1: "地球",
        title2: "在转动",
        subtitle: "人类理解宇宙的旅程",
        part1_title: "直觉时代",
        part1_period: "古代〜公元前6世纪",
        part1_quote: "\"眼见为实\"",
        part1_desc: "地平线无尽地平坦。\n天空如穹顶般覆盖。\n这就是世界的全部。",
        part2_title: "形态的发现",
        part2_period: "公元前6世纪〜16世纪",
        part2_quote: "\"圆的，但不动\"",
        part2_desc: "毕达哥拉斯说地球是球体。\n亚里士多德证明了这一点。\n但地球仍然是宇宙的中心。",
        part3_title: "观念的颠覆",
        part3_period: "16世纪〜17世纪",
        part3_quote: "\"地球在转动\"",
        part3_desc: "哥白尼把太阳放在中心。\n伽利略用望远镜确认了这一点。\n开普勒揭示了椭圆轨道。",
        part4_title: "证明",
        part4_period: "17世纪后期〜19世纪",
        part4_quote: "\"证明为什么会转\"",
        part4_desc: "牛顿揭示了引力。\n傅科用摆证明了这一点。\n地球在我们脚下转动着。",
        finale_quote: "\"但地球仍在转动\"",
        finale_attr: "— 伽利略·伽利雷",
        sun: "太阳",
        mercury: "水星",
        venus: "金星",
        earth: "地球",
        mars: "火星",
        moon: "月球",
        stars: "恒星"
    },
    fr: {
        era: "Antiquité ~ XIXe siècle",
        title1: "La Terre",
        title2: "Tourne",
        subtitle: "Le voyage de l'humanité pour comprendre le cosmos",
        part1_title: "L'Ère de l'Intuition",
        part1_period: "Antiquité ~ VIe siècle av. J.-C.",
        part1_quote: "\"Croire ce que l'on voit\"",
        part1_desc: "L'horizon s'étendait infiniment plat.\nLe ciel était un dôme au-dessus.\nC'était tout l'univers.",
        part2_title: "Découverte de la Forme",
        part2_period: "VIe siècle av. J.-C. ~ XVIe siècle",
        part2_quote: "\"Ronde, mais immobile\"",
        part2_desc: "Pythagore parla de la sphère.\nAristote le prouva.\nMais la Terre restait le centre de tout.",
        part3_title: "La Révolution",
        part3_period: "XVIe ~ XVIIe siècle",
        part3_quote: "\"La Terre se meut\"",
        part3_desc: "Copernic plaça le Soleil au centre.\nGalilée le confirma avec son télescope.\nKepler révéla les orbites elliptiques.",
        part4_title: "La Preuve",
        part4_period: "Fin XVIIe ~ XIXe siècle",
        part4_quote: "\"Prouver pourquoi elle tourne\"",
        part4_desc: "Newton révéla la gravité.\nFoucault le démontra avec son pendule.\nLa Terre tournait sous nos pieds.",
        finale_quote: "\"Et pourtant elle tourne\"",
        finale_attr: "— Galilée",
        sun: "Soleil",
        mercury: "Mercure",
        venus: "Vénus",
        earth: "Terre",
        mars: "Mars",
        moon: "Lune",
        stars: "Étoiles"
    },
    es: {
        era: "Antigüedad ~ Siglo XIX",
        title1: "La Tierra",
        title2: "Gira",
        subtitle: "El viaje de la humanidad para comprender el cosmos",
        part1_title: "Era de la Intuición",
        part1_period: "Antigüedad ~ Siglo VI a.C.",
        part1_quote: "\"Creer lo que se ve\"",
        part1_desc: "El horizonte se extendía infinitamente plano.\nEl cielo era una cúpula arriba.\nEso era todo el mundo.",
        part2_title: "Descubrimiento de la Forma",
        part2_period: "Siglo VI a.C. ~ Siglo XVI",
        part2_quote: "\"Redonda, pero inmóvil\"",
        part2_desc: "Pitágoras habló de la esfera.\nAristóteles lo demostró.\nPero la Tierra seguía siendo el centro de todo.",
        part3_title: "La Revolución",
        part3_period: "Siglos XVI ~ XVII",
        part3_quote: "\"La Tierra se mueve\"",
        part3_desc: "Copérnico puso el Sol en el centro.\nGalileo lo confirmó con su telescopio.\nKepler reveló las órbitas elípticas.",
        part4_title: "La Prueba",
        part4_period: "Finales del XVII ~ Siglo XIX",
        part4_quote: "\"Probar por qué gira\"",
        part4_desc: "Newton reveló la gravedad.\nFoucault lo demostró con su péndulo.\nLa Tierra giraba bajo nuestros pies.",
        finale_quote: "\"Y sin embargo se mueve\"",
        finale_attr: "— Galileo Galilei",
        sun: "Sol",
        mercury: "Mercurio",
        venus: "Venus",
        earth: "Tierra",
        mars: "Marte",
        moon: "Luna",
        stars: "Estrellas"
    },
    ru: {
        era: "Древность ~ XIX век",
        title1: "Земля",
        title2: "Вращается",
        subtitle: "Путь человечества к пониманию космоса",
        part1_title: "Эпоха Интуиции",
        part1_period: "Древность ~ VI век до н.э.",
        part1_quote: "\"Верить тому, что видишь\"",
        part1_desc: "Горизонт простирался бесконечно ровно.\nНебо было куполом наверху.\nЭто был весь мир.",
        part2_title: "Открытие Формы",
        part2_period: "VI век до н.э. ~ XVI век",
        part2_quote: "\"Круглая, но неподвижная\"",
        part2_desc: "Пифагор говорил о сфере.\nАристотель это доказал.\nНо Земля оставалась центром всего.",
        part3_title: "Революция",
        part3_period: "XVI ~ XVII век",
        part3_quote: "\"Земля движется\"",
        part3_desc: "Коперник поместил Солнце в центр.\nГалилей подтвердил это телескопом.\nКеплер открыл эллиптические орбиты.",
        part4_title: "Доказательство",
        part4_period: "Конец XVII ~ XIX век",
        part4_quote: "\"Доказать, почему вращается\"",
        part4_desc: "Ньютон открыл гравитацию.\nФуко продемонстрировал маятником.\nЗемля вращалась у нас под ногами.",
        finale_quote: "\"И всё-таки она вертится\"",
        finale_attr: "— Галилео Галилей",
        sun: "Солнце",
        mercury: "Меркурий",
        venus: "Венера",
        earth: "Земля",
        mars: "Марс",
        moon: "Луна",
        stars: "Звёзды"
    },
    ar: {
        era: "العصور القديمة ~ القرن التاسع عشر",
        title1: "الأرض",
        title2: "تدور",
        subtitle: "رحلة البشرية لفهم الكون",
        part1_title: "عصر الحدس",
        part1_period: "العصور القديمة ~ القرن السادس ق.م",
        part1_quote: "\"صدّق ما تراه\"",
        part1_desc: "امتد الأفق مسطحاً إلى ما لا نهاية.\nكانت السماء قبة فوقنا.\nكان ذلك كل العالم.",
        part2_title: "اكتشاف الشكل",
        part2_period: "القرن السادس ق.م ~ القرن السادس عشر",
        part2_quote: "\"كروية، لكنها ثابتة\"",
        part2_desc: "تحدث فيثاغورس عن الكرة.\nأثبتها أرسطو.\nلكن الأرض ظلت مركز كل شيء.",
        part3_title: "الثورة",
        part3_period: "القرن السادس عشر ~ السابع عشر",
        part3_quote: "\"الأرض تتحرك\"",
        part3_desc: "وضع كوبرنيكوس الشمس في المركز.\nأكد غاليليو ذلك بتلسكوبه.\nكشف كبلر المدارات الإهليلجية.",
        part4_title: "البرهان",
        part4_period: "أواخر القرن السابع عشر ~ التاسع عشر",
        part4_quote: "\"إثبات لماذا تدور\"",
        part4_desc: "كشف نيوتن الجاذبية.\nأثبتها فوكو ببندوله.\nكانت الأرض تدور تحت أقدامنا.",
        finale_quote: "\"ومع ذلك فهي تدور\"",
        finale_attr: "— غاليليو غاليلي",
        sun: "الشمس",
        mercury: "عطارد",
        venus: "الزهرة",
        earth: "الأرض",
        mars: "المريخ",
        moon: "القمر",
        stars: "النجوم"
    }
};

let currentLang = 'en';

// ========== Language Functions ==========
function setLanguage(lang) {
    currentLang = lang;
    document.body.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key].replace(/\n/g, '<br>');
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    updatePlanetLabels();
    localStorage.setItem('preferred-lang', lang);
}

function initLanguage() {
    // Always start with English
    setLanguage('en');
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
}

// ========== Planet Labels ==========
const planetLabelsContainer = document.getElementById('planet-labels');
let labelElements = {};
let labeledObjects = [];

function createPlanetLabel(id, className = '') {
    const label = document.createElement('div');
    label.className = `planet-label ${className}`;
    label.id = `label-${id}`;
    planetLabelsContainer.appendChild(label);
    labelElements[id] = label;
    return label;
}

function updatePlanetLabels() {
    Object.keys(labelElements).forEach(id => {
        const key = id.replace('geo-', '').replace('helio-', '');
        if (translations[currentLang][key]) {
            labelElements[id].textContent = translations[currentLang][key];
        }
    });
}

function updateLabelPositions() {
    if (!camera || !renderer) return;
    
    labeledObjects.forEach(obj => {
        if (!obj.mesh || !obj.mesh.visible || !obj.mesh.parent?.visible) {
            if (labelElements[obj.id]) {
                labelElements[obj.id].classList.remove('visible');
            }
            return;
        }
        
        const vector = new THREE.Vector3();
        obj.mesh.getWorldPosition(vector);
        vector.project(camera);
        
        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;
        
        if (labelElements[obj.id]) {
            labelElements[obj.id].style.left = x + 'px';
            labelElements[obj.id].style.top = (y - 30) + 'px';
            labelElements[obj.id].classList.add('visible');
        }
    });
}

// ========== Three.js Global Variables ==========
let scene, camera, renderer;
let currentScene = 'intro';
let targetCameraPos = { x: 0, y: 0, z: 50 };
let mouseX = 0, mouseY = 0;

let stars = [];
let earth, sun, moon;
let flatEarth, dome;
let geocentricGroup, heliocentricGroup;
let pendulumGroup, pendulumBob, pendulumWire;
let clock;

// ========== Initialize Three.js ==========
function initThree() {
    const container = document.getElementById('three-container');
    
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.008);
    
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);
    
    clock = new THREE.Clock();
    
    createStars();
    createIntroScene();
    createFlatEarthScene();
    createGeocentricScene();
    createHeliocentricScene();
    createPendulumScene();
    
    // Create labels
    createPlanetLabel('geo-earth', 'earth-label');
    createPlanetLabel('geo-moon');
    createPlanetLabel('geo-sun', 'sun-label');
    createPlanetLabel('helio-sun', 'sun-label');
    createPlanetLabel('helio-mercury');
    createPlanetLabel('helio-venus');
    createPlanetLabel('helio-earth', 'earth-label');
    createPlanetLabel('helio-mars');
    
    updatePlanetLabels();
    setSceneVisibility('intro');
    
    window.addEventListener('resize', onResize);
    document.addEventListener('mousemove', onMouseMove);
    
    animate();
}

function createStars() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
        const r = 100 + Math.random() * 200;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        transparent: true,
        opacity: 0.8
    });
    
    const starField = new THREE.Points(geometry, material);
    scene.add(starField);
    stars.push(starField);
}

function createIntroScene() {
    const earthGeo = new THREE.SphereGeometry(8, 64, 64);
    const earthMat = new THREE.MeshBasicMaterial({
        color: 0x4a90d9,
            wireframe: true,
            transparent: true,
            opacity: 0.6
    });
    earth = new THREE.Mesh(earthGeo, earthMat);
    earth.name = 'intro';
    scene.add(earth);
    
    const orbitGeo = new THREE.RingGeometry(12, 12.1, 64);
    const orbitMat = new THREE.MeshBasicMaterial({
        color: 0xd4a84b,
            transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
    });
    const orbitRing = new THREE.Mesh(orbitGeo, orbitMat);
    orbitRing.rotation.x = Math.PI / 2;
    orbitRing.name = 'intro';
    scene.add(orbitRing);
}

function createFlatEarthScene() {
    flatEarth = new THREE.Group();
    flatEarth.name = 'flat';
    flatEarth.visible = false;
    
    const diskGeo = new THREE.CylinderGeometry(10, 10, 0.5, 64);
    const diskMat = new THREE.MeshBasicMaterial({ color: 0x2d5a3e, transparent: true, opacity: 0.8 });
    flatEarth.add(new THREE.Mesh(diskGeo, diskMat));
    
    const domeGeo = new THREE.SphereGeometry(12, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeMat = new THREE.MeshBasicMaterial({ color: 0xd4a84b, wireframe: true, transparent: true, opacity: 0.2 });
    dome = new THREE.Mesh(domeGeo, domeMat);
    flatEarth.add(dome);
    
    for (let i = 0; i < 50; i++) {
        const starGeo = new THREE.SphereGeometry(0.1, 8, 8);
        const star = new THREE.Mesh(starGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
        const angle = Math.random() * Math.PI * 2;
        const height = Math.random() * Math.PI / 2;
        star.position.set(11 * Math.cos(angle) * Math.sin(height), 11 * Math.cos(height), 11 * Math.sin(angle) * Math.sin(height));
        flatEarth.add(star);
    }
    
    flatEarth.rotation.x = -0.3;
    scene.add(flatEarth);
}

function createGeocentricScene() {
    geocentricGroup = new THREE.Group();
    geocentricGroup.name = 'geocentric';
    geocentricGroup.visible = false;
    
    // Central Earth
    const earthGeo = new THREE.SphereGeometry(4, 32, 32);
    const earthMat = new THREE.MeshBasicMaterial({ color: 0x4a90d9, wireframe: true, transparent: true, opacity: 0.8 });
    const geoEarth = new THREE.Mesh(earthGeo, earthMat);
    geoEarth.userData.labelId = 'geo-earth';
    geocentricGroup.add(geoEarth);
    labeledObjects.push({ id: 'geo-earth', mesh: geoEarth });
    
    // Moon
    createOrbitRing(geocentricGroup, 8, 0x888888);
    const moonGeo = new THREE.SphereGeometry(1, 16, 16);
    moon = new THREE.Mesh(moonGeo, new THREE.MeshBasicMaterial({ color: 0xcccccc }));
    moon.position.x = 8;
    moon.userData = { orbitRadius: 8, orbitSpeed: 0.8, labelId: 'geo-moon' };
    geocentricGroup.add(moon);
    labeledObjects.push({ id: 'geo-moon', mesh: moon });
    
    // Sun
    createOrbitRing(geocentricGroup, 15, 0xd4a84b);
    const sunGeo = new THREE.SphereGeometry(2, 32, 32);
    const geoSun = new THREE.Mesh(sunGeo, new THREE.MeshBasicMaterial({ color: 0xffd700 }));
    geoSun.position.x = 15;
    geoSun.userData = { orbitRadius: 15, orbitSpeed: 0.3, labelId: 'geo-sun' };
    geocentricGroup.add(geoSun);
    labeledObjects.push({ id: 'geo-sun', mesh: geoSun });
    
    scene.add(geocentricGroup);
}

function createHeliocentricScene() {
    heliocentricGroup = new THREE.Group();
    heliocentricGroup.name = 'heliocentric';
    heliocentricGroup.visible = false;
    
    // Central Sun
    const sunGeo = new THREE.SphereGeometry(5, 32, 32);
    sun = new THREE.Mesh(sunGeo, new THREE.MeshBasicMaterial({ color: 0xffd700 }));
    sun.userData.labelId = 'helio-sun';
    heliocentricGroup.add(sun);
    labeledObjects.push({ id: 'helio-sun', mesh: sun });
    
    // Planets
    const planets = [
        { name: 'mercury', radius: 0.5, orbit: 8, speed: 1.5, color: 0x888888 },
        { name: 'venus', radius: 0.8, orbit: 11, speed: 1.0, color: 0xe6c87a },
        { name: 'earth', radius: 1, orbit: 15, speed: 0.6, color: 0x4a90d9, highlight: true },
        { name: 'mars', radius: 0.7, orbit: 19, speed: 0.4, color: 0xcd5c5c }
    ];
    
    planets.forEach(p => {
        createOrbitRing(heliocentricGroup, p.orbit, p.highlight ? 0x00d4aa : 0x333333);
        const planet = new THREE.Mesh(
            new THREE.SphereGeometry(p.radius, 32, 32),
            new THREE.MeshBasicMaterial({ color: p.color, wireframe: p.highlight })
        );
        planet.position.x = p.orbit;
        planet.userData = { 
            orbitRadius: p.orbit, 
            orbitSpeed: p.speed, 
            selfRotation: p.highlight,
            labelId: `helio-${p.name}`
        };
        heliocentricGroup.add(planet);
        labeledObjects.push({ id: `helio-${p.name}`, mesh: planet });
    });
    
    scene.add(heliocentricGroup);
}

function createPendulumScene() {
    pendulumGroup = new THREE.Group();
    pendulumGroup.name = 'pendulum';
    pendulumGroup.visible = false;
    
    const mountGeo = new THREE.BoxGeometry(4, 0.5, 4);
    const mount = new THREE.Mesh(mountGeo, new THREE.MeshBasicMaterial({ color: 0x8b7355 }));
    mount.position.y = 15;
    pendulumGroup.add(mount);
    
    const wireGeo = new THREE.CylinderGeometry(0.05, 0.05, 20, 8);
    pendulumWire = new THREE.Mesh(wireGeo, new THREE.MeshBasicMaterial({ color: 0xd4a84b }));
    pendulumWire.position.y = 5;
    pendulumGroup.add(pendulumWire);
    
    const bobGeo = new THREE.SphereGeometry(1.5, 32, 32);
    pendulumBob = new THREE.Mesh(bobGeo, new THREE.MeshBasicMaterial({ color: 0xd4a84b }));
    pendulumBob.position.y = -5;
    pendulumGroup.add(pendulumBob);
    
    const floorGeo = new THREE.RingGeometry(5, 12, 64);
    const floor = new THREE.Mesh(floorGeo, new THREE.MeshBasicMaterial({ color: 0x222222, transparent: true, opacity: 0.5, side: THREE.DoubleSide }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -8;
    pendulumGroup.add(floor);
    
    for (let i = 0; i < 24; i++) {
        const angle = (i / 24) * Math.PI * 2;
        const lineGeo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(Math.cos(angle) * 5, -8, Math.sin(angle) * 5),
            new THREE.Vector3(Math.cos(angle) * 12, -8, Math.sin(angle) * 12)
        ]);
        const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({
            color: i % 6 === 0 ? 0xd4a84b : 0x333333,
            transparent: true,
            opacity: i % 6 === 0 ? 0.8 : 0.3
        }));
        pendulumGroup.add(line);
    }
    
    scene.add(pendulumGroup);
}

function createOrbitRing(parent, radius, color) {
    const points = [];
    for (let i = 0; i <= 64; i++) {
        const angle = (i / 64) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    const ring = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points),
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.3 })
    );
    parent.add(ring);
}

function setSceneVisibility(sceneName) {
    currentScene = sceneName;
    
    const label = document.getElementById('scene-label');
    const labels = { intro: 'INTRO', flat: 'FLAT EARTH', geocentric: 'GEOCENTRIC', heliocentric: 'HELIOCENTRIC', pendulum: 'FOUCAULT', finale: 'FINALE' };
    label.textContent = labels[sceneName] || sceneName.toUpperCase();
    
    if (earth) earth.visible = sceneName === 'intro' || sceneName === 'finale';
    if (flatEarth) flatEarth.visible = sceneName === 'flat';
    if (geocentricGroup) geocentricGroup.visible = sceneName === 'geocentric';
    if (heliocentricGroup) heliocentricGroup.visible = sceneName === 'heliocentric';
    if (pendulumGroup) pendulumGroup.visible = sceneName === 'pendulum';
    
    // Hide all labels first
    Object.values(labelElements).forEach(el => el.classList.remove('visible'));
    
    const positions = {
        intro: { x: 0, y: 0, z: 40 },
        flat: { x: 15, y: 10, z: 20 },
        geocentric: { x: 0, y: 15, z: 35 },
        heliocentric: { x: 0, y: 20, z: 40 },
        pendulum: { x: 15, y: 5, z: 25 },
        finale: { x: 0, y: 0, z: 30 }
    };
    targetCameraPos = positions[sceneName] || positions.intro;
}

function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();
    
    camera.position.x += (targetCameraPos.x + mouseX * 5 - camera.position.x) * 0.02;
    camera.position.y += (targetCameraPos.y + mouseY * 3 - camera.position.y) * 0.02;
    camera.position.z += (targetCameraPos.z - camera.position.z) * 0.02;
    camera.lookAt(0, 0, 0);
    
    stars.forEach(s => s.rotation.y += 0.0001);
    
    if (earth && earth.visible) earth.rotation.y += 0.005;
    if (flatEarth && flatEarth.visible) flatEarth.rotation.y += 0.002;
    
    if (geocentricGroup && geocentricGroup.visible) {
        geocentricGroup.children.forEach(child => {
            if (child.userData.orbitRadius) {
                const angle = time * child.userData.orbitSpeed;
                child.position.x = Math.cos(angle) * child.userData.orbitRadius;
                child.position.z = Math.sin(angle) * child.userData.orbitRadius;
            }
        });
    }
    
    if (heliocentricGroup && heliocentricGroup.visible) {
        if (sun) sun.rotation.y += 0.002;
        heliocentricGroup.children.forEach(child => {
            if (child.userData.orbitRadius) {
                const angle = time * child.userData.orbitSpeed;
                child.position.x = Math.cos(angle) * child.userData.orbitRadius;
                child.position.z = Math.sin(angle) * child.userData.orbitRadius;
                if (child.userData.selfRotation) child.rotation.y += 0.03;
            }
        });
    }
    
    if (pendulumGroup && pendulumGroup.visible) {
        const pendulumAngle = Math.sin(time * 1.5) * 0.4;
        if (pendulumWire) {
            pendulumWire.rotation.z = pendulumAngle;
            pendulumWire.position.x = Math.sin(pendulumAngle) * 10;
        }
        if (pendulumBob) {
            pendulumBob.position.x = Math.sin(pendulumAngle) * 20;
            pendulumBob.position.y = -5 - Math.abs(Math.sin(pendulumAngle)) * 2;
        }
    }
    
    // Update planet label positions
    updateLabelPositions();
    
    renderer.render(scene, camera);
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
}

// ========== Scroll & Navigation ==========
const sections = document.querySelectorAll('.section');
const dots = document.querySelectorAll('.dot');
const progressFill = document.querySelector('.progress-ring .fill');
const progressText = document.querySelector('.progress-text');

function initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                updateActiveSection(entry.target);
                const sceneName = entry.target.dataset.scene;
                if (sceneName) setSceneVisibility(sceneName);
            }
        });
    }, { rootMargin: '-30% 0px -30% 0px', threshold: 0.2 });
    
    sections.forEach(section => observer.observe(section));
}

function updateActiveSection(section) {
    const index = parseInt(section.dataset.index);
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index - 1));
    const offset = 283 - ((index / sections.length) * 283);
    progressFill.style.strokeDashoffset = offset;
    progressText.textContent = String(index).padStart(2, '0');
}

function initNavDots() {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const target = document.querySelector(`.section[data-index="${dot.dataset.target}"]`);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
}

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initThree();
    initScrollObserver();
    initNavDots();
    
    setTimeout(() => {
        sections[0].classList.add('visible');
        updateActiveSection(sections[0]);
    }, 500);
    
    console.log('🌍 The Earth Rotates - Multilingual 3D Edition');
});
