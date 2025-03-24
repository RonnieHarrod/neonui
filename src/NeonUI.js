class NeonUI {
  static glowButton(selector, options = {}) {
    const btn = document.querySelector(selector);
    if (!btn) {
      console.warn(`NeonUI: No element found for ${selector}`);
      return;
    }

    const { color = "cyan", intensity = 1.5 } = options;

    btn.style.position = "relative";
    btn.style.border = `2px solid ${color}`;
    btn.style.color = color;
    btn.style.background = "transparent";
    btn.style.padding = "10px 20px";
    btn.style.fontSize = "18px";
    btn.style.cursor = "pointer";
    btn.style.boxShadow = `0 0 ${intensity * 5}px ${color}`;
    btn.style.transition = "box-shadow 0.3s ease-in-out";

    btn.addEventListener("mouseenter", () => {
      btn.style.boxShadow = `0 0 ${intensity * 15}px ${color}`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.boxShadow = `0 0 ${intensity * 5}px ${color}`;
    });
  }

  static neonText(selector, options = {}) {
    const text = document.querySelector(selector);
    if (!text) {
      console.warn(`NeonUI: No element found for ${selector}`);
      return;
    }

    const { color = "lime", intensity = 2 } = options;

    text.style.color = color;
    text.style.textShadow = `0 0 ${intensity * 5}px ${color}, 0 0 ${intensity * 10}px ${color}`;
  }

  static smoothScroll() {
    document.documentElement.style.scrollBehavior = "smooth";
  }

  static cursorGlow(color = "magenta") {
    const cursor = document.createElement("div");
    cursor.classList.add("neon-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    const style = document.createElement("style");
    style.textContent = `
      .neon-cursor {
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${color};
        border-radius: 50%;
        box-shadow: 0 0 10px ${color};
        pointer-events: none;
        transform: translate(-50%, -50%);
      }
    `;
    document.head.appendChild(style);
  }

  static neonSpinner(selector, options = {}) {
    const spinner = document.querySelector(selector);
    if (!spinner) {
      console.warn(`NeonUI: No element found for ${selector}`);
      return;
    }

    const { size = "50px", color = "cyan" } = options;
    spinner.style.border = `${size} solid transparent`;
    spinner.style.borderTop = `${size} solid ${color}`;
    spinner.style.borderRadius = "50%";
    spinner.style.animation = "spin 1s linear infinite";
    spinner.style.width = size;
    spinner.style.height = size;
    spinner.style.margin = "auto";
    spinner.style.display = "block";

    const style = document.createElement("style");
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }

  static glowingBorder(selector, options = {}) {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`NeonUI: No element found for ${selector}`);
      return;
    }

    const { color = "cyan", intensity = 1.5 } = options;
    element.style.position = "relative";
    element.style.border = `2px solid ${color}`;
    element.style.boxShadow = `0 0 ${intensity * 5}px ${color}`;

    element.addEventListener("mouseenter", () => {
      element.style.boxShadow = `0 0 ${intensity * 20}px ${color}`;
    });

    element.addEventListener("mouseleave", () => {
      element.style.boxShadow = `0 0 ${intensity * 5}px ${color}`;
    });
  }

  static buttonRipple(selector, options = {}) {
    const button = document.querySelector(selector);
    if (!button) {
      console.warn(`NeonUI: No element found for ${selector}`);
      return;
    }

    button.style.position = "relative";
    button.style.overflow = "hidden";

    button.addEventListener("click", (e) => {
      const ripple = document.createElement("span");
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(255, 255, 255, 0.6)";
      ripple.style.transform = "scale(0)";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "ripple 0.6s linear";
      button.appendChild(ripple);

      const size = Math.max(button.offsetWidth, button.offsetHeight);
      const x = e.clientX - button.offsetLeft - size / 2;
      const y = e.clientY - button.offsetTop - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      const style = document.createElement("style");
      style.textContent = `
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    });

  }

  static neonHoverEffect(selector, options = {}) {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`NeonUI: No element found for ${selector}`);
      return;
    }

    const { color = "cyan", intensity = 1.5 } = options;

    element.style.transition = "all 0.3s ease-in-out";
    element.addEventListener("mouseenter", () => {
      element.style.boxShadow = `0 0 ${intensity * 20}px ${color}`;
      element.style.transform = "scale(1.05)";
    });

    element.addEventListener("mouseleave", () => {
      element.style.boxShadow = `0 0 ${intensity * 5}px ${color}`;
      element.style.transform = "scale(1)";
    });
  }

  static neonBackground(selector, options = {}) {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`NeonUI: No element found for ${selector}`);
      return;
    }

    const { color = "cyan", intensity = 2 } = options;
    element.style.animation = `neonBgGlow 3s infinite alternate`;

    const style = document.createElement("style");
    style.textContent = `
      @keyframes neonBgGlow {
        0% { background: ${color}; box-shadow: 0 0 ${intensity * 5}px ${color}; }
        100% { background: transparent; box-shadow: 0 0 ${intensity * 20}px ${color}; }
      }
    `;
    document.head.appendChild(style);
  }

  static neonTooltip(selector, tooltipText, options = {}) {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`NeonUI: No element found for ${selector}`);
      return;
    }
  
    const { color = "cyan", background = "black" } = options;
    const tooltip = document.createElement("div");
    tooltip.innerText = tooltipText;
    tooltip.style.position = "absolute";
    tooltip.style.padding = "5px 10px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.backgroundColor = background;
    tooltip.style.color = color;
    tooltip.style.boxShadow = `0 0 10px ${color}`;
    tooltip.style.visibility = "hidden";
    tooltip.style.transition = "visibility 0.3s";
    tooltip.style.pointerEvents = "none";
    element.appendChild(tooltip);
  
    element.addEventListener("mouseenter", () => {
      tooltip.style.visibility = "visible";
      tooltip.style.left = `${element.offsetWidth / 2 - tooltip.offsetWidth / 2}px`;
      tooltip.style.top = `-${tooltip.offsetHeight + 10}px`;
    });
  
    element.addEventListener("mouseleave", () => {
      tooltip.style.visibility = "hidden";
    });
  }  

  static neonProgressBar(selector, progress, options = {}) {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`NeonUI: No element found for ${selector}`);
      return;
    }
  
    const { color = "cyan", height = "20px" } = options;
    const progressBar = document.createElement("div");
    progressBar.style.height = height;
    progressBar.style.width = `${progress}%`;
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = "width 0.3s ease-in-out";
    progressBar.style.boxShadow = `0 0 10px ${color}`;
  
    element.appendChild(progressBar);
  }

  static neonFadeInOut(selector, options = {}) {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`NeonUI: No element found for ${selector}`);
      return;
    }
  
    const { color = "cyan", duration = "1s" } = options;
  
    element.style.opacity = "0";
    element.style.transition = `opacity ${duration} ease-in-out`;
    element.style.visibility = "hidden";
    element.style.boxShadow = `0 0 15px ${color}`;
  
    element.addEventListener("mouseenter", () => {
      element.style.opacity = "1";
      element.style.visibility = "visible";
    });
  
    element.addEventListener("mouseleave", () => {
      element.style.opacity = "0";
      element.style.visibility = "hidden";
    });
  }

  static neonScrollIndicator(options = {}) {
    const { color = "cyan", height = "5px" } = options;
    const indicator = document.createElement("div");
    indicator.style.position = "fixed";
    indicator.style.top = "0";
    indicator.style.left = "0";
    indicator.style.height = height;
    indicator.style.backgroundColor = color;
    indicator.style.zIndex = "9999";
    indicator.style.transition = "width 0.1s ease-out";
    document.body.appendChild(indicator);
  
    window.addEventListener("scroll", () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;
      indicator.style.width = `${scrollPercentage}%`;
    });
  }

  static neonTypingEffect(selector, text, options = {}) {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`NeonUI: No element found for ${selector}`);
      return;
    }
  
    const { color = "cyan", typingSpeed = 100, blinkSpeed = 500 } = options;
    let index = 0;
    element.style.color = color;
    element.style.borderRight = `2px solid ${color}`;
    element.style.whiteSpace = "nowrap";
    element.style.overflow = "hidden";
  
    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      }
    }
  
    function blink() {
      element.style.borderRight = element.style.borderRight ? "" : `2px solid ${color}`;
    }
  
    type();
    setInterval(blink, blinkSpeed);
  }  
}

window.NeonUI = NeonUI;
