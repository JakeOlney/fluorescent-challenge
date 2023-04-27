class Product extends HTMLElement {
    constructor() {
        super();

        this.variants = {
            "Ivory & Black Stripe - Extra small": {
                "available": true,
                "image": "1"
            },
            "Ivory & Black Stripe - Small": {
                "available": true,
                "image": "1"
            },
            "Ivory & Black Stripe - Medium": {
                "available": true,
                "image": "1"
            },
            "Ivory & Black Stripe - Large": {
                "available": false,
                "image": "1"
            },
            "Ivory & Black Stripe - Extra large": {
                "available": false,
                "image": "1"
            },
            "Burgundy - Extra small": {
                "available": true,
                "image": "2"
            },
            "Burgundy - Small": {
                "available": true,
                "image": "2"
            },
            "Burgundy - Medium": {
                "available": true,
                "image": "2"
            },
            "Burgundy - Large": {
                "available": false,
                "image": "2"
            },
            "Burgundy - Extra large": {
                "available": false,
                "image": "2"
            },
            "Green - Extra small": {
                "available": true,
                "image": "3"
            },
            "Green - Small": {
                "available": true,
                "image": "3"
            },
            "Green - Medium": {
                "available": true,
                "image": "3"
            },
            "Green - Large": {
                "available": false,
                "image": "3"
            },
            "Green - Extra large": {
                "available": false,
                "image": "3"
            },
            "Brown - Extra small": {
                "available": true,
                "image": "4"
            },
            "Brown - Small": {
                "available": true,
                "image": "4"
            },
            "Brown - Medium": {
                "available": true,
                "image": "4"
            },
            "Brown - Large": {
                "available": false,
                "image": "4"
            },
            "Brown - Extra large": {
                "available": false,
                "image": "4"
            },
            "Grey - Extra small": {
                "available": true,
                "image": "5"
            },
            "Grey - Small": {
                "available": true,
                "image": "5"
            },
            "Grey - Medium": {
                "available": true,
                "image": "5"
            },
            "Grey - Large": {
                "available": false,
                "image": "5"
            },
            "Grey - Extra large": {
                "available": false,
                "image": "5"
            },
            "Blue - Extra small": {
                "available": true,
                "image": "6"
            },
            "Blue - Small": {
                "available": true,
                "image": "6"
            },
            "Blue - Medium": {
                "available": true,
                "image": "6"
            },
            "Blue - Large": {
                "available": false,
                "image": "6"
            },
            "Blue - Extra large": {
                "available": false,
                "image": "6"
            }
        }

        this.selectors = {
            mainImage: '.product-images__main-image img',
            thumbnail: '.product-image-thumbnail',
            variantOptionButton: '.variant-option__button',
            currentVariantOptionButton: '.variant-option__button.current',
            variantOptionList1: '.variant-option__list--1',
            variantOptionList2: '.variant-option__list--2',
            addToCartButton: '.add-to-cart__button'
        }

        this.elements = {
            mainImage: this.querySelector(this.selectors.mainImage),
            thumbnails: this.querySelectorAll(this.selectors.thumbnail),
            variantOptionList1: this.querySelector(this.selectors.variantOptionList1),
            variantOptionList2: this.querySelector(this.selectors.variantOptionList2),
            variantOptionButtons: this.querySelectorAll(this.selectors.variantOptionButton),
            addToCartButton: this.querySelector(this.selectors.addToCartButton)
        }

        this.classes = {
            current: 'current'
        }

        this.translations = {
            addToCart: 'Add to bag',
            soldOut: 'Sold out'
        }

        this.elements.thumbnails.forEach((thumbnail) => {
            thumbnail.addEventListener('click', this.handleThumbnailClick.bind(this));
        });

        this.elements.variantOptionButtons.forEach((variantOptionButton) => {
            variantOptionButton.addEventListener('click', this.handleVariantClick.bind(this));
        });
    }

    handleThumbnailClick(e) {
        const $this = e.currentTarget;
        const image = $this.querySelector('img');

        this.removeClassFromElements(this.elements.thumbnails, this.classes.current);
        $this.classList.add(this.classes.current);
        this.updateMainImage(image.src);
    }

    handleVariantClick(e) {
        const $this = e.currentTarget;
        let option1, option2, options;
        
        if ($this.closest(this.selectors.variantOptionList1) !== null) {
            option1 = $this.dataset.value;
            option2 = this.elements.variantOptionList2.querySelector(this.selectors.currentVariantOptionButton).dataset.value;
            options = this.elements.variantOptionList1.querySelectorAll(this.selectors.variantOptionButton);
        } else {
            option1 = this.elements.variantOptionList1.querySelector(this.selectors.currentVariantOptionButton).dataset.value;
            option2 = $this.dataset.value;
            options = this.elements.variantOptionList2.querySelectorAll(this.selectors.variantOptionButton);
        }

        this.removeClassFromElements(options, this.classes.current);
        $this.classList.add(this.classes.current);

        const variant = option1 + " - " + option2;
        const available = this.variants[variant].available;
        const image = this.variants[variant].image;

        if (available) {
            this.elements.addToCartButton.textContent = this.translations.addToCart;
        } else {
            this.elements.addToCartButton.textContent = this.translations.soldOut;
        }

        for (let i = 0; i < this.elements.thumbnails.length; i++) {
            const thumbnail = this.elements.thumbnails[i];

            if (thumbnail.dataset.variant === image) {
                thumbnail.click();
                break;
            }
        }
    }

    updateMainImage(src) {
        this.elements.mainImage.src = src;
    }

    removeClassFromElements(elems, className) {
        elems.forEach((elem) => {
            elem.classList.remove(className)
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    customElements.define('custom-product', Product);
});
