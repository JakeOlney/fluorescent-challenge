# Fluorescent challenge

Thanks for taking a look, and please let me know if you have any questions!

Given that the idea is to be working with Shopify themes, I've opted to use standard HTML, CSS, and Vanilla JS/Web components. For simplicity, things are being hosted with GitHub's **Pages** feature.

You can can visit the page [here](https://jakeolney.github.io/fluorescent-challenge/).

## Implementation

### Responsiveness

Unfortunately, due to time contraints, I wasn't able to make things repsonsive. I felt that priority should be placed on making at least one version (ie. desktop vs. mobile) the best it could be, so I started with desktop as that's the mock-up that was provided. That said, I did start out building the main structure with the intention of making things repsonsive, so there are some initial considerations included. The idea was to have the following:

  - Main image (full-width)
  - Image thumbnails (vertical layout - full-width)
  - Product information (full-width)

### Variant selection

I've made the assumption that changing colour is the only variant option that would result in changing the variant image. I've also made the assumption that the **Large** and **Extra large** sizes would be sold out in all colours.

With those assumptions, I've hardcoded the variant data in a very simple form and taken the basic approach of:

  - Assigning a "variant ID" to each image
  - Determining which variant is currently selected based on each selected option

Obviously, this process would be a little more complicated in practice, however I feel like the basic principles of my approach still apply.

### Product title

The mockup included the colour in the title, however I've left this out as it would really only make sense in a scenario where the colour swatches were actually links to a separate product page. This is very doable, however I don't think really aligns with this challenge.

### Fonts

I _think_ that I've used the correct fonts, however I had to eye-ball it as Figma only referenced the base font family name, and the font files that were provided were very specific versions. With that, apologies if things are off.
