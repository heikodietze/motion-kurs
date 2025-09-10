# 🎬 Motion.dev Lernkurs für React & Next.js

Ein praktischer, hands-on Kurs zum Erlernen von Motion.dev mit Fokus auf Text-Animationen und Scroll-Effekte.

![Motion.dev Kurs](https://img.shields.io/badge/Status-Ready%20to%20use-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16-purple)

## 🎯 Was du lernen wirst

- **Text-Animationen**: Von einfachen Fade-ins bis zu komplexen Stagger-Effekten
- **Scroll-Animationen**: OnScroll-getriggerte Effekte für Text und Bilder  
- **Performance**: Optimierte Animationen für Production
- **Best Practices**: Accessibility und UX-bewusste Animationen

## 🚀 Quick Start

```bash
# Repository klonen
git clone https://github.com/heikodietze/motion-kurs.git
cd motion-kurs

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) und der Kurs beginnt! 🎉

## 🛠 Voraussetzungen

- React/Next.js Grundkenntnisse
- GSAP Grundverständnis (Vorteil)
- Cursor AI oder VS Code
- Node.js 18+

## 📚 Kurs-Struktur

### Lektion 1: Setup & Grundlagen
- Motion.dev Installation
- Erste Animation
- Motion.dev vs GSAP

### Lektion 2: Text-Animationen Basics
- `motion.div` Grundlagen
- Text Reveal Effekte
- Timing & Easing

### Lektion 3: Stagger Magic
- Stagger Basics
- Erweiterte Stagger Patterns
- Custom Stagger Functions

### Lektion 4: Scroll-getriggerte Animationen
- `useInView` Hook
- Scroll-Parallax
- Progressive Loading

### Lektion 5: Kombinierte Effekte
- Complex Layouts animieren
- Performance Optimierung
- Production Ready Code

## 🎮 Interaktive Demos

Der Kurs enthält vollständig funktionsfähige Beispiele:

- **Character-by-Character Text Reveals**: `<SplitText>`
- **Scroll-getriggerte Animationen**: `<AnimateOnView>`
- **Stagger-Effekte**: `<StaggerGrid>`
- **Performance-Monitor**: Live FPS tracking

## 💻 Sofort verwendbare Komponenten

```tsx
// Text Animation
<SplitText delay={0.5}>
  Dein Text wird character-by-character animiert
</SplitText>

// Scroll Animation
<AnimateOnView animation="slideUp" delay={0.2} distance={50}>
  <div>Erscheint beim Scrollen</div>
</AnimateOnView>

// Stagger Grid
<StaggerGrid staggerDelay={0.1}>
  {items.map(item => <Card key={item.id} {...item} />)}
</StaggerGrid>
```

## 💡 Kurs-Philosophie

- **Learning by Doing**: Jede Lektion baut auf der vorherigen auf
- **Copy-Ready Code**: Alle Beispiele sind sofort verwendbar
- **Iterative Verbesserung**: Starte einfach, werde komplexer
- **Real-World Focus**: Praxisnahe Beispiele aus echten Projekten

## 🎨 Features

- ✅ TypeScript Support
- ✅ Tailwind CSS
- ✅ Responsive Design
- ✅ Performance optimiert
- ✅ Accessibility Features
- ✅ Copy-Ready Components
- ✅ Real-World Examples

## 🚨 Performance

- 60fps Animationen garantiert
- Reduced Motion Support
- Mobile-optimiert
- Bundle-size optimiert

## 📖 Dokumentation

- [Quick Start Guide](./QUICK-START.md)
- [Lektion 1: Setup & Grundlagen](./docs/lektion-1-setup.md)
- [Lektion 2: Text-Animationen](./docs/lektion-2-text-animationen.md)
- [Lektion 3: Stagger Magic](./docs/lektion-3-stagger-magic.md)
- [Lektion 4: Scroll-Animationen](./docs/lektion-4-scroll-animationen.md)
- [Lektion 5: Production-Ready](./docs/lektion-5-production-ready.md)

## 🌟 Highlights

### 1. Sofort einsatzbereit
Nach `npm install` & `npm run dev` läuft alles!

### 2. Copy-Ready Components
Jede Komponente kann sofort in deine Projekte kopiert werden.

### 3. Parameter-Playground
Alle Animationen sind vollständig anpassbar:

```tsx
<AnimateOnView 
  animation="slideUp"    // up, down, left, right, scale, rotate
  delay={0.2}           // Startverzögerung in Sekunden
  duration={0.8}        // Animationsdauer
  distance={75}         // Bewegungsdistanz in px
>
```

### 4. Performance-optimiert
- Reduced Motion Support
- Mobile-responsive
- 60fps garantiert

## 🧪 Experimentieren

Das Repository enthält eine vollständig funktionsfähige Demo-Seite mit:

1. **Hero Section** mit Stagger-Animationen
2. **Scroll-Demos** mit verschiedenen Trigger-Points
3. **Character-by-Character** Text Reveals
4. **Interactive Components** zum Experimentieren

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

Feedback und Verbesserungen sind willkommen! Erstelle gerne Issues oder Pull Requests.

## 📄 License

MIT License - Nutze den Code frei für deine Projekte!

---

**Ready to animate? Let's go! 🎬✨**

*Erstellt mit ❤️ für die React & Motion.dev Community*