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