function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function showVideo() {
    let videoFrame = document.getElementById("videoFrame");
    videoFrame.src = "https://www.youtube.com/embed/y0weLQa5hrU"; // Your Video ID
    document.getElementById("videoModal").style.display = "flex";
}

function showVideo1() {
    let videoFrame = document.getElementById("videoFrame1");
    videoFrame.innerHTML = `<video width="80%" controls>
                                <source src="./assets/booking_system.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>`;
    document.getElementById("videoModal1").style.display = "flex";
}

function closeVideo() {
    let videoFrame = document.getElementById("videoFrame");
    videoFrame.src = ""; // Stop the video when closing
    document.getElementById("videoModal").style.display = "none";
}

function closeVideo1() {
    let videoFrame1 = document.getElementById("videoFrame1");
    videoFrame1.src = ""; // Stop the video when closing
    document.getElementById("videoModal1").style.display = "none";
}

// Ensure modal is hidden on page load
    window.onload = function() {
        document.getElementById("videoModal").style.display = "none";
         document.getElementById("videoModal1").style.display = "none";
    };

 const counters = document.querySelectorAll('.highlight-number');
  const options = {
    root: null,
    threshold: 0.3,
  };

  // Stronger ease-out (more noticeable slowdown at the end)
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const animateCount = (el) => {
    const target = +el.getAttribute('data-target');
    const duration = 2000; // 2 seconds
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1); // from 0 to 1
      const easedProgress = easeOutCubic(progress);
      const current = Math.floor(easedProgress * target);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, options);

  counters.forEach(counter => {
    observer.observe(counter);
  });

  const aboutElements = document.querySelectorAll('.hidden-about');

  const aboutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed-about');
        observer.unobserve(entry.target); // Trigger once
      }
    });
  }, { threshold: 0.3 });

  aboutElements.forEach(el => aboutObserver.observe(el));


   const progressBars = document.querySelectorAll('.progress');

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const targetWidth = progressBar.getAttribute('data-target'); // Target width in percentage (e.g., 90%)
        const targetLabel = 18; // Final label value

        // Animate the width change of the progress bar
        progressBar.style.width = targetWidth + '%';

        // Animate the label (from 0 to 18)
        const interval = setInterval(() => {
          if (currentValue < targetLabel) {
            currentValue++;
            progressBar.textContent = currentValue;
          } else {
            clearInterval(interval); // Stop when the value reaches 18
          }
        }, 100); // Update every 100ms (you can adjust the speed here)

        // Stop observing the element after it's triggered
        observer.unobserve(progressBar);
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(progressBar => {
    obs.observe(progressBar);
  });