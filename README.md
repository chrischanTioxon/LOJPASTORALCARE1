# ✝️ Light of Jesus Pastoral Care Center (LOJPCC)

> *"Compassionate support, psycho-spiritual care, and prayer intercessions for those in need."*

Official website of the **Light of Jesus Pastoral Care Center** — a Christ-centered mercy ministry under the Light of Jesus Family, founded by Bro. Bo Sanchez in 1993.

---

## 📁 Project Structure

```
LojPCC/
├── index.html          # Main homepage
├── about.html          # About page (history, vision, team)
├── css/
│   └── styles.css      # Shared stylesheet
├── js/
│   └── script.js       # Shared JavaScript
├── LOJPCC.Webp         # Ministry logo (you provide)
├── Loj.mp4             # Hero background video (you provide)
└── hero-bg.webm        # Hero background video – WebM format (optional)
```

---

## 🌐 Pages

| Page | Description |
|------|-------------|
| `index.html` | Home, Who We Are, What We Do, Services, Contact |
| `about.html` | Full history, Vision & Mission, Core Values, Volunteer Team |

---

## ✨ Features

- 🎥 **Background video** on the Hero/Home section with a dark overlay for readability
- 📖 **Read More / Read Less** toggle for the Who We Are section
- 🎨 Calming, accessible color palette with purple accent (`#b721db`)
- 💬 **Facebook Messenger** floating chat button
- 📱 Responsive design — mobile & desktop friendly
- ✅ Scroll-triggered **fade-in animations**
- 🔗 Active nav link highlighting on scroll
- 🆓 **Free and confidential** services highlighted throughout

---

## 🚀 Getting Started

This is a **plain HTML/CSS/JS** site — no build tools or frameworks required.

### 1. Clone the repository

```bash
git clone https://github.com/chrischanTioxon/LojPCC.git
cd LojPCC
```

### 2. Add your media files

Place the following files in the **root folder** (same level as `index.html`):

| File | Description |
|------|-------------|
| `LOJPCC.Webp` | Ministry logo |
| `Loj.mp4` | Hero section background video |
| `hero-bg.webm` | *(Optional)* WebM version of the hero video |

### 3. Open in browser

Simply open `index.html` in any modern browser — or serve with a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`.

---

## ⚙️ Configuration

### Facebook Chat
In `js/script.js`, replace `YOUR_PAGE_ID` with your actual Facebook Page ID:

```js
chatbox.setAttribute('page_id', 'YOUR_PAGE_ID');
```

### Donation Details
Update GCash and BDO numbers in `index.html` inside the `.donation-box` section if they change.

### Hero Video
To disable the background video and use the gradient fallback, remove or comment out the `<video>` block in `index.html`:

```html
<!-- Remove or comment this block to use gradient background -->
<video class="hero-video" autoplay muted loop playsinline preload="auto">
    <source src="hero-bg.webm" type="video/webm">
    <source src="Loj.mp4" type="video/mp4">
</video>
```

---

## 🎨 Color Palette

| Variable | Color | Usage |
|----------|-------|-------|
| `--color-primary` | `#b721db` | Buttons, accents, highlights |
| `--color-primary-dark` | `#5A7E8C` | Headings, nav, footer |
| `--color-primary-light` | `#A4C3CE` | Gradients, cards |
| `--color-accent` | `#E8B298` | Warm accent details |
| `--color-cream` | `#FAF6F1` | Page background |
| `--color-warm` | `#F4E9E1` | Section backgrounds |

---

## 📞 Contact Information

| Day | Numbers |
|-----|---------|
| Monday – Friday | +639231323071 · +639157765326 |
| Saturday | +639511076323 · +639957112537 |
| Email | lojpastoralcare@gmail.com |

**Hours:** Monday to Saturday, 8:00 AM – 10:00 PM
**Services are free and confidential.**

---

## 📜 License

This project is licensed under the **MIT License** — see [LICENSE.md](LICENSE.md) for details.

---

## 🙏 About the Ministry

The **Light of Jesus Pastoral Care Center (LOJPCC)** is a mercy ministry of the Light of Jesus Family, founded by **Bro. Bo Sanchez** in July 1993. Our trained volunteer Pastoral Carers provide psycho-spiritual support through telephone, email, online chat, and face-to-face sessions.

> *All services are free. Donations are welcome and deeply appreciated.*

---

<p align="center">Made with ❤️ and faith · Light of Jesus Pastoral Care Center · © 2025</p>
