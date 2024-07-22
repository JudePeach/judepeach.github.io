




function toggleMenu(){
    const menu = document.querySelector('.mobile-menu-links');
    const icon = document.querySelector('.mobile-nav-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function showStory(){
    const title = document.createElement('h1');
    const titleText = document.createTextNode("Story");
    title.appendChild(titleText);



    const story = document.createElement('p');
    story.classList.add('hidden'); // Start hidden
    const text = document.createTextNode("Furnival Press, located in Canvey Island, Essex, excels in delivering a wide array of specialized printing services. Known for its high-quality brochures, bespoke wedding and funeral prints, and eye-catching banners and advertisements, the company meets diverse client needs with precision and care. The addition of advanced digital presses and finishing equipment ensures exceptional output, whether it's custom clothing prints or large format signage. Furnival Press combines traditional craftsmanship with modern technology, making it a trusted partner for all printing requirements, committed to swift turnarounds and unparalleled customer service.");
    
    story.appendChild(text);

    const storyContainer = document.getElementById("story-container");
    storyContainer.appendChild(title);
    storyContainer.appendChild(story);

    var button = document.getElementById("storyButton");
    button.disabled = true;

    // Trigger the animation
    setTimeout(() => {
        story.classList.add('fade-in');
    }, 10);
}

function showHistory(){
    const title = document.createElement('h1');
    const titleText = document.createTextNode("History");
    title.appendChild(titleText);
    const history = document.createElement('p');
    history.classList.add('hidden'); // Start hidden
    const historyText = document.createTextNode("The Furnival Press, established in 1861 by George Barber in London, has a storied legacy in the printing industry. Originally catering to the legal profession and later supporting the suffragette movement, the company expanded under Barber's son Richard. After joining the Jewish Chronicle in 1960 and relocating to Camberwell in 1970, the Press flourished under new leadership when Johnny Gumb took over in 1982. Embracing digital printing innovations, the company moved to Stockwell in 2002 and was acquired by longtime employee David Peach in 2016. Peach's investments in advanced equipment and a partnership with the Type Archive in 2018 further modernized operations. In late 2022, the Furnival Press moved to Canvey Island, Essex, ensuring continued excellence in printing while maintaining a London presence.");
    history.appendChild(historyText);

    const historyContainer = document.getElementById("history-container");
    historyContainer.appendChild(title);
    historyContainer.appendChild(history);

    // Trigger the animation
    setTimeout(() => {
        history.classList.add('fade-in');
    }, 10);

    var button = document.getElementById("historyButton");
    button.disabled = true;

}