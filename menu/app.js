const menu = [
  {
    id: 1,
    title: "Champorado",
    category: "breakfast",
    price: 20.00,
    img: "./menu/images/champorado.jpg",
    desc: ` Visitors might not want to skip the menu shown. These are cheap, high quality ingredients yet fresh due to it being harvest or caught a while ago.`
    // desc: `Mas masarap pa sa umaga.                     `,
  },
  {
    id: 2,
    title: "Inihaw na Isda",
    category: "dinner",
    price: 100.00,
    img: "./menu/images/inihaw-na-bangus.jpg",
    desc: ` Visitors might not want to skip the menu shown. These are cheap, high quality ingredients yet fresh due to it being harvest or caught a while ago.`

    // desc: `Mahalimuyak na amoy.                     `,
  },
  {
    id: 3,
    title: "Kutsinta",
    category: "kakanin",
    price: 20.00,
    img: "./menu/images/kutsinta.jpg",
    desc: ` Visitors might not want to skip the menu shown. These are cheap, high quality ingredients yet fresh due to it being harvest or caught a while ago.`

    // desc: `kainin kasama ang kasintahan.                     `,
  },
  {
    id: 4,
    title: "Arrozcaldo",
    category: "breakfast",
    price: 30.00,
    img: "./menu/images/arrozcaldo.jpg",
    desc: ` Visitors might not want to skip the menu shown. These are cheap, high quality ingredients yet fresh due to it being harvest or caught a while ago.`

    // desc: `numero unong almusalan.                      `,
  },
  {
    id: 5,
    title: "Daing",
    category: "lunch",
    price: 50.00,
    img: "./menu/images/Daing.jpg",
    desc: ` Visitors might not want to skip the menu shown. These are cheap, high quality ingredients yet fresh due to it being harvest or caught a while ago.`

    // desc: `Gumaca's finest.                      `,
  },
  {
    id: 6,
    title: "Tikoy",
    category: "kakanin",
    price: 100.00,
    img: "./menu/images/tikoy.jfif",
    desc: ` Visitors might not want to skip the menu shown. These are cheap, high quality ingredients yet fresh due to it being harvest or caught a while ago.`

    // desc: `Pinagmamalaki naming gumaqueno.                     `,
  },
  {
    id: 7,
    title: "Chami",
    category: "breakfast",
    price: 50.00,
    img: "./menu/images/chami.jpg",
    desc: ` Visitors might not want to skip the menu shown. These are cheap, high quality ingredients yet fresh due to it being harvest or caught a while ago.`

    // desc: `masarap kaining tuwing hapon.                      `,
  },
  {
    id: 8,
    title: "Laing",
    category: "lunch",
    price: 100.00,
    img: "./menu/images/laing.jpg",
    desc: ` Visitors might not want to skip the menu shown. These are cheap, high quality ingredients yet fresh due to it being harvest or caught a while ago.`

    // desc: ` Dinadayo ng marami.                      `,
  },
  {
    id: 9,
    title: "Sinukmani",
    category: "kakanin",
    price: 20.00,
    img: "./menu/images/sinukmani.jpg",
    desc: ` Visitors might not want to skip the menu shown. These are cheap, high quality ingredients yet fresh due to it being harvest or caught a while ago.`

    // desc: ` paboritong meryendahan.                     `,
  },
  {
    id: 10,
    title: "Pusit",
    category: "dinner",
    price: 200.00,
    img: "./menu/images/inihaw-na-pusit.jfif",
    desc: ` Visitors might not want to skip the menu shown. These are cheap, high quality ingredients yet fresh due to it being harvest or caught a while ago.`

    // desc: `mahimbing na tulog.                     `,
  },
  {
    id: 11,
    title: "Sinaing na Tulingan",
    category: "lunch",
    price: 200.00,
    img: "./menu/images/sinaing-na-tulingan.jpg",
    desc: ` Visitors might not want to skip the menu shown. These are cheap, high quality ingredients yet fresh due to it being harvest or caught a while ago.`
    // desc: `bagay sa inuman.                     `,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-centermenu");
const btnContainer = document.querySelector(".btn-containermenu");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-itemmenu">
          <img src=${item.img} alt=${item.title} class="photomenu" />
          <div class="item-infomenu">
            <h1>
              <h4>${item.title}</h4>
              <h4 class="pricemenu">Php.${item.price}</h4>
            </h1>
            <p class="item-textmenu">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
 }
 function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btnmenu" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btnmenu");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
