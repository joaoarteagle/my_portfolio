import style from "./General.module.css"

function ThemeChanger() {
//   const themeToggle = document.querySelector('.theme-toggle');
//   const body = document.body;

//   themeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-theme');
//     if (body.classList.contains('dark-theme')) {
//       localStorage.setItem('theme', 'dark');
//     } else {
//       localStorage.setItem('theme', 'light');
//     }
//   });

//   // Load the saved theme from localStorage
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme) {
//     body.classList.add(savedTheme);
//   }
  return(
    <div className={style.themeToggle}>
      <span>
        <img src={`src/assets/img/Sun.png`} alt="Sun Icon"  />
      </span>
      <span>
        <img src={`src/assets/img/Moon.png`} alt="Moon Icon"  />
      </span>
    </div>
  );
}

export default ThemeChanger;