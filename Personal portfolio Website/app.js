function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// Toggle hamburger background and color based on sidebar visibility
if (sidebar.classList.contains('active')) {
    hamburgerIcon.style.backgroundColor = 'rgb(157, 155, 155)'; // Match sidebar color
    hamburgerIcon.style.color = '#fff'; // White icon color
} else {
    hamburgerIcon.style.backgroundColor = 'white'; // Match main content background (white)
    hamburgerIcon.style.color = '#333'; // Dark icon color
}



  
  

 
 