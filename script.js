// ── LOADER ──
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hide');
    setTimeout(() => loader.remove(), 500);
  }, 1400);
});

// ── SMOOTH SCROLL FOR NAV LINKS ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── INTERSECTION OBSERVER: SCROLL ANIMATIONS ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.anim').forEach(el => observer.observe(el));

// ── SKILL BARS: animate width on scroll ──
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const level = bar.getAttribute('data-level');
      requestAnimationFrame(() => { bar.style.width = level + '%'; });
      skillObserver.unobserve(bar);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-bar').forEach(bar => skillObserver.observe(bar));

// ── COPY TO CLIPBOARD + TOAST ──
const toast = document.getElementById('toast');
let toastTimer;

function showToast(msg) {
  toast.textContent = msg + ' copied';
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.getAttribute('data-copy');
    const label = btn.getAttribute('data-label') || 'Text';
    try {
      await navigator.clipboard.writeText(text);
      showToast(label);
    } catch {
      showToast('Copy failed');
    }
  });
});

// ── SEND EMAIL: open in same window ──
document.querySelectorAll('[data-mailto]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = 'mailto:' + btn.getAttribute('data-mailto');
  });
});
