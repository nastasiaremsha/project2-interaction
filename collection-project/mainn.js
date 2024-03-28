const books = [{
	"title": "BODY TRUST",
	"author": "Hillary Kinavey",
	"genre": "Self-Transformation",
	"pullquote": "Think of all the shame you have been made to feel about your body, now think of how much money has been made off that shame.",
	"rating": "4/5",
	"image": "_imgs/plant copy.png"
	},
	
{
	"title": "Milk Fed",
	"author": "Melissa Broder",
	"genre": "Fiction",
	"pullquote": "This is the way of human beings, to forget. But you found your way back to me once and so can find your way back again, because I am always here..",
	"rating": "3/5",
	"image": "_imgs/plant copy.png"
	
	},
	{
	"title": "Anna Karenina",
	"author": "Leo Tolstoy",
	"genre": "Fiction",
	"pullquote": "If you look for perfection, you'll never be content.",
	"rating": "4.5/5",
	"image": "_imgs/plant copy.png"
	},
	{
	"title": "Crime and Punishment",
	"author": "Fyodr Dostoyevskiy",
	"genre": "Fiction",
	"pullquote": "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth.",
	"rating": "5/5",
	"image": "_imgs/plant copy.png"
	
	},
	{
	"title": "The Wind Up Bird Chronicle",
	"author": "Haruki Murakami",
	"genre": "Fiction",
	"pullquote": "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth.",
	"rating": "4.5/5",
	"image": "_imgs/plant copy.png"
	}]

	window.addEventListener('load',()=>{
	displayData(books);
	})

console.log(books);

document.addEventListener('DOMContentLoaded', () => {
    const bookshelf = document.getElementById('bookshelf');

//     Event delegation for modal close triggers
    bookshelf.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('modal-close')) {
            closeAllModals();
        }
    });
	

    // Event delegation for FAQ clicks
		// Event delegation for FAQ clicks
	bookshelf.addEventListener('click', (event) => {
		const target = event.target;
		if (target.closest('.faq')) {
			const faq = target.closest('.faq');
			openModal(faq);
		}
	});	

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeAllModals();
        }
    });
});

function displayData(books) {
    const bookshelf = document.getElementById('bookshelf');
    bookshelf.innerHTML = '';

    for (const [index, book] of books.entries()) {
        const answerId = `answer-${index}`;
        const itemElement = document.createElement('div');

        itemElement.innerHTML = `
            <div class="gridonne" id="${answerId}">
                <div class="faq">
                    <div class="faq-question" data-modal="${answerId}">
                        <img src="${book.image}" alt="" class="plant"/>
                    </div>
                    <h1>${book.title}</h1>
                </div>
                <div class="modal faq-answer" id="${answerId}">
                    <div class="modal-bg modal-close"></div>
                    <div class="content">
                        <div>
                            <div class="modal-close">X</div>
                            <h2>${book.title}</h2>
                            <h3>${book.author}</h3>
                            <h4>${book.genre}</h4>
                            <h5>${book.pullquote}</h5>
                        </div>
                    </div>
                </div>
            </div>
        `;
		
        bookshelf.appendChild(itemElement);
    }
}

function openModal(faq) {
    const answerId = faq.querySelector('.faq-question').dataset.modal;
    const answer = document.getElementById(answerId);
    answer.classList.add('opened');
}

function closeAllModals() {
    const openModals = document.querySelectorAll('.opened');
    openModals.forEach((openModal) => {
        openModal.classList.remove('opened');
    });
}

