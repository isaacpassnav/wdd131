const temples = [
    {
        id: 1,
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
        id: 2,
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        id: 3,
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
        id: 4,
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
        id: 5,
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
        id: 6,
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
        id: 7,
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        id: 8,
        templeName: "Trujillo Temple, Peru",
        location: "Trujillo City, Perú",
        dedicated: "2015,June,21",
        area: 387501,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/9943a99ff243f011c0533e3633cf9ecee0829628/full/320%2C/0/default"
      },
      {
        id: 9,
        templeName: "Temple of Los Olivos, Lima, Peru",
        location: "Los Olivos, Lima",
        dedicated: "2024, January, 14",
        area: 9601,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/3f3327a93b9f11eeb2f0eeeeac1e45f6554046d6/full/320%2C/0/default"
      },
      {
        id: 10,
        templeName: "Temple of Arequipa, Perú",
        location: "Arequipa City, Perú",
        dedicated: "2019, December, 15",
        area: 26969,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/55f6c59ce8f9c093a9c689067f8674335de544e2/full/320%2C/0/default"
      },
      {
        id: 11,
        templeName: "Anchorage Alaska Temple",
        location: "Anchorage, Alaska, United States",
        dedicated: "1999, January, 9",
        area: 11937,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/ef1d9b0a65b398d3d5aad2ccaad5aa79588b6cfd/full/320%2C/0/default"
      }
]

function filterTemples(criteria) {
  let filteredTemples;

  if (criteria === 'Old') {
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  } else if (criteria === 'New') {
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  } else if (criteria === 'Large') {
      filteredTemples = temples.filter(temple => temple.area > 90000);
  } else if (criteria === 'Small') {
      filteredTemples = temples.filter(temple => temple.area < 10000);
  } else {
      filteredTemples = temples;
  }

  const section2 = document.querySelector('.section2');
  section2.innerHTML = ''; 
  filteredTemples.forEach(temple => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
          <h3>${temple.templeName}</h3>
          <p>Location: ${temple.location}</p>
          <p>Dedicated: ${temple.dedicated}</p>
          <p>Area: ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
      section2.appendChild(card);
  });
}

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = e.target.getAttribute('data-section');
      filterTemples(section);
  });
});